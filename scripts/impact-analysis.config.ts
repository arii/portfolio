export const IMPACT_CONFIG = {
  PAGES_DIR: 'src/pages',

  // Severity paths
  HIGH_IMPACT_PATHS: [
    'src/layouts/',
    'src/styles/',
    'src/components/ui/',
    'src/index.css'
  ],
  MEDIUM_IMPACT_PATHS: [
    'src/features/'
  ],

  LOW_IMPACT_PATHS: [
    'pnpm-lock.yaml',
    'dist/',
    '.tmp-main/',
    'tests/visual.spec.ts-snapshots/'
  ],

  // Global triggers and fallback URLs
  GLOBAL_TRIGGERS: [
    'src/App.tsx',
    'src/config/routes.ts',
    'src/layouts/MainLayout.tsx',
    'src/index.css'
  ],
  DEFAULT_STATIC_PAGES: [
    '/',
    '/devai',
    '/research',
    '/resume',
    '/about'
  ],

  // Route Mapping Overrides (PascalCase component name to URL slug)
  PAGE_ROUTE_OVERRIDES: {
    'Home': '/',
    'DevAIListPage': '/devai',
    'ResearchDetailPage': '/devai/:slug'
  } as Record<string, string>,

  // Content folder to URL prefix mapping
  CONTENT_MAP: {
    'src/content/research/': '/devai/'
  } as Record<string, string>,

  // Performance and resource limits
  MAX_BUFFER: 10 * 1024 * 1024 // 10MB buffer for large dependency graphs
};
