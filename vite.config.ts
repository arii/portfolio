import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default defineConfig(() => {
  const base = process.env.VITE_BASE_PATH ?? '/';

  return {
    plugins: [
      react(),
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
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
  };
});
