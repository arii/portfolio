import React from 'react';
import { RouterProvider } from 'react-router-dom';
import type { createHashRouter } from 'react-router-dom';

export interface AppProps {
  router: ReturnType<typeof createHashRouter>;
}

const App: React.FC<AppProps> = ({ router }) => {
  return <RouterProvider router={router} />;
};

export default App;
