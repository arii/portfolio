import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);

    // Catch chunk loading errors that slipped past lazyWithRetry
    const isChunkLoadError = error.message?.match(/Failed to fetch dynamically imported module|error loading dynamically imported module|chunk load/i);
    const hasAttemptedReload = JSON.parse(
      window.sessionStorage.getItem('chunk_reload_attempted') || 'false'
    );

    if (isChunkLoadError && !hasAttemptedReload) {
      window.sessionStorage.setItem('chunk_reload_attempted', 'true');
      window.location.reload();
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 rounded-md bg-red-50 text-red-900 border border-red-200">
          <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
          <p className="text-sm opacity-80">
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 rounded text-sm font-medium transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
