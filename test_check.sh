#!/bin/bash
set -e

# Mock the check before Docker run
export GITHUB_TOKEN="dummy"
export GITHUB_REPOSITORY="dummy/repo"
export PR_NUMBER="1"
export MAX_REVIEWS="3"

echo "Checking review count..."
python3 -c "
import os
import json
import urllib.request
import re

github_token = os.environ.get('GITHUB_TOKEN')
github_repo = os.environ.get('GITHUB_REPOSITORY')
pr_number = os.environ.get('PR_NUMBER')
max_reviews = int(os.environ.get('MAX_REVIEWS', '3'))

fetch_url = f'https://api.github.com/repos/{github_repo}/issues/{pr_number}/comments?per_page=100'

# Mock urllib.request.urlopen to avoid real network call
class MockResponse:
    def __init__(self, data):
        self.data = data
        self.headers = {}
    def read(self):
        return self.data
    def __enter__(self):
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

def mock_urlopen(req):
    return MockResponse(b'[{\"user\": {\"type\": \"Bot\"}, \"body\": \"## Deployment Impact Analysis\\n<!-- ai-review-count: 3 -->\"}]'.replace(b'\\n', b'\\\\n'))

urllib.request.urlopen = mock_urlopen

existing_body = ''
req_get = urllib.request.Request(fetch_url, headers={
    'Authorization': f'Bearer {github_token}',
    'Accept': 'application/vnd.github.v3+json'
})
with urllib.request.urlopen(req_get) as response:
    comments = json.loads(response.read().decode('utf-8'))
    for c in comments:
        if c.get('user', {}).get('type') == 'Bot' and '## Deployment Impact Analysis' in c.get('body', ''):
            existing_body = c.get('body', '')
            break

if existing_body:
    match = re.search(r'<!-- ai-review-count: (\d+) -->', existing_body)
    if match:
        current_count = int(match.group(1))
        if current_count >= max_reviews:
            print(f'::set-output name=skip::true')
            exit(0)

print(f'::set-output name=skip::false')
"
