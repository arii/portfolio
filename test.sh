COMMENTS='[{"user":{"type":"Bot"}, "body":"## Deployment Impact Analysis\n<!-- ai-review-count: 3 -->"}]'
COUNT=$(echo "$COMMENTS" | jq -r '.[] | select(.user.type == "Bot" and (.body | contains("## Deployment Impact Analysis"))) | .body' | grep -oP '<!-- ai-review-count: \K\d+' | tail -n 1 || true)
echo "COUNT: $COUNT"
