import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import path from 'node:path';
import fs from 'node:fs';
import sharp from 'sharp';
import { getImagesInDirectory, processImage } from '../../scripts/optimize-media.js';

describe('Media Transcoding Pipeline', () => {
  const tmpDir = path.resolve(process.cwd(), '.tmp-test-media');

  beforeEach(() => {
    if (fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
    fs.mkdirSync(tmpDir, { recursive: true });
  });

  afterEach(() => {
    if (fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('correctly maps target extensions from .gif to .webp', () => {
    const originalFile = 'public/assets/research/masters-thesis/pr2_grasp_2.gif';
    const transformedFile = originalFile.replace(/\.gif$/i, '.webp');
    expect(transformedFile).toBe('public/assets/research/masters-thesis/pr2_grasp_2.webp');
  });

  it('preserves directory structure when optimizing files', () => {
    const inputPath = '/workspace/portfolio/public/assets/research/masters-thesis/pr2_grasp_1.gif';
    const parsed = path.parse(inputPath);
    const outputPath = path.format({ ...parsed, base: undefined, ext: '.webp' });
    expect(outputPath).toBe('/workspace/portfolio/public/assets/research/masters-thesis/pr2_grasp_1.webp');
  });

  it('collects png, jpg, and gif files recursively from directory', () => {
    fs.writeFileSync(path.join(tmpDir, 'test1.png'), 'dummy');
    fs.writeFileSync(path.join(tmpDir, 'test2.jpg'), 'dummy');
    fs.writeFileSync(path.join(tmpDir, 'test3.gif'), 'dummy');
    fs.writeFileSync(path.join(tmpDir, 'test4.txt'), 'dummy');

    const subDir = path.join(tmpDir, 'sub');
    fs.mkdirSync(subDir);
    fs.writeFileSync(path.join(subDir, 'test5.GIF'), 'dummy');

    const images = getImagesInDirectory(tmpDir);
    const basenames = images.map((p: string) => path.basename(p).toLowerCase()).sort();
    expect(basenames).toEqual(['test1.png', 'test2.jpg', 'test3.gif', 'test5.gif']);
  });

  it('transcodes an image fixture to WebP using sharp and skips already-updated WebP', async () => {
    const testGifPath = path.join(tmpDir, 'sample_anim.gif');
    // Create a 10x10 dummy gif using sharp
    await sharp({
      create: {
        width: 10,
        height: 10,
        channels: 4,
        background: { r: 255, g: 0, b: 0, alpha: 1 },
      },
    })
      .gif()
      .toFile(testGifPath);

    expect(fs.existsSync(testGifPath)).toBe(true);

    const result = await processImage(testGifPath);
    expect(result.status).toBe('created');
    const expectedWebp = path.join(tmpDir, 'sample_anim.webp');
    expect(fs.existsSync(expectedWebp)).toBe(true);

    // Second run should be skipped because webp exists and is newer
    const secondResult = await processImage(testGifPath);
    expect(secondResult.status).toBe('skipped');
  });
});
