import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import '@/index.css';

import Home from '@/pages/Home';

const Research = lazy(() => import('@/pages/Research'));
const DevAI = lazy(() => import('@/pages/DevAI'));
const Resume = lazy(() => import('@/pages/Resume'));
const About = lazy(() => import('@/pages/About'));

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

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
        element: (
          <Suspense fallback={<PageFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'devai',
        element: (
          <Suspense fallback={<PageFallback />}>
            <DevAI />
          </Suspense>
        ),
      },
      {
        path: 'devai/:slug',
        element: (
          <Suspense fallback={<PageFallback />}>
            <DevAI />
          </Suspense>
        ),
      },
      {
        path: 'research',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Research />
          </Suspense>
        ),
      },
      {
        path: 'research/:slug',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Research />
          </Suspense>
        ),
      },
      {
        path: 'resume',
        element: (
          <Suspense fallback={<PageFallback />}>
            <Resume />
          </Suspense>
        ),
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
