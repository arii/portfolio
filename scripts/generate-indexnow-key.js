import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getIndexNowKey() {
  const key = process.env.INDEXNOW_KEY || process.env.VITE_INDEXNOW_KEY;
  if (!key || !key.trim()) {
    return null;
  }
  return key.trim();
}

export function generateIndexNowKeyFiles() {
  const key = getIndexNowKey();
  if (!key) {
    return null;
  }

  const rootDir = path.resolve(__dirname, '..');
  const publicDir = path.join(rootDir, 'public');
  const distDir = path.join(rootDir, 'dist');

  const fileContent = `${key}\n`;

  // Write to public/
  if (fs.existsSync(publicDir)) {
    const publicFilePath = path.join(publicDir, `${key}.txt`);
    fs.writeFileSync(publicFilePath, fileContent, 'utf-8');
    console.log(`🔑 Generated IndexNow verification file: ${publicFilePath}`);
  }

  // Write to dist/ if dist directory exists
  if (fs.existsSync(distDir)) {
    const distFilePath = path.join(distDir, `${key}.txt`);
    fs.writeFileSync(distFilePath, fileContent, 'utf-8');
    console.log(`🔑 Generated IndexNow verification file in build output: ${distFilePath}`);
  }

  return key;
}

// Run directly if executed via node/tsx
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateIndexNowKeyFiles();
}
