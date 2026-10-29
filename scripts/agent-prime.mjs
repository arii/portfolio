import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const packageJsonPath = path.join(rootDir, 'package.json');
const projectConfigPath = path.join(rootDir, 'project_config.json');
const outputPath = path.join(rootDir, '.agent-context.json');

let packageData = {};
if (fs.existsSync(packageJsonPath)) {
  try {
    packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  } catch (e) {
    console.warn('⚠️ Could not parse package.json:', e);
  }
}

let projectConfig = {};
if (fs.existsSync(projectConfigPath)) {
  try {
    projectConfig = JSON.parse(fs.readFileSync(projectConfigPath, 'utf-8'));
  } catch (e) {
    console.warn('⚠️ Could not parse project_config.json:', e);
  }
}

let gitCommit = 'unknown';
try {
  gitCommit = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim();
} catch (_e) {
  // Fallback if git is unavailable
}

const contextData = {
  packageName: projectConfig.packageName || packageData.name || 'portfolio',
  version: packageData.version || '0.1.0',
  updatedAt: new Date().toISOString(),
  gitCommit,
  config: projectConfig,
};

fs.writeFileSync(outputPath, JSON.stringify(contextData, null, 2) + '\n', 'utf-8');
console.log(`✅ Generated agent context at ${outputPath}`);
