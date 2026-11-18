// tests/composite-action.test.ts
import { describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import yaml from 'yaml';

describe('Composite Action Manifest', () => {
  it('should define a valid composite action without local submodule checkout steps', () => {
    const actionPath = path.join(__dirname, '../.github/actions/impact-analysis/action.yml');
    const content = fs.readFileSync(actionPath, 'utf-8');
    const parsed = yaml.parse(content);

    expect(parsed.runs.using).toBe('composite');
    expect(parsed.inputs).toHaveProperty('github_token');

    const stepsStr = JSON.stringify(parsed.runs.steps);
    expect(stepsStr).not.toContain('actions/checkout');
    expect(stepsStr).not.toContain('actions/create-github-app-token');
  });
});

describe('Shared workspace setup', () => {
  for (const workflow of ['ci', 'deploy', 'preview']) {
    it(`uses the released Node-only setup in ${workflow}`, () => {
      const workflowPath = path.resolve(`.github/workflows/${workflow}.yml`);
      const parsed = yaml.parse(fs.readFileSync(workflowPath, 'utf-8'));
      const setupSteps = Object.values(parsed.jobs as Record<string, { steps?: Record<string, unknown>[] }>)
        .flatMap(job => job.steps ?? [])
        .filter(step => step.name === 'Setup Workspace');

      expect(setupSteps).toHaveLength(1);
      expect(setupSteps[0].uses).toBe('arii/boomtick/.github/actions/setup-workspace@3e970a570aee0a550ec6409de769c201c9a5b900');
      expect(setupSteps[0].with).toEqual({ 'setup-python': 'false' });
      expect(fs.existsSync('.github/actions/setup-workspace/action.yml')).toBe(false);
    });
  }
});
