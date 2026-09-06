import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import { registerServiceWorker } from '@/registerServiceWorker';
import { Stack } from '@/components/layout';
import '@/index.css';

registerServiceWorker();

const Research = lazy(() => import('@/pages/Research'));
const DevAI = lazy(() => import('@/pages/DevAI'));
const Resume = lazy(() => import('@/pages/Resume'));
const About = lazy(() => import('@/pages/About'));

const PageLoader = () => (
  <Stack align="center" justify="center" minH="50vh">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
  </Stack>
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
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'devai',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DevAI />
          </Suspense>
        ),
      },
      {
        path: 'devai/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DevAI />
          </Suspense>
        ),
      },
      {
        path: 'research',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Research />
          </Suspense>
        ),
      },
      {
        path: 'research/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Research />
          </Suspense>
        ),
      },
      {
        path: 'resume',
        element: (
          <Suspense fallback={<PageLoader />}>
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
