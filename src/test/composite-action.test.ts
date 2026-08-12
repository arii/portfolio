import { describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import yaml from 'yaml';

describe('Composite Action Manifest', () => {
  it('should define a valid composite action without manual checkout steps', () => {
    const actionPath = path.resolve(process.cwd(), '.github/actions/setup-workspace/action.yml');
    const content = fs.readFileSync(actionPath, 'utf-8');
    const parsed = yaml.parse(content);

    expect(parsed.runs.using).toBe('composite');

    // Ensure no step manually checks out arii/boomtick
    const stepsStr = JSON.stringify(parsed.runs.steps);
    expect(stepsStr).not.toContain('actions/checkout@v4');
    expect(stepsStr).not.toContain('repository: arii/boomtick');
  });
});
