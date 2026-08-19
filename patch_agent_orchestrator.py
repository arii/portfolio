import sys

with open('.github/workflows/agent-orchestrator.yml', 'r') as f:
    lines = f.readlines()

new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    if 'uses: ./.github/actions/setup-workspace' in line:
        i+=2
        continue
    elif 'name: Setup Workspace' in line:
        pass
    else:
        new_lines.append(line)
    i+=1

with open('.github/workflows/agent-orchestrator.yml', 'w') as f:
    f.writelines(new_lines)
