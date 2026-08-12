import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Research from '@/pages/Research';
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
        path: 'about',
        element: <About />,
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
