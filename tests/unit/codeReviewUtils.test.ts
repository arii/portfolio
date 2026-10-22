import { describe, it, expect } from 'vitest';
import {
  cleanupFeedback,
  parseCodeReviewVerdict,
  parseCodeReviewStateDetailed,
  parseCodeReviewState,
} from '../../scripts/codeReviewUtils';

describe('codeReviewUtils', () => {
  describe('parseCodeReviewStateDetailed empty findings resilience', () => {
    it('normalizes empty JSON object ({}) to empty findings array without parse error', () => {
      const feedback = `No performance regressions or standard violations detected.

[VERDICT: PASS]

<findings>
{}
</findings>`;
      const result = parseCodeReviewStateDetailed(feedback);
      expect(result.state).toBeDefined();
      expect(result.state?.findings).toEqual([]);
      expect(result.parseError).toBeUndefined();
      expect(result.errors).toBeUndefined();

      const simpleState = parseCodeReviewState(feedback);
      expect(simpleState?.findings).toEqual([]);
    });

    it('normalizes naked empty JSON array ([]) to empty findings array without parse error', () => {
      const feedback = `No issues found.

<findings>
[]
</findings>

[VERDICT: PASS]`;
      const result = parseCodeReviewStateDetailed(feedback);
      expect(result.state).toBeDefined();
      expect(result.state?.findings).toEqual([]);
      expect(result.parseError).toBeUndefined();
      expect(result.errors).toBeUndefined();

      const simpleState = parseCodeReviewState(feedback);
      expect(simpleState?.findings).toEqual([]);
    });

    it('normalizes naked array of findings ([{...}]) to standard CodeReviewState object', () => {
      const feedback = `<findings>
[
  {
    "id": "raw-tailwind",
    "file": "src/App.tsx",
    "line": 10,
    "issue": "Raw tailwind classes",
    "status": "open"
  }
]
</findings>`;
      const result = parseCodeReviewStateDetailed(feedback);
      expect(result.state).toBeDefined();
      expect(result.state?.findings.length).toBe(1);
      expect(result.state?.findings[0].id).toBe('raw-tailwind');
      expect(result.state?.findings[0].file).toBe('src/App.tsx');
      expect(result.parseError).toBeUndefined();
    });

    it('parses standard findings schema correctly', () => {
      const feedback = `<findings>
{
  "findings": [
    {
      "id": "finding-1",
      "file": "src/App.tsx",
      "line": 42,
      "snippet": "const x = 1;",
      "issue": "Test issue",
      "status": "open",
      "confidence": "high"
    }
  ]
}
</findings>`;
      const result = parseCodeReviewStateDetailed(feedback);
      expect(result.state).toBeDefined();
      expect(result.state?.findings.length).toBe(1);
      expect(result.state?.findings[0].id).toBe('finding-1');
      expect(result.parseError).toBeUndefined();
    });

    it('still flags incomplete findings when required fields are empty strings', () => {
      const feedback = `<findings>
{
  "findings": [
    {
      "id": "",
      "file": "",
      "issue": ""
    }
  ]
}
</findings>`;
      const result = parseCodeReviewStateDetailed(feedback);
      expect(result.parseError).toBe('incomplete_findings');
    });
  });

  describe('parseCodeReviewVerdict', () => {
    it('parses PASS, WARN, and FAIL verdicts', () => {
      expect(parseCodeReviewVerdict('Looks good! [VERDICT: PASS]')).toBe('pass');
      expect(parseCodeReviewVerdict('Minor issues. [VERDICT: WARN]')).toBe('warn');
      expect(parseCodeReviewVerdict('Broken build! [VERDICT: FAIL]')).toBe('fail');
    });
  });

  describe('cleanupFeedback', () => {
    it('strips findings and verdict tags from review output', () => {
      const feedback = `Review summary.
<findings>
{}
</findings>
[VERDICT: PASS]
Thank you!`;
      const cleaned = cleanupFeedback(feedback);
      expect(cleaned).not.toContain('<findings>');
      expect(cleaned).not.toContain('</findings>');
      expect(cleaned).not.toContain('[VERDICT: PASS]');
      expect(cleaned).toContain('Review summary.');
      expect(cleaned).toContain('Thank you!');
    });
  });
});
