import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const distPath = path.join(process.cwd(), 'dist');

function getBuildStats() {
  if (!fs.existsSync(distPath)) {
    return 'No build output found in `dist/`.';
  }

  const files = [];
  function traverse(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        traverse(fullPath);
      } else {
        files.push(fullPath);
      }
    });
  }
  traverse(distPath);

  let md = '### 📦 Build Asset Size Breakdown\n\n';
  md += '| File | Size (KB) |\n';
  md += '| --- | --- |\n';

  files.forEach(f => {
    const relative = path.relative(distPath, f);
    const size = (fs.statSync(f).size / 1024).toFixed(2);
    md += `| \`${relative}\` | ${size} KB |\n`;
  });

  return md;
}

function getChangedFiles() {
  try {
    const diff = execSync('git diff --name-only origin/main', { encoding: 'utf8' });
    return diff.split('\n').filter(Boolean);
  } catch {
    try {
      const diff = execSync('git diff --name-only HEAD~1', { encoding: 'utf8' });
      return diff.split('\n').filter(Boolean);
    } catch {
      return [];
    }
  }
}

function getImpactAnalysis() {
  const changedFiles = getChangedFiles();
  if (changedFiles.length === 0) {
    return '### 🔍 Code Impact Analysis\nNo code changes detected.';
  }

  const categories = {
    pages: [],
    components: [],
    configs: [],
    routing: [],
    tests: [],
    others: []
  };

  changedFiles.forEach(file => {
    if (file.startsWith('src/pages/')) {
      categories.pages.push(file);
    } else if (file.startsWith('src/components/')) {
      categories.components.push(file);
    } else if (file.startsWith('src/test/') || file.endsWith('.test.tsx') || file.endsWith('.test.ts')) {
      categories.tests.push(file);
    } else if (file.includes('main.tsx') || file.includes('App.tsx')) {
      categories.routing.push(file);
    } else if (file.endsWith('.json') || file.endsWith('.config.js') || file.endsWith('.config.ts')) {
      categories.configs.push(file);
    } else {
      categories.others.push(file);
    }
  });

  let md = '### 🔍 Code Impact Analysis\n\n';
  md += `Total changed files: **${changedFiles.length}**\n\n`;

  if (categories.routing.length > 0) {
    md += '#### 🗺️ Routing / Application Shell Impact\n';
    categories.routing.forEach(f => {
      md += `- \`${f}\` (High impact - affects app shell/routing)\n`;
    });
    md += '\n';
  }

  if (categories.pages.length > 0) {
    md += '#### 📄 Pages Impacted\n';
    categories.pages.forEach(f => {
      md += `- \`${f}\`\n`;
    });
    md += '\n';
  }

  if (categories.components.length > 0) {
    md += '#### 🧩 Components Impacted\n';
    categories.components.forEach(f => {
      md += `- \`${f}\`\n`;
    });
    md += '\n';
  }

  if (categories.configs.length > 0) {
    md += '#### ⚙️ Configs / Build Files Impacted\n';
    categories.configs.forEach(f => {
      md += `- \`${f}\` (May affect builds or linting)\n`;
    });
    md += '\n';
  }

  if (categories.tests.length > 0) {
    md += '#### 🧪 Tests Changed\n';
    categories.tests.forEach(f => {
      md += `- \`${f}\`\n`;
    });
    md += '\n';
  }

  return md;
}

const buildReport = getBuildStats();
const impactReport = getImpactAnalysis();

const fullReport = `## 📊 PR Impact Analysis & Build Report

${impactReport}

${buildReport}
`;

console.log(fullReport);

if (process.env.GITHUB_STEP_SUMMARY) {
  fs.writeFileSync(process.env.GITHUB_STEP_SUMMARY, fullReport);
} else {
  fs.writeFileSync('impact-report.md', fullReport);
}
