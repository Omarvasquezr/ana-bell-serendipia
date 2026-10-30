# Project notes

- Single-page site: no router. `src/App.tsx` renders `Index` directly; do not reintroduce react-router-dom (it added ~15 KB gzip for one page).
- Only these runtime dependencies: react, react-dom, clsx, tailwind-merge. Everything else (Radix, framer-motion, etc.) was removed; don't add UI kits back.
- Fonts are self-hosted WOFF2 subsets in `public/fonts` (latin + Spanish accents only), loaded via `@font-face` in `src/index.css` with `font-display: swap`. No fontsource imports. If copy changes add new characters, re-subset or the glyph falls back.
- Hero painting is a CDN asset pointer: `src/assets/hero-pintura.webp.asset.json` (33 KB webp, cleaned crop of the doctor's painting, no hand in frame). Import the pointer and use `.url`; assets are immutable — to replace, upload a new pointer and delete the old one with `lovable-assets delete`.
- og:image is intentionally absent; hosting injects the social preview. Only set it if the user provides an absolute https URL.
- Bundle budget: first load ≈ 131 KB compressed (target < 150 KB). Verify with `npx vite build --outDir /tmp/dist-measure` and gzip sizes when adding anything heavy.
