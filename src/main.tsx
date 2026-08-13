import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ResearchListPage from '@/pages/ResearchListPage';
import ResearchDetailPage from '@/pages/ResearchDetailPage';
import Resume from '@/pages/Resume';
import About from '@/pages/About';
import '@/index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'research',
        element: <ResearchListPage />,
      },
      {
        path: 'research/:slug',
        element: <ResearchDetailPage />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
