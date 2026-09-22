import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Global uncaught error:', error, errorInfo);

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
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
          <div className="max-w-md w-full bg-slate-900 rounded-xl border border-slate-800 p-8 shadow-2xl text-center">
            <h1 className="text-2xl font-bold text-slate-100 mb-4">Application Error</h1>
            <p className="text-slate-400 mb-8 text-sm">
              We've encountered an unexpected error. This is often resolved by refreshing the page to load the latest version.
            </p>
            <button
              onClick={() => {
                window.sessionStorage.removeItem('chunk_reload_attempted');
                window.location.reload();
              }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition-colors w-full"
            >
              Refresh Application
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="mt-6 p-4 bg-slate-950 rounded text-left text-xs text-red-400 overflow-auto border border-red-900/50">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
