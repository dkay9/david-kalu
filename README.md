# DK.DEV — Software Engineer Portfolio

Editorial portfolio for DK (BuildItt), built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**. Dark theme by default with a toggle to the white editorial theme, persisted to localStorage with no flash on load.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding projects

1. Drop a screenshot into `public/projects/` (16:9 works best)
2. Register it in `lib/projects.ts`:

```ts
{
  slug: "my-app",
  title: "My App",
  description: "One-liner about what it does.",
  category: "Product",            // "Product" | "Client work" | "Open source"
  tools: ["Next.js", "TypeScript", "Supabase"],
  image: "/projects/my-app.png",
  year: "2026",
  wide: true,                     // optional — spans 2 columns
  live: "https://myapp.com",      // optional — link buttons render only if set
  github: "https://github.com/...",
}
```

The `/projects` page filters by category automatically. If a screenshot is missing, the card shows a "drop the file in" placeholder instead of breaking. The first 3 entries are featured on the home page (`featured` in `lib/projects.ts`).

## Theme

- Dark (`#0c0c0c`) is the default; the toggle in the nav switches to the light editorial theme
- Both themes come from CSS variables in the `@theme` / `[data-theme="light"]` blocks of `app/globals.css`
- Choice is saved to localStorage and applied by an inline script in `app/layout.tsx` before hydration (no flash of wrong theme)

## Customizing

- **Copy / name** — `Hero.tsx`, `About.tsx`, `Footer.tsx`, `Nav.tsx`, metadata in `app/layout.tsx`
- **Colors** — `@theme` block in `app/globals.css` (`--color-rec` is the accent)
- **Stats** — `About.tsx` · **Services** — `Services.tsx` · **Socials** — `Nav.tsx` + `Footer.tsx`

Animations respect `prefers-reduced-motion`.
