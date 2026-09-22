import { lazy, ComponentType } from 'react';

/**
 * Wraps React.lazy to automatically reload the page if a chunk fails to load.
 * This happens when a new version is deployed and users have stale index.html.
 * Uses sessionStorage to prevent infinite reload loops.
 */
export const lazyWithRetry = (
  componentImport: () => Promise<{ default: ComponentType<any> }>
) => {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem('chunk_reload_attempted') || 'false'
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem('chunk_reload_attempted', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        const errorString = error instanceof Error ? error.message : String(error);
        const isChunkLoadError = errorString.match(/Failed to fetch dynamically imported module|error loading dynamically imported module|chunk load/i);

        if (isChunkLoadError) {
          window.sessionStorage.setItem('chunk_reload_attempted', 'true');
          window.location.reload();
          // Return a never-resolving promise to prevent React from trying to render
          // before the reload happens
          return new Promise(() => {}) as Promise<{ default: ComponentType<any> }>;
        }
      }
      throw error;
    }
  });
};
