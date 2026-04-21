---
name: pau-de-cerca-art
description: "Workspace instructions for the Pau de Cerca Art portfolio/showcase SPA. Use when working on components, pages, styling, product data, animations, or navigation logic."
---

# Pau de Cerca Art — Workspace Instructions

**Project Type:** Artist portfolio + e-commerce showcase SPA for hand-illustrated products (t-shirts, prints, tote bags, logos).

**Tech Stack:** React 19 + Vite 6 + TypeScript 5 + Tailwind CSS 4 + Motion (animations)

---

## Quick Start

```bash
npm install              # Install dependencies
npm run dev              # Start dev server on http://localhost:3000
npm run build            # Production build → dist/
npm run lint             # Type check with tsc
npm run preview          # Preview production build
npm run clean            # Remove dist folder
```

**Dev Server:** Vite on `http://localhost:3000` with HMR enabled. Host is `0.0.0.0` (network-accessible).

---

## Architecture: Single-Page View Switcher

**State Flow:**
- **App.tsx** is the orchestrator: holds all state (`selectedProduct`, `activeCategory`, `isMenuOpen`, `currentView`)
- **ShowcasePage** renders the main grid + filters + Instagram feed
- **ProductDetail** renders full product view with gallery and specs
- Views switch via React state, not routing library

**Navigation Patterns:**
1. **Showcase → Detail:** Click product card → sets `selectedProduct` state → view switches
2. **Detail → Showcase:** Click back or close → clears `selectedProduct` → returns to grid
3. **Category filter:** Click category button → updates `activeCategory` → grid re-filters with animation
4. **Product carousel:** Arrows cycle through `PRODUCTS` (wraps at boundaries)

---

## File Organization & Conventions

### Folder Structure
```
src/
├── components/    # UI components (Header, ProductCard, Footer, etc.)
├── pages/         # Page-level layouts (ShowcasePage)
├── App.tsx        # State orchestrator + view switcher
├── main.tsx       # React entry point
├── types.ts       # TypeScript interfaces (Product, Category)
├── constants.ts   # Static data (PRODUCTS, CATEGORIES) + helpers
└── index.css      # Global styles + Tailwind config (@theme, @layer)
```

### File Naming
- **Components:** PascalCase + `.tsx` (e.g., `ProductCard.tsx`, `Header.tsx`)
- **Utils/Config:** camelCase + `.ts` (e.g., `constants.ts`, `types.ts`)

### Component Pattern
```typescript
interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (/* JSX */);
}
```

---

## Styling Guide

### Tailwind CSS v4 + Custom Theme

