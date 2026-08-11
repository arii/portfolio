import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createHashRouter } from 'react-router-dom';
import App from '@/App';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';

describe('arii/portfolio Smoke Test', () => {
  test('renders application successfully without errors', () => {
    const testRouter = createHashRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ]);

    render(<App router={testRouter} />);

    // Assert that core branding is rendered
    expect(screen.getByText(/arii \/ portfolio/i)).toBeInTheDocument();

    // Assert that home content is present
    expect(screen.getByText(/DevAI & Resume Consolidation/i)).toBeInTheDocument();
  });
});
