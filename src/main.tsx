import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import PageFallback from '@/components/ui/PageFallback';
import { registerServiceWorker } from '@/registerServiceWorker';
import '@/index.css';

registerServiceWorker();

const lazyLoad = (importFn: () => Promise<{ default: React.ComponentType<any> }>) => {
  const Component = lazy(importFn);
  return (
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  );
};

const getBasename = (): string => {
  return import.meta.env.BASE_URL || '/';
};

const cleanBasename = (base: string): string => {
  if (!base || base === '/') return '/';
  const trimmed = base.replace(/\/$/, '');
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

// Restore GitHub Pages SPA redirect if present in sessionStorage
const redirect = sessionStorage.getItem('ghpages_redirect');
if (redirect) {
  sessionStorage.removeItem('ghpages_redirect');
  const restoreBase = cleanBasename(getBasename());
  const targetUrl = restoreBase === '/' ? redirect : `${restoreBase}${redirect}`;
  window.history.replaceState(null, '', targetUrl);
}

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'portfolio',
        element: <Navigate to="/devai" replace />,
      },
      {
        path: 'about',
        element: lazyLoad(() => import('@/pages/About')),
      },
      {
        path: 'devai',
        element: lazyLoad(() => import('@/pages/DevAI')),
      },
      {
        path: 'devai/:slug',
        element: lazyLoad(() => import('@/pages/DevAI')),
      },
      {
        path: 'research',
        element: lazyLoad(() => import('@/pages/Research')),
      },
      {
        path: 'research/:slug',
        element: lazyLoad(() => import('@/pages/Research')),
      },
      {
        path: 'resume',
        element: lazyLoad(() => import('@/pages/Resume')),
      },
    ],
  },
];

const basename = cleanBasename(getBasename());
const router = createBrowserRouter(routes, {
  basename: basename === '/' ? undefined : basename,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
