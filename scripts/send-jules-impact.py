# pylint: disable=invalid-name,logging-fstring-interpolation,missing-docstring,too-many-branches,too-many-locals,too-many-statements,wrong-import-order
import glob
import json
import logging
import os
import sys
import urllib.request
import urllib.error

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    from dev_tools.services.jules import JulesClient
except ImportError:
    JulesClient = None

def is_skipped_review(content: str) -> bool:
    lines = [line.strip() for line in content.splitlines() if line.strip()]
    return len(lines) == 2 and lines[1].startswith("Skipped:")


def is_skipped_verdict(data: dict) -> bool:
    return (
        data.get("llmVerdict") == "pass"
        and data.get("highCount") == 0
        and len(data.get("routes", [])) == 0
        and data.get("passed") is True
    )

def has_existing_comment(repo: str, pr_number: str, token: str) -> bool:
    url = f"https://api.github.com/repos/{repo}/issues/{pr_number}/comments"
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
    })
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                comments = json.loads(response.read().decode('utf-8'))
                for comment in comments:
                    if comment.get("body", "").startswith("## Deployment Impact Analysis"):
                        return True
    except Exception as e:
        logger.error(f"Failed to fetch PR comments: {e}")
    return False

def post_pr_comment(repo: str, pr_number: str, token: str, body: str):
    url = f"https://api.github.com/repos/{repo}/issues/{pr_number}/comments"
    data = json.dumps({"body": body}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json"
    }, method="POST")
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 201:
                logger.info("Successfully posted impact analysis to PR.")
            else:
                logger.warning(f"Failed to post PR comment, status: {response.status}")
    except Exception as e:
        logger.error(f"Failed to post PR comment: {e}")


def main():
    task_id = os.environ.get("TASK_ID")
    repo = os.environ.get("GITHUB_REPOSITORY")
    pr_number = os.environ.get("PR_NUMBER")
    token = os.environ.get("GITHUB_TOKEN")

    already_reviewed = False
    if repo and pr_number and token:
        if has_existing_comment(repo, pr_number, token):
            logger.info("PR already has a Deployment Impact Analysis comment. Skipping further sending.")
            already_reviewed = True
    else:
        logger.warning("Missing GITHUB_REPOSITORY, PR_NUMBER, or GITHUB_TOKEN environment variables. Cannot check for existing comments.")

    if already_reviewed:
        sys.exit(0)

    artifacts_dir = "artifacts"

    # We must proceed even if artifacts is missing because .boomtick/logs/reviews might exist!
    body = "## Deployment Impact Analysis\n\n"
    has_valid_reviews = False

    if os.path.isdir(artifacts_dir):
        # Try deployment-review.md first
        deployment_review_path = os.path.join(artifacts_dir, "deployment-review.md")
        impact_md_path = os.path.join(artifacts_dir, "impact-analysis", "impact.md")

        if os.path.isfile(deployment_review_path):
            try:
                with open(deployment_review_path, "r", encoding="utf-8") as f:
                    body += f.read() + "\n\n"
            except IOError as e:
                logger.error(f"Failed to read {deployment_review_path}: {e}")
        elif os.path.isfile(impact_md_path):
            try:
                with open(impact_md_path, "r", encoding="utf-8") as f:
                    body += f.read() + "\n\n"
            except IOError as e:
                logger.error(f"Failed to read {impact_md_path}: {e}")
        else:
            body += "No impact report found in artifacts.\n\n"

        # Append individual review files
        review_files = [
            "gemini-review.md",
            "github-models-review.md",
            "gemini-code-review.md",
            "github-models-code-review.md",
        ]

        for filename in review_files:
            filepath = os.path.join(artifacts_dir, filename)
            if os.path.isfile(filepath):
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                        if not is_skipped_review(content):
                            body += content + "\n\n"
                            has_valid_reviews = True
                except IOError as e:
                    logger.error(f"Failed to read {filepath}: {e}")

        # Append verdict JSONs
        verdicts = []
        # Safe globbing within the artifacts directory to prevent traversal
        json_pattern = os.path.join(artifacts_dir, "*-verdict.json")
        for filepath in glob.glob(json_pattern):
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                    try:
                        data = json.loads(content)
                        if not is_skipped_verdict(data):
                            verdicts.append((os.path.basename(filepath), content))
                            has_valid_reviews = True
                    except Exception as e:
                        logger.error(f"Invalid JSON in verdict file {filepath}: {e}")
                        continue
            except IOError as e:
                logger.error(f"Failed to read JSON verdict {filepath}: {e}")

        if verdicts:
            body += "## Verdict JSONs\n"
            for fname, content in verdicts:
                body += f"### {fname}\n```json\n{content}\n```\n\n"
    else:
        logger.warning(f"Artifacts directory '{artifacts_dir}' not found. Checking `.boomtick/logs/reviews`.")

    # Also check Python CLI review files in .boomtick/logs/
    for search_dir in [".boomtick/logs/reviews", ".boomtick/logs/logs/reviews"]:
        if os.path.isdir(search_dir):
            for filepath in glob.glob(os.path.join(search_dir, "pr-review-*.md")):
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                        if not is_skipped_review(content):
                            body += content + "\n\n"
                            has_valid_reviews = True
                except IOError as e:
                    logger.error(f"Failed to read {filepath}: {e}")

    if not has_valid_reviews:
        logger.info("No valid reviews found in artifacts or logs. Skipping sending impact analysis.")
        sys.exit(0)

    # Post comment to GitHub PR
    if repo and pr_number and token:
        post_pr_comment(repo, pr_number, token, body)

    # Send the message to Jules
    if task_id:
        session_id = f"sessions/{task_id}"
        logger.info(f"Targeting session: {session_id}")
        if JulesClient:
            try:
                client = JulesClient()
                result = client.send_message(session_id, body)
                if result.get("status") != "success":
                    logger.warning(f"⚠️ Failed to send message to Jules API (non-blocking): {result}")
                else:
                    logger.info(f"✅ Sent impact analysis to {session_id}")
            except Exception as e:
                logger.warning(f"⚠️ Exception while sending message to Jules API (non-blocking): {e}")
        else:
            logger.warning("JulesClient could not be imported. Cannot send to Jules.")


if __name__ == "__main__":
    main()
