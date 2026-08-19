export GITHUB_TOKEN="dummy"
# Just a syntax check
echo "gh api 'repos/owner/repo/issues/1/comments' --paginate --jq '.[] | select(.user.type == \"Bot\" and (.body | contains(\"## Deployment Impact Analysis\"))) | .body'"
