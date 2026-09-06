import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';

export function getBasePath(): string {
  if (process.env.VERCEL === '1' || process.env.VERCEL) return '/';
  if (process.env.VITE_BASE_PATH) {
    return ('/' + process.env.VITE_BASE_PATH + '/').replace(/\/+/g, '/');
  }
  return '/';
}

export default defineConfig(() => {
  const base = getBasePath();

  return {
    plugins: [
      react(),
      visualizer({
        filename: 'artifacts/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
      {
        name: 'spa-preview-fallback',
        configurePreviewServer(server) {
          const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
          const baseNoSlash = baseWithSlash.slice(0, -1);

          server.middlewares.use((req, res, next) => {
            try {
              const url = req.url ?? '/';
              const [pathname, rest] = url.split('?');
              const query = rest ? `?${rest}` : '';

              if (baseNoSlash && pathname === baseNoSlash) {
                req.url = `${baseWithSlash}index.html${query}`;
                if (req.originalUrl && req.originalUrl.startsWith(baseNoSlash)) {
                  req.originalUrl = req.originalUrl.replace(baseNoSlash, baseWithSlash);
                }
              } else if (
                pathname.startsWith(baseWithSlash) &&
                !pathname.startsWith(`${baseWithSlash}assets/`) &&
                !pathname.match(/\.(html|js|css|png|jpg|jpeg|webp|avif|svg|ico|woff2?|ttf|eot|map|json|txt|xml)$/)
              ) {
                req.url = `${baseWithSlash}index.html${query}`;
              }
            } catch (error) {
              console.error('[spa-preview-fallback] Error processing URL fallback rewrite logic:', error);
            }

            next();
          });
        },
      },
    ],
    base,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
          manualChunks(id) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router/') ||
              id.includes('node_modules/react-router-dom/') ||
              id.includes('node_modules/react-helmet-async/')
            ) {
              return 'vendor-react';
            }
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      exclude: ['**/node_modules/**', '**/dist/**', '**/.tmp-main/**', '**/cypress/**', '**/node_modules-main/**'],
    },
  };
});
