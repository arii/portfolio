#!/bin/bash
# Exit immediately on any error (intentional): a partial preview-management run
# risks leaving the gh-pages branch in a corrupt/inconsistent state, so we
# prefer a clean abort over silent failure.
set -e

# Configuration
GRACE_PERIOD_SECONDS=${GRACE_PERIOD_SECONDS:-7200} # 2 hours
MAX_AGE_SECONDS=${MAX_AGE_SECONDS:-2592000} # 30 days
PROTECTED_PATHS=("assets" "previews" "portfolio" "css" "js" "img" "images" "public")
# Root files are implicitly protected by find -mindepth 2

# Arguments
OPEN_PR_BRANCHES_FILE=$1

echo "Starting preview management..."

# 1. Get active branches
ACTIVE_BRANCHES=$(git ls-remote --heads origin | awk '{print $2}' | sed 's|^refs/heads/||')

# 2. Get open PR branches if provided
if [ -n "$OPEN_PR_BRANCHES_FILE" ] && [ -f "$OPEN_PR_BRANCHES_FILE" ]; then
    OPEN_PR_BRANCHES=$(cat "$OPEN_PR_BRANCHES_FILE")
    echo "Loaded open PR branches from $OPEN_PR_BRANCHES_FILE"
else
    OPEN_PR_BRANCHES=""
    echo "No open PR branches file provided or file not found."
fi

NOW=$(date +%s)

echo "Scanning for stale previews..."

# Find directories containing index.html (excluding root)
# mindepth 2 ensures we don't look at the root directory
while IFS= read -r index_file; do
    dir=$(dirname "$index_file" | sed 's|^\./||')

    # Skip protected top-level directories
    top_level="${dir%%/*}"
    is_protected=false
    for p in "${PROTECTED_PATHS[@]}"; do
        if [ "$top_level" = "$p" ]; then
            is_protected=true
            break
        fi
    done
    if [ "$is_protected" = true ]; then
        echo "Skipping protected path: $dir"
        continue
    fi

    # Check branch existence
    branch_exists=false
    if echo "$ACTIVE_BRANCHES" | grep -Fxq -- "$dir"; then
        branch_exists=true
    fi

    # Check if it has an open PR (if info provided)
    has_open_pr=false
    if [ -n "$OPEN_PR_BRANCHES" ]; then
        if echo "$OPEN_PR_BRANCHES" | grep -Fxq -- "$dir"; then
            has_open_pr=true
        fi
    else
        # If we don't have PR info, we assume it's okay if branch exists
        has_open_pr=true
    fi

    # Get timestamps
    COMMIT_TS=$(cat "$dir/.commit-timestamp" 2>/dev/null || cat "$dir/.timestamp" 2>/dev/null || echo 0)
    DEPLOY_TS=$(cat "$dir/.deploy-timestamp" 2>/dev/null || echo "$COMMIT_TS")

    if [ "$COMMIT_TS" -eq 0 ]; then
        # Fallback to git log if no timestamp file (only works if full history or if commit is in shallow)
        COMMIT_TS=$(git log -1 --format=%ct -- "$dir" 2>/dev/null || echo 0)
        DEPLOY_TS=$COMMIT_TS
    fi

    SHOULD_PRUNE=false
    REASON=""

    if [ "$branch_exists" = false ]; then
        # Branch deleted
        AGE=$((NOW - DEPLOY_TS))
        if [ "$AGE" -gt "$GRACE_PERIOD_SECONDS" ]; then
            SHOULD_PRUNE=true
            REASON="branch deleted and grace period expired (age: ${AGE}s, grace: ${GRACE_PERIOD_SECONDS}s)"
        else
            echo "Keeping $dir: branch deleted but within grace period (age: ${AGE}s)"
        fi
    elif [ -n "$OPEN_PR_BRANCHES" ] && [ "$has_open_pr" = false ]; then
        # Branch exists but PR is closed
        AGE=$((NOW - DEPLOY_TS))
        if [ "$AGE" -gt "$GRACE_PERIOD_SECONDS" ]; then
            SHOULD_PRUNE=true
            REASON="PR closed and grace period expired (age: ${AGE}s)"
        else
            echo "Keeping $dir: PR closed but within grace period (age: ${AGE}s)"
        fi
    else
        # Branch exists and has open PR (or no PR info)
        AGE=$((NOW - DEPLOY_TS))
        if [ "$AGE" -gt "$MAX_AGE_SECONDS" ]; then
            SHOULD_PRUNE=true
            REASON="exceeded maximum age (age: ${AGE}s, max: ${MAX_AGE_SECONDS}s)"
        else
            echo "Keeping $dir: active (age: ${AGE}s)"
        fi
    fi

    if [ "$SHOULD_PRUNE" = true ]; then
        echo "Pruning $dir: $REASON"
        git rm -rf --ignore-unmatch -- "$dir"
    fi
done < <(find . -mindepth 2 -maxdepth 4 -name "index.html")

# 3. Clean up empty parent directories
find . -type d -empty -not -path '*/.*' -delete

# 4. Regenerate previews/data.json
echo "Regenerating previews/data.json..."
mkdir -p previews

# We re-scan to build the JSON
# Using a temporary file to construct JSON safely
TEMP_JSON=$(mktemp)
echo "{" > "$TEMP_JSON"
FIRST=true

while IFS= read -r index_file; do
    dir=$(dirname "$index_file" | sed 's|^\./||')

    # Skip root
    if [ "$dir" = "." ]; then continue; fi

    # Skip protected paths
    top_level="${dir%%/*}"
    is_protected=false
    for p in "${PROTECTED_PATHS[@]}"; do
        if [ "$top_level" = "$p" ]; then
            is_protected=true
            break
        fi
    done
    if [ "$is_protected" = true ]; then continue; fi

    # Read metadata
    COMMIT_TS=$(cat "$dir/.commit-timestamp" 2>/dev/null || cat "$dir/.timestamp" 2>/dev/null || echo 0)
    DEPLOY_TS=$(cat "$dir/.deploy-timestamp" 2>/dev/null || echo "$COMMIT_TS")
    SHA=$(cat "$dir/.commit-sha" 2>/dev/null || echo "unknown")

    if [ "$COMMIT_TS" -eq 0 ]; then
         COMMIT_TS=$(git log -1 --format=%ct -- "$dir" 2>/dev/null || echo 0)
         DEPLOY_TS=$COMMIT_TS
    fi

    if [ "$FIRST" = false ]; then
        echo "," >> "$TEMP_JSON"
    fi
    {
        echo "  \"$dir\": {"
        echo "    \"commitTimestamp\": $COMMIT_TS,"
        echo "    \"deployTimestamp\": $DEPLOY_TS,"
        echo "    \"sha\": \"$SHA\""
        echo "  }"
    } >> "$TEMP_JSON"
    FIRST=false
done < <(find . -mindepth 2 -maxdepth 4 -name "index.html" | sort)

echo "}" >> "$TEMP_JSON"
mv "$TEMP_JSON" previews/data.json

# Add to git if changed
git add previews/data.json

# Check if anything changed in the index
if git diff --cached --quiet; then
    echo "No changes made."
else
    echo "Changes staged for commit."
fi
