import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Research from '@/pages/Research';
import DevAI from '@/pages/DevAI';
import Resume from '@/pages/Resume';
import About from '@/pages/About';
import { registerServiceWorker } from '@/registerServiceWorker';
import '@/index.css';

registerServiceWorker();

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
        element: <About />,
      },
      {
        path: 'devai',
        element: <DevAI />,
      },
      {
        path: 'devai/:slug',
        element: <DevAI />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: 'research/:slug',
        element: <Research />,
      },
      {
        path: 'resume',
        element: <Resume />,
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