**Custom Colors** (defined in `@theme` block in `index.css`):
- `mustard` — Primary accent (#E4C775)
- `lila` — Secondary accent (#B59EC8)
- `black-art` — Dark text/background (#303231)
- `white-art` — Light text (#FFFFFF)

Use these as Tailwind classes: `text-mustard`, `bg-lila`, `border-black-art`, etc.

**Custom Fonts** (imported in `index.css`):
- **Headers:** Patrick Hand SC (cursive)
- **Body/Copy:** Coming Soon (cursive)
- **UI/Labels:** Plus Jakarta Sans (sans-serif)

Example: `<h1 className="text-4xl" style={{fontFamily: 'Patrick Hand SC'}}>`

**Responsive Breakpoints:**
- `md:` — Tablet (≥768px)
- `lg:` — Desktop (≥1024px)

**Spacing Convention:** Multiples of 4-8 units (`px-4`, `py-8`, `gap-4`, etc.)

### Global Styles
Edit `src/index.css` for:
- `@theme` block: Custom color/font definitions
- `@layer` directives: Global utility overrides
- CSS variables: Theme-wide adjustments

---

## Common Patterns

### Data & Products

**Static Product Data** (`constants.ts`):
```typescript
const PRODUCTS = createProducts(
  { id: 1, name: 'Camiseta 1', category: 'camisetas', ... },
  { id: 2, name: 'Print 1', category: 'prints', ... },
  // ... more products
);

// Accessed in ShowcasePage:
const filtered = PRODUCTS.filter(p => p.category === activeCategory);
```

**To Add Products:**
1. Add object to `PRODUCTS` definition in `constants.ts`
2. Call `createProducts()` helper to generate full product data
3. Images must exist in `/public/escaparate/{category}/{id}.webp` or matching format

### Animations (Motion Library)

**Staggered List Animation:**
```typescript
<motion.div>
  {items.map((item, i) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.05 }}
    >
      {/* content */}
    </motion.div>
  ))}
</motion.div>
```

**View Transitions:**
```typescript
<AnimatePresence mode="wait">
  {selectedProduct ? (
    <ProductDetail key="detail" />
  ) : (
    <ShowcasePage key="showcase" />
  )}
</AnimatePresence>
```

**Hover Effects:**
```typescript
<motion.div
  whileHover={{ scale: 1.1 }}
  className="group hover:text-mustard"
>
  {/* Combines Motion scale + Tailwind hover styles */}
</motion.div>
```

### State Management Pattern

All state lives in `App.tsx`:
```typescript
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const [activeCategory, setActiveCategory] = useState('all');
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Pass handlers down to children
<ShowcasePage
  onSelectProduct={setSelectedProduct}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
/>
```

---

## Environment & Build

### Environment Variables

Define in `.env` (or `.env.local`, `.env.production`):
```env
GEMINI_API_KEY=your-key-here
APP_URL=http://localhost:3000
DISABLE_HMR=false
```

**Note:** `GEMINI_API_KEY` is currently imported but unused. Remove if not planned.

### Vite Config

Key settings in `vite.config.ts`:
- **React plugin** enabled for JSX
- **Tailwind v4 plugin** for CSS
- **Path alias:** `@/` → project root
- **Define:** `GEMINI_API_KEY` exposed to frontend (consider removing)
- **HMR:** Accepts all hosts (`allowedHosts: true`)

### Linting & Type Checking

- `npm run lint` → `tsc --noEmit` (type check only)
- **No ESLint configured** — consider adding for consistency enforcement

---

## Known Issues & Pitfalls

| Issue | Details | Mitigation |
|-------|---------|-----------|
| **No state management library** | Growth → unmaintainable. Currently useState only. | Plan for Zustand/Context as features grow |
| **Hardcoded Instagram URLs** | URLs to `instagram.com/paudecercaart` in components | Centralize in constants; consider CMS for future |
| **Static product data** | New products require code changes; no database | Migrate to headless CMS or JSON API if needed |
| **Unused Gemini dependency** | Imported but not used (dead code) | Remove if not planned; or implement AI feature |
| **No error handling** | Image load fails, API errors not caught | Add error boundaries, image error handlers |
| **Placeholder Instagram images** | Using picsum.photos in production | Use real images or API when ready |
| **Type safety optional** | tsconfig.json lacks strict mode | Enable strict: true for better type safety |
| **Custom Tailwind colors require kebab-case** | Easy to write `text-mustard` directly in className | Document or enforce via ESLint rule |

---

## Quick Reference: Common Tasks

### Add a New Product
1. Open `src/constants.ts`
2. Add object to PRODUCTS definition with: `id`, `name`, `category`, `material`, `price`
3. Place image at `/public/escaparate/{category}/{id}.webp`
4. Rebuild/dev server will pick it up

### Update Product Category Filter
1. Edit `CATEGORIES` array in `src/constants.ts`
2. Update filter logic in `ShowcasePage.tsx` if needed
3. Tailwind classes will apply automatically

### Change Colors/Theme
1. Edit `@theme` block in `src/index.css`
2. Update Tailwind class bindings (e.g., `text-lila` must match `@theme lila: ...`)
3. Dev server HMR will reflect changes immediately

### Add Animation to Component
1. Wrap JSX with `<motion.div>` or `<motion.button>` (from Motion library)
2. Add `initial`, `animate`, `exit`, `transition` props
3. Use Motion + Tailwind combo: `<motion.div whileHover={{scale: 1.1}} className="hover:text-mustard">`

### Improve Performance
- Grid animations: Already optimized with staggered delays
- Images: Use `.webp` format (already done)
- Components: Memoize if needed (not critical yet; `PRODUCTS.length ≈ 20`)

---

## Tips for AI Agents

1. **Understand state first:** [App.tsx](../src/App.tsx) is the control center—all navigation originates here.
2. **Product operations:** Always modify [constants.ts](../src/constants.ts) and ensure image paths exist.
3. **Component updates:** Preserve TypeScript prop interfaces and animation patterns.
4. **Styling:** Use Tailwind utilities + Motion animations; edit `index.css` for theme-wide changes.
5. **Testing:** No test runner configured; consider adding Vitest for components.
6. **Deployment:** `npm run build` → static `dist/` folder ready for hosting (Vercel, Netlify, etc.).

---

## Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Motion Library (Framer Motion Fork)](https://www.motion.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Google Generative AI (if Gemini feature is planned)](https://ai.google.dev/)
