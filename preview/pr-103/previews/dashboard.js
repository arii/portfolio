/**
 * PREVIEW DASHBOARD LOGIC
 * Standalone utility for Tech Dancer infrastructure.
 */

const REPO_OWNER = 'arii';
const REPO_NAME = 'portfolio';

const IS_GITHUB_PROJECT_SITE =
  window.location.hostname === `${REPO_OWNER}.github.io`;

const BASE_URL = IS_GITHUB_PROJECT_SITE
  ? `https://${REPO_OWNER}.github.io/${REPO_NAME}`
  : window.location.origin;

const GITHUB_REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
const TRACKING_URL = `${BASE_URL}/REVIEW_TRACKING.md`;
const EXCLUDED = ['assets', 'previews', 'css', 'js', 'img', 'images', 'public'];
const TOP_LEVEL_ROUTES = ['about', 'blog', 'gear', 'events', 'research', 'ux-auditor', 'preview'];

/**
 * @typedef {Object} Deployment
 * @property {string} name - Folder name in gh-pages
 * @property {Object|null} pr - GitHub PR object if it exists
 * @property {'pr'|'active'} type - Type of deployment
 * @property {boolean} isAuto - Whether it's an automated PR (e.g. dependabot)
 * @property {boolean} isDraft - Whether the PR is in draft state
 * @property {boolean} isStale - Whether the PR/branch is stale (14d+ inactive)
 * @property {number} updated_at - Timestamp of last update
 */

const ICONS = {
    pr: `<svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/></svg>`,
    branch: `<svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
    external: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
    success: `<svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    failure: `<svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    pending: `<svg class="w-4 h-4 text-amber-500 animate-spin" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>`,
    warning: `<svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    clock: `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
};

// --- State Management ---
let state = {
    /** @type {Deployment[]} */
    deployments: [],
    /** @type {Object[]} */
    mergedPRs: [],
    prStatuses: {},
    deploymentExistence: {},
    rateLimitRemaining: null,
    filters: {
        query: '',
        status: 'all',
        showAutomated: false
    }
};

/**
 * Strips known sub-page routes to isolate the base branch name.
 */
function getBaseBranchName(path) {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return '';

    for (let i = 0; i < segments.length; i++) {
        if (TOP_LEVEL_ROUTES.includes(segments[i].toLowerCase())) {
            return segments.slice(0, i).join('/');
        }
    }
    return path;
}

/**
 * Checks if a deployment URL is still active.
 */
async function checkDeploymentExists(name) {
    if (state.deploymentExistence[name] !== undefined) return state.deploymentExistence[name];
    try {
        const url = `${BASE_URL}/${name}/`;
        const res = await fetch(url, { method: 'HEAD' });
        state.deploymentExistence[name] = res.ok;
        return res.ok;
    } catch {
        state.deploymentExistence[name] = false;
        return false;
    }
}

function timeAgo(seconds) {
    const diff = Math.floor(Date.now() / 1000) - seconds;
    if (diff < 60) return 'just now';
    if (diff < 3600) {
        const m = Math.floor(diff / 60);
        return `${m} minute${m > 1 ? 's' : ''} ago`;
    }
    if (diff < 86400) {
        const h = Math.floor(diff / 3600);
        return `${h} hour${h > 1 ? 's' : ''} ago`;
    }
    const d = Math.floor(diff / 86400);
    return `${d} day${d > 1 ? 's' : ''} ago`;
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = el('div', { id: 'toast-container', className: 'fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none' });
        document.body.appendChild(container);
    }
    const colorClass = type === 'error' ? 'bg-red-600' : 'bg-slate-800';
    const toast = el('div', {
        className: `${colorClass} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in pointer-events-auto transition-opacity duration-300`
    }, [
        el('span', { innerHTML: ICONS.warning }),
        el('span', { className: 'text-sm font-medium' }, [message])
    ]);
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

/**
 * Robust GitHub API wrapper with rate limit handling, error normalization, and exponential backoff retries.
 */
async function fetchGitHub(endpoint, retryCount = 0) {
    if (state.rateLimitRemaining === 0) throw new Error('RATE_LIMITED');

    const url = endpoint.startsWith('http') ? endpoint : `https://api.github.com/${endpoint.replace(/^\//, '')}`;

    try {
        const res = await fetch(url);
        const remaining = res.headers.get('x-ratelimit-remaining');
        if (remaining !== null) state.rateLimitRemaining = parseInt(remaining, 10);

        if (res.status === 403 && remaining === '0') throw new Error('RATE_LIMITED');

        if (!res.ok) {
            // Retry on transient errors (5xx) or specific transient 4xx
            if (retryCount < 3 && (res.status >= 500 || res.status === 408)) {
                const backoff = Math.pow(2, retryCount) * 1000;
                await new Promise(r => setTimeout(r, backoff));
                return fetchGitHub(endpoint, retryCount + 1);
            }
            throw new Error(`API_ERROR_${res.status}`);
        }

        return res.json();
    } catch (e) {
        if (e.message !== 'RATE_LIMITED' && !e.message.startsWith('API_ERROR_') && retryCount < 3) {
            const backoff = Math.pow(2, retryCount) * 1000;
            await new Promise(r => setTimeout(r, backoff));
            return fetchGitHub(endpoint, retryCount + 1);
        }
        throw e;
    }
}

