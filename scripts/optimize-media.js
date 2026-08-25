import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const TARGET_DIRS = [
  path.join(rootDir, 'public/assets'),
  path.join(rootDir, 'public/images'),
  path.join(rootDir, 'src/assets'),
];

function getImagesInDirectory(dirPath, fileList = []) {
  if (!fs.existsSync(dirPath)) return fileList;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      getImagesInDirectory(fullPath, fileList);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function processImage(imagePath) {
  const parsed = path.parse(imagePath);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

  // Skip if webp already exists and is newer than original image
  if (fs.existsSync(webpPath)) {
    const origStat = fs.statSync(imagePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= origStat.mtimeMs) {
      return { status: 'skipped', path: webpPath };
    }
  }

  try {
    await sharp(imagePath)
      .webp({ quality: 80, effort: 4 })
      .toFile(webpPath);
    return { status: 'created', path: webpPath };
  } catch (err) {
    console.error(`Failed to optimize image: ${imagePath}`, err);
    return { status: 'failed', error: err };
  }
}

async function main() {
  console.log('Starting media asset optimization...');
  let totalProcessed = 0;
  let totalCreated = 0;
  let totalSkipped = 0;

  for (const dir of TARGET_DIRS) {
    const images = getImagesInDirectory(dir);
    for (const img of images) {
      totalProcessed++;
      const result = await processImage(img);
      if (result.status === 'created') totalCreated++;
      if (result.status === 'skipped') totalSkipped++;
    }
  }

  console.log(`Media optimization complete: ${totalProcessed} checked, ${totalCreated} WebP generated, ${totalSkipped} skipped.`);
}

main().catch((err) => {
  console.error('Error optimizing media assets:', err);
  process.exit(1);
});
