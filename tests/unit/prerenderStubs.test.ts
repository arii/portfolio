import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { generateSpaStubs } from '../../scripts/generate-spa-stubs.js';

describe('Pre-rendered SPA Stubs & Semantic Body Markup', () => {
  it('generates pre-rendered semantic HTML in dist/ for all route stubs', () => {
    // Ensure dist/index.html exists for generateSpaStubs to run
    const distDir = path.resolve(__dirname, '../../dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    const indexHtmlPath = path.join(distDir, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      const templatePath = path.resolve(__dirname, '../../index.html');
      const templateContent = fs.readFileSync(templatePath, 'utf-8');
      fs.writeFileSync(indexHtmlPath, templateContent, 'utf-8');
    }

    generateSpaStubs();

    // 1. Verify /resume stub
    const resumePath = path.join(distDir, 'resume/index.html');
    expect(fs.existsSync(resumePath)).toBe(true);
    const resumeHtml = fs.readFileSync(resumePath, 'utf-8');

    expect(resumeHtml).toContain('<div id="root">');
    expect(resumeHtml).toContain('<h1>Ariel Anders, PhD</h1>');
    expect(resumeHtml).toContain('Roboticist &amp; Senior Software Engineer');
    expect(resumeHtml).toContain('Employment History');
    expect(resumeHtml).toContain('Civ Robotics');
    expect(resumeHtml).toContain('Waymo');
    expect(resumeHtml).toContain('Robust.AI');
    expect(resumeHtml).toContain('Learning and Intelligent Systems, CSAIL MIT');
    expect(resumeHtml).toContain('Intel Corporation');
    expect(resumeHtml).toContain('Bionics Lab, UC Santa Cruz');

    // MIT doctoral thesis & education details
    expect(resumeHtml).toContain('PhD &amp; SM in Computer Science and Electrical Engineering');
    expect(resumeHtml).toContain('Massachusetts Institute of Technology (CSAIL)');
    expect(resumeHtml).toContain('conformant planning');

    // Publications, Skills, Projects, Honors, Teaching
    expect(resumeHtml).toContain('Reliably Arranging Objects in Uncertain Domains');
    expect(resumeHtml).toContain('ICRA');
    expect(resumeHtml).toContain('Motion planning');
    expect(resumeHtml).toContain('C++');
    expect(resumeHtml).toContain('Python');
    expect(resumeHtml).toContain('ROS 1 &amp; 2');
    expect(resumeHtml).toContain('Boop Light Detector');
    expect(resumeHtml).toContain('Robohub’s 30 Women in Robotics');
    expect(resumeHtml).toContain('Instructor, Dynamics (ENGR 2340)');

    // 2. Verify DevAI article deep-dive stub
    const devAiArticlePath = path.join(distDir, 'devai/gitops-pr-reviewer/index.html');
    expect(fs.existsSync(devAiArticlePath)).toBe(true);
    const devAiArticleHtml = fs.readFileSync(devAiArticlePath, 'utf-8');

    expect(devAiArticleHtml).toContain('<article>');
    expect(devAiArticleHtml).toContain('Automating PR Reviews with GitHub Actions, Gemini, and Boomtick DevAI');
    expect(devAiArticleHtml).toContain('Boomtick DevAI Ecosystem');
    expect(devAiArticleHtml).toContain('boomtick-mcp');
    expect(devAiArticleHtml).toContain('td-cli');
    expect(devAiArticleHtml).toContain('<pre><code class="language-mermaid">');
    expect(devAiArticleHtml).toContain('<figure><img');
    expect(devAiArticleHtml).toContain('<figcaption>');

    // 3. Verify Research article deep-dive stub
    const researchArticlePath = path.join(distDir, 'research/conformant-planning-manipulation/index.html');
    expect(fs.existsSync(researchArticlePath)).toBe(true);
    const researchArticleHtml = fs.readFileSync(researchArticlePath, 'utf-8');

    expect(researchArticleHtml).toContain('<article>');
    expect(researchArticleHtml).toContain('Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation');
    expect(researchArticleHtml).toContain('Massachusetts Institute of Technology');

    // 4. Verify overview stubs
    const aboutPath = path.join(distDir, 'about/index.html');
    expect(fs.existsSync(aboutPath)).toBe(true);
    const aboutHtml = fs.readFileSync(aboutPath, 'utf-8');
    expect(aboutHtml).toContain('Executive Biography');
    expect(aboutHtml).toContain('Key Details &amp; Availability');
    expect(aboutHtml).toContain('Career Timeline Highlights');
    expect(aboutHtml).toContain('Frequently Asked Questions');

    const devAiPath = path.join(distDir, 'devai/index.html');
    expect(fs.existsSync(devAiPath)).toBe(true);
    const devAiHtml = fs.readFileSync(devAiPath, 'utf-8');
    expect(devAiHtml).toContain('DevAI &amp; Software Systems');
    expect(devAiHtml).toContain('href="/devai/gitops-pr-reviewer"');

    const researchPath = path.join(distDir, 'research/index.html');
    expect(fs.existsSync(researchPath)).toBe(true);
    const researchHtml = fs.readFileSync(researchPath, 'utf-8');
    expect(researchHtml).toContain('Robotics &amp; Algorithmic Research');
    expect(researchHtml).toContain('href="/research/conformant-planning-manipulation"');
  });
});
