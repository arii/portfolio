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
            element: <Home onNavigate={() => {}} />,
          },
        ],
      },
    ]);

    render(<App router={testRouter} />);

    // Assert that core branding elements from layout and home are rendered
    expect(screen.getAllByText(/Ariel Anders/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Portfolio/i).length).toBeGreaterThan(0);

    // Assert that home content is present
    expect(screen.getAllByText(/Ariel Anders, PhD/i).length).toBeGreaterThan(0);
  });
});
