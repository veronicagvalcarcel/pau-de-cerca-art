# Copilot instructions for Pau de Cerca Art

Purpose
- Short, actionable guidance for Copilot sessions working on this repository (React + Vite + TypeScript + Tailwind + Motion).

Build / Run / Lint / Test
- Dev server: npm run dev  (Vite, served on http://localhost:3000 by default)
- Build: npm run build
- Preview production build: npm run preview
- Clean build output: npm run clean
- Lint / type-check: npm run lint  (runs tsc --noEmit)
- Tests: No test runner or test scripts are configured in this repo. If asked how to run a single test, report "no tests configured" and suggest adding Vitest or Jest if tests are requested.

High-level architecture (big picture)
- Single-page app controlled from src/App.tsx. App.tsx is the orchestrator: it holds global UI state and switches views.
  - Views: 'showcase' and 'detail' (no router used — view switching is done with React state).
  - State: selectedProduct, activeCategory, isMenuOpen, view.
- Product data: src/constants.ts exports PRODUCTS and CATEGORIES. Data is static (generated via a createProducts helper) and expects images in public/escaparate/{folder}/{prefix}{id}.webp.
- Pages & components:
  - pages/ShowcasePage — product grid, filters, instagram feed
  - components/ProductDetail — full product view and gallery
  - ProductCard, Header, Footer follow component conventions (PascalCase, .tsx)
- Animations: motion (AnimatePresence and motion components) used for view transitions and hover effects.
- Styling: Tailwind CSS + a small custom @theme block in src/index.css for fonts and theme colors.
- Build config: vite.config.ts enables React plugin and tailwindcss and exposes process.env.GEMINI_API_KEY to the client (env loaded via loadEnv).

Key repository conventions
- Component filenames: PascalCase.tsx (e.g., ProductCard.tsx, ProductDetail.tsx)
- Constants and helpers: camelCase with plain .ts (e.g., constants.ts, types.ts)
- Product images path convention: /public/escaparate/{folder}/{prefix}{n}.webp (createProducts in src/constants.ts builds these paths)
- Categories: CATEGORIES values are used directly in UI (e.g., 'Camisetas', 'Prints', 'Totebags', 'Todes') — treat casing consistently with UI code.
- Single source of truth for product data: src/constants.ts. To add products, update constants and place matching images.
- Type checking is used as the lint step (npm run lint → tsc --noEmit). There is no ESLint configured.
- Path alias '@' maps to repository root (vite config + tsconfig paths). Use '@/path/to/file' imports when helpful.
- Secrets caution: GEMINI_API_KEY is injected into client bundles by vite.config.ts. Do not commit real secrets to the repo; treat .env carefully.

AI assistant config files
- No CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, or .clinerules were found.

When asked to modify code
- Focus changes to the minimal files necessary. App.tsx is the orchestrator — changing navigation/state often affects multiple components.
- When adding products, update src/constants.ts and add corresponding images under public/escaparate.

Notes for Copilot sessions
- Prefer modifying constants.ts + components over scattering product data across files.
- When adding features that change navigation, update App.tsx first and then adjust child components.
- If asked to add tests, propose a test runner (Vitest recommended) before generating tests, because none are configured.

