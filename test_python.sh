export GITHUB_TOKEN="dummy"
export GITHUB_REPOSITORY="dummy/repo"
export PR_NUMBER="1"
export MAX_REVIEWS="3"
export GITHUB_OUTPUT="output.txt"

python3 -c "
import os, json, urllib.request, re, sys

# Mock urllib.request.urlopen
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

github_token = os.environ.get('GITHUB_TOKEN')
github_repo = os.environ.get('GITHUB_REPOSITORY')
pr_number = os.environ.get('PR_NUMBER')
try:
    max_reviews = int(os.environ.get('MAX_REVIEWS', '3'))
except:
    max_reviews = 3

fetch_url = f'https://api.github.com/repos/{github_repo}/issues/{pr_number}/comments?per_page=100'
existing_body = ''

while fetch_url:
    req = urllib.request.Request(fetch_url, headers={
        'Authorization': f'Bearer {github_token}',
        'Accept': 'application/vnd.github.v3+json'
    })
    try:
        with urllib.request.urlopen(req) as response:
            comments = json.loads(response.read().decode('utf-8'))
            for c in comments:
                if c.get('user', {}).get('type') == 'Bot' and '## Deployment Impact Analysis' in c.get('body', ''):
                    existing_body = c.get('body', '')

            link_header = response.headers.get('Link')
            fetch_url = None
            if link_header:
                links = link_header.split(',')
                for link in links:
                    if 'rel=\"next\"' in link:
                        fetch_url = link[link.find('<')+1 : link.find('>')]
                        break
    except Exception as e:
        print(f'Error fetching comments: {e}')
        break

if existing_body:
    match = re.search(r'<!-- ai-review-count: (\d+) -->', existing_body)
    if match:
        current_count = int(match.group(1))
        if current_count >= max_reviews:
            print(f'Max reviews ({max_reviews}) reached. Current count: {current_count}.')
            with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
                f.write('skip=true\n')
            sys.exit(0)
        else:
            print(f'Review count is {current_count} (max {max_reviews}).')

with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
    f.write('skip=false\n')
"
cat output.txt
