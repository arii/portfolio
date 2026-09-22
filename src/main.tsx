import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, useParams } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import PageFallback from '@/components/ui/PageFallback';
import { registerServiceWorker } from '@/registerServiceWorker';
import { lazyWithRetry } from '@/lib/lazyWithRetry';
import { GlobalErrorBoundary } from '@/components/GlobalErrorBoundary';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '@/index.css';

registerServiceWorker();

const DevAIDoubleRedirect: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  return <Navigate to={slug ? `/devai/${slug}` : '/devai'} replace />;
};

const ResearchDoubleRedirect: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  return <Navigate to={slug ? `/research/${slug}` : '/research'} replace />;
};

const lazyLoad = (importFn: () => Promise<{ default: React.ComponentType<any> }>) => {
  const Component = lazyWithRetry(importFn);
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageFallback />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
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
        path: 'devai/devai/:slug',
        element: <DevAIDoubleRedirect />,
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
        path: 'research/research/:slug',
        element: <ResearchDoubleRedirect />,
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
    <GlobalErrorBoundary>
      <App router={router} />
    </GlobalErrorBoundary>
  </React.StrictMode>
);
