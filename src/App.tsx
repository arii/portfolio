import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import type { createHashRouter } from 'react-router-dom';

export interface AppProps {
  router: ReturnType<typeof createHashRouter>;
}

const App: React.FC<AppProps> = ({ router }) => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