async function fetchCIStatus(sha, useCache = true) {
    const cacheKey = `ci_status_${sha}`;
    if (useCache) {
        try {
            const cached = JSON.parse(sessionStorage.getItem(cacheKey));
            if (cached && Date.now() - cached.timestamp < 60000) return cached.data;
        } catch { /* ignore cache errors */ }
    }

    try {
        const data = await fetchGitHub(`repos/${REPO_OWNER}/${REPO_NAME}/commits/${sha}/check-runs`);
        if (!data.check_runs || data.check_runs.length === 0) return null;

        const result = {
            isPending: data.check_runs.some(cr => cr.status !== 'completed'),
            isFailure: data.check_runs.some(cr => cr.conclusion === 'failure' || cr.conclusion === 'timed_out' || cr.conclusion === 'cancelled')
        };

        sessionStorage.setItem(cacheKey, JSON.stringify({ data: result, timestamp: Date.now() }));
        return result;
    } catch (e) {
        if (e.message !== 'RATE_LIMITED') showToast(`Failed to fetch CI status for ${sha.slice(0,7)}`, 'error');
        return 'ERROR';
    }
}

function resetFilters() {
    state.filters = { query: '', status: 'all', showAutomated: false };
    document.getElementById('search').value = '';
    document.getElementById('status-filter').value = 'all';
    document.getElementById('show-automated').checked = false;
    renderGrid();
}

function updateFilters() {
    state.filters.query = document.getElementById('search').value.toLowerCase();
    state.filters.status = document.getElementById('status-filter').value;
    state.filters.showAutomated = document.getElementById('show-automated').checked;
    renderGrid();
}

// --- DOM Construction Helpers ---

function el(tag, props = {}, children = []) {
    const element = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
        if (key === 'className') element.className = value;
        else if (key === 'innerHTML') element.innerHTML = value;
        else if (key === 'style' && typeof value === 'object') Object.assign(element.style, value);
        else element[key] = value;
    });
    children.forEach(child => {
        if (!child) return;
        if (typeof child === 'string') element.appendChild(document.createTextNode(child));
        else element.appendChild(child);
    });
    return element;
}

function createBadge(text, color) {
    const colorClasses = {
        blue: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
        emerald: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800'
    }[color] || 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

    return el('span', { className: `${colorClasses} text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border` }, [text]);
}

