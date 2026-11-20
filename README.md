# Ariel Anders Portfolio

Source for the personal engineering portfolio of Ariel Anders: consulting, DevAI projects, research case studies, resume and about pages. It is a static single-page app built with Vite, React and Tailwind CSS.

Live site: https://arii.github.io/

## How it deploys

This repo (`arii/portfolio`) holds the source. The live site is served by GitHub Pages from a separate output repo, `arii/arii.github.io`.

On every push to `main`, `.github/workflows/deploy.yml` builds the app with `VITE_BASE_PATH=/` and pushes `dist/` to the `main` branch of `arii/arii.github.io` (with `clean: true`, so that repo is build output only; do not edit it by hand). Each pull request also gets a preview build from `.github/workflows/preview.yml`, deployed to the `gh-pages` branch under `preview/pr-<number>/` and linked in a PR comment. The preview is removed when the PR closes.

## Requirements

- Node 24.16.0 (see `.node-version` and `engines` in `package.json`)
- pnpm 10.28.2

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev          # http://localhost:3000
```

## Build

```sh
pnpm build        # sitemap, media optimization, type-check, vite build, SPA route stubs
pnpm preview      # serve the built dist/ at http://localhost:3000
```

## Checks

```sh
pnpm lint
pnpm type-check
pnpm test
pnpm audit:fallow
```

CI (`.github/workflows/ci.yml`) runs these on pull requests.

## Layout

- `src/pages`, `src/components`, `src/layouts`: the app
- `src/content/research`, `src/data`: research case studies and site data
- `public/assets`: images and media (see `AGENTS.md` for media rules)
- `scripts`: build helpers (sitemap, SPA route stubs, media optimization)
