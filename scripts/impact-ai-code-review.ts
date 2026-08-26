import { orchestrateCodeReview } from './codeReviewOrchestrator';
import { geminiCodeReviewClient } from './clients/geminiCodeReviewClient';
import { writeMissingApiKeyVerdict } from './utils/verdict';

const ALL_REVIEW_TITLES = [
  geminiCodeReviewClient.reportTitle,
];

async function main(): Promise<void> {
  const provider = process.argv[2];

  if (provider === 'gemini') {
    // security-safe: Environment variables are trusted in this workflow context.
    if (!process.env.GEMINI_API_KEY) {
      console.warn('⚠️  Skipping agent code review — GEMINI_API_KEY not set.');
      try {
        await writeMissingApiKeyVerdict(
          geminiCodeReviewClient.reportFileName,
          geminiCodeReviewClient.reportTitle,
          'GEMINI_API_KEY'
        );
      } catch (err) {
        console.error('Failed to write missing API key verdict', err);
      }
      return;
    }
    await orchestrateCodeReview(geminiCodeReviewClient, ALL_REVIEW_TITLES);
  } else {
    console.error('❌ Unknown provider or deprecated provider specified.');
    process.exit(1);
  }
}

main().catch(error => {
  console.error(`❌ Agent code review failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