function createStatusBadge(status) {
    if (!status) return null;
    if (status === 'ERROR') {
        return el('span', { className: 'flex items-center gap-1 text-slate-600 dark:text-slate-400 text-[10px] sm:text-xs font-semibold bg-slate-50 dark:bg-slate-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-slate-200 dark:border-slate-800' }, [
            el('span', { innerHTML: ICONS.warning }),
            'Status Error'
        ]);
    }
    const { isFailure, isPending } = status;
    const config = isFailure
        ? { cls: 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800', icon: ICONS.failure, text: 'Checks Failed' }
        : isPending
        ? { cls: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800', icon: ICONS.pending, text: 'Checks Pending' }
        : { cls: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800', icon: ICONS.success, text: 'Checks Passed' };

    return el('span', { className: `flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border ${config.cls}` }, [
        el('span', { innerHTML: config.icon }),
        config.text
    ]);
}

function renderCard(deployment, isIdxEven) {
    const { name, pr, isDraft, type } = deployment;
    const deploymentUrl = `${BASE_URL}/${name}/`;
    const zebraClass = isIdxEven ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50';
    const prStatus = state.prStatuses[name] || null;

    const card = el('div', {
        className: `preview-card ${zebraClass} rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5 hover:border-blue-400 dark:hover:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500 transition-shadow`
    });

    const badgeContainer = el('div', { className: 'flex items-center gap-1.5 sm:gap-2 flex-wrap' });
    if (type === 'merged') {
        badgeContainer.appendChild(createBadge('Merged PR', 'purple'));
    } else if (pr) {
        badgeContainer.appendChild(createBadge(isDraft ? 'Draft PR' : 'Open PR', 'blue'));
        const statusBadge = createStatusBadge(prStatus);
        if (statusBadge) badgeContainer.appendChild(statusBadge);
        (pr.labels || []).forEach(l => {
            badgeContainer.appendChild(el('span', {
                className: 'px-2 py-0.5 rounded-full text-[10px] font-bold border',
                style: `background-color: #${l.color}22; color: #${l.color}; border-color: #${l.color}44`
            }, [l.name.toUpperCase()]));
        });
    } else {
        badgeContainer.appendChild(createBadge('Active Branch', 'emerald'));
    }

    const titleEl = (pr || type === 'merged')
        ? el('a', { href: (pr || deployment).html_url, target: '_blank', rel: 'noopener', className: 'text-blue-600 dark:text-blue-400 hover:underline font-semibold text-base sm:text-xl flex items-center gap-2 truncate outline-none focus:underline' }, [
            el('span', { innerHTML: ICONS.pr }),
            `PR #${(pr || deployment).number}: ${(pr || deployment).title}`
          ])
        : el('div', { className: 'text-slate-800 dark:text-slate-200 font-semibold text-base sm:text-xl flex items-center gap-2 text-balance' }, [
            el('span', { innerHTML: ICONS.branch }),
            name
          ]);

    const compareUrl = `${GITHUB_REPO_URL}/compare/main...${encodeURIComponent(name)}`;
    const infoRow = el('div', { className: 'flex items-center gap-2.5 sm:gap-3 flex-wrap' }, [
        el('span', { className: 'text-[10px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-slate-200 dark:border-slate-700 truncate max-w-[150px] sm:max-w-[200px]' }, [name]),
        type !== 'merged' && el('a', { href: `${GITHUB_REPO_URL}/tree/${encodeURIComponent(name)}`, target: '_blank', rel: 'noopener', className: 'text-[10px] sm:text-xs text-slate-500 hover:text-blue-500 flex items-center gap-1 transition-colors outline-none focus:text-blue-500' }, [
            el('span', { innerHTML: ICONS.external }),
            'Source'
        ]),
        type !== 'merged' && el('a', { href: compareUrl, target: '_blank', rel: 'noopener', className: 'text-[10px] sm:text-xs text-slate-500 hover:text-blue-500 flex items-center gap-1 transition-colors outline-none focus:text-blue-500' }, [
            el('span', { innerHTML: ICONS.external }),
            'Compare'
        ]),
        (pr || type === 'merged') && el('span', { className: 'text-[10px] sm:text-xs text-slate-400 flex items-center gap-1' }, [
            el('span', { innerHTML: ICONS.clock }),
            type === 'merged' ? `Merged ${timeAgo(Math.floor(new Date(deployment.merged_at).getTime() / 1000))}` : timeAgo(Math.floor(new Date(pr.updated_at).getTime() / 1000))
        ]),
        deployment.commitTimestamp && el('span', { className: 'text-[10px] sm:text-xs text-slate-400 flex items-center gap-1', title: 'Source code change' }, [
            el('span', { innerHTML: ICONS.clock }),
            `Built from commit: ${timeAgo(deployment.commitTimestamp)}`
        ]),
        deployment.deployTimestamp && el('span', { className: 'text-[10px] sm:text-xs text-slate-400 flex items-center gap-1', title: 'GitHub Pages publish' }, [
            el('span', { innerHTML: ICONS.clock }),
            `Published: ${timeAgo(deployment.deployTimestamp)}`
        ]),
        el('div', { className: 'sm:hidden w-full mt-1' }, [badgeContainer.cloneNode(true)])
    ]);

    const actionButton = el('div', { className: 'flex flex-col sm:flex-row gap-2 w-full sm:w-auto' });

    if (type === 'merged') {
        const prLink = el('a', {
            href: deployment.html_url,
            target: '_blank',
            rel: 'noopener',
            className: 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors'
        }, [
            'View PR ',
            el('span', { innerHTML: ICONS.external })
        ]);
        actionButton.appendChild(prLink);
    }

    if (type !== 'merged' || state.deploymentExistence[name]) {
        const deployLink = el('a', {
            href: deploymentUrl,
            target: '_blank',
            rel: 'noopener',
            className: 'bg-slate-900 dark:bg-blue-600 text-white font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        }, [
            'View Deployment ',
            el('span', { innerHTML: ICONS.external })
        ]);
        actionButton.appendChild(deployLink);
    }

    card.append(
        el('div', { className: 'flex-1 min-w-0 w-full' }, [
            el('div', { className: 'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3' }, [
                titleEl,
                el('div', { className: 'hidden sm:block' }, [badgeContainer])
            ]),
            infoRow
        ]),
        actionButton
    );

    return card;
}

let renderTimer = null;
function debouncedRender() {
    if (renderTimer) clearTimeout(renderTimer);
    renderTimer = setTimeout(renderGrid, 50);
}

function renderGrid() {
    const grid = document.getElementById('grid');
    const emptyState = document.getElementById('empty-state');
    const { query, status, showAutomated } = state.filters;

    const filtered = state.deployments.filter(d => {
        const matchesSearch = [d.name, d.pr?.title, d.pr?.user?.login].some(v => v?.toLowerCase().includes(query));
        let matchesStatus = status === 'all' || status === d.type;
        if (status === 'draft') matchesStatus = d.isDraft;
        if (status === 'stale') matchesStatus = d.isStale;
        const matchesAuto = showAutomated || !d.isAuto;
        return matchesSearch && matchesStatus && matchesAuto;
    });

    grid.innerHTML = '';
    const prs = filtered.filter(d => d.type === 'pr');
    const branches = filtered.filter(d => d.type === 'active');

    const renderGroup = (title, list, isPr) => {
        if (!list.length) return;
        const fragment = document.createDocumentFragment();
        fragment.appendChild(el('h2', { className: 'text-xl font-bold mt-8 mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200' }, [
            el('span', { innerHTML: isPr ? ICONS.pr : ICONS.branch }),
            title
        ]));
        const stack = el('div', { className: 'flex flex-col gap-4 mb-10' });
        list.forEach((d, idx) => stack.appendChild(renderCard(d, idx % 2 === 0)));
        fragment.appendChild(stack);
        grid.appendChild(fragment);
    };

    renderGroup('Pull Request Previews', prs, true);
    renderGroup('Other Deployed Branches', branches, false);

    const merged = state.mergedPRs.filter(d => {
        const matchesSearch = [d.name, d.title, d.user?.login].some(v => v?.toLowerCase().includes(query));
        return matchesSearch && (status === 'all' || status === 'merged');
    });
    renderGroup('Recently Merged PRs', merged, true);

    emptyState.classList.toggle('hidden', (filtered.length + (status === 'all' || status === 'merged' ? merged.length : 0)) > 0);
}

async function init() {
    const grid = document.getElementById('grid'), loading = document.getElementById('loading'), errorAlert = document.getElementById('error-alert');
    const trackingLink = document.getElementById('tracking-link');
    if (trackingLink) trackingLink.href = TRACKING_URL;

    // Attach event listeners
    const controls = { 'search': 'input', 'status-filter': 'change', 'show-automated': 'change', 'reset-filters': 'click' };
    Object.entries(controls).forEach(([id, ev]) => {
        const element = document.getElementById(id);
        if (element) element.addEventListener(ev, id === 'reset-filters' ? resetFilters : updateFilters);
    });

    try {
        const [treeData, prs, closedPrs, releases] = await Promise.all([
            fetchGitHub(`repos/${REPO_OWNER}/${REPO_NAME}/git/trees/gh-pages?recursive=1`),
            fetchGitHub(`repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`).catch(() => []),
            fetchGitHub(`repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=closed&per_page=20`).catch(() => []),
            fetchGitHub(`repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=1`).catch(() => [])
        ]);

        state.mergedPRs = closedPrs.filter(pr => pr.merged_at).slice(0, 10).map(pr => ({
            ...pr,
            name: pr.head.ref,
            type: 'merged'
        }));

        if (state.rateLimitRemaining < 10) {
            const warning = el('div', { className: 'mb-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-400 px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium' }, [
                el('span', { innerHTML: ICONS.warning }),
                `GitHub API rate limit is low (${state.rateLimitRemaining} left). CI statuses may not load correctly.`
            ]);
            grid.before(warning);
        }

        const dataRes = await fetch('./data.json').catch(() => ({ text: () => ('{}'), url: 'fallback' }));
        const text = await dataRes.text();
        let metadata = {};
        try {
            metadata = JSON.parse(text);
        } catch (err) {
            console.error('data.json parse failed');
            console.error('URL:', dataRes.url);
            console.error('Response starts with:', text.slice(0, 500));
        }

        const allFoldersRaw = Array.from(new Set(treeData.tree
            .filter(i => i.path.endsWith('/index.html') && !EXCLUDED.some(e => i.path.startsWith(e)) && i.path !== 'index.html' && i.path !== '404.html')
            .map(i => getBaseBranchName(i.path.replace('/index.html', '')))
            .filter(name => name !== '')
        ));

        state.deployments = allFoldersRaw.map(name => {
            const pr = prs.find(p => p.head.ref === name);
            const meta = metadata[name] || {};
            return {
                name,
                pr,
                type: pr ? 'pr' : 'active',
                isAuto: pr && (pr.user.login.includes('bot') || pr.user.login === 'dependabot'),
                isDraft: pr?.draft || false,
                isStale: pr && (Date.now() - new Date(pr.updated_at).getTime()) > 14 * 24 * 60 * 60 * 1000,
                updated_at: meta.deployTimestamp || (pr ? new Date(pr.updated_at).getTime() / 1000 : 0),
                commitTimestamp: meta.commitTimestamp,
                deployTimestamp: meta.deployTimestamp,
                sha: meta.sha
            };
        }).sort((a, b) => b.updated_at - a.updated_at);

        loading.style.display = 'none';

        const statsMap = {
            'stat-prs': prs.length,
            'stat-active': state.deployments.filter(d => d.type === 'active').length,
            'stat-stale': state.deployments.filter(d => d.isStale).length,
            'stat-releases': releases[0]?.tag_name || '0',
            'stat-total': allFoldersRaw.length,
            'last-updated': new Date().toLocaleString()
        };
        Object.entries(statsMap).forEach(([id, val]) => { const element = document.getElementById(id); if (element) element.textContent = val; });

        if (state.rateLimitRemaining > 5) {
            prs.forEach(async (pr) => {
                state.prStatuses[pr.head.ref] = await fetchCIStatus(pr.head.sha);
                debouncedRender();
            });
            state.mergedPRs.forEach(async (pr) => {
                await checkDeploymentExists(pr.head.ref);
                debouncedRender();
            });
        }

        renderGrid();

    } catch (err) {
        loading.style.display = 'none';
        document.getElementById('error-msg').textContent = err.message === 'RATE_LIMITED' ? 'GitHub API Rate Limited. Please try again later.' : err.message;
        errorAlert.classList.toggle('hidden', false);
        showToast(err.message === 'RATE_LIMITED' ? 'API rate limit exceeded' : `API Error: ${err.message}`, 'error');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
