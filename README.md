# Providence Presbyterian Church — Website

A modern, responsive website for Providence Presbyterian Church in Sugar Land, Texas. Built with React, TypeScript, Vite, and TailwindCSS.

---

## Running Locally

**Prerequisites:** Node.js 18+ and [pnpm](https://pnpm.io) installed.

```bash
# 1. Install dependencies
pnpm install

# 2. Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

---

## Building for Production

```bash
pnpm build
```

The production-ready static files will be output to `dist/public/`. This directory contains everything needed to serve the site — no server-side runtime is required.

To preview the production build locally:

```bash
pnpm preview
```

---

## Deploying

### GitHub + Railway

1. Push the project to a GitHub repository.
2. Create a new project on [Railway](https://railway.app) and connect your GitHub repository.
3. Railway will detect the `package.json` and run `pnpm build` automatically.
4. Set the **start command** to `pnpm start` (which runs `vite preview --host`), or configure Railway to serve the `dist/public` directory as a static site.

### Static Hosting (Netlify, Vercel, Cloudflare Pages)

Simply point your hosting provider to the `dist/public` output directory after running `pnpm build`. No additional server configuration is needed.

---

## Project Structure

```
providence-church/
├── client/
│   ├── public/          # Static assets (images, fonts)
│   │   └── images/      # Site images
│   └── src/
│       ├── components/  # React components (sections, UI)
│       ├── pages/       # Page components
│       ├── contexts/    # React context providers
│       └── hooks/       # Custom React hooks
├── server/              # Express server (for production preview)
├── shared/              # Shared constants
├── dist/                # Production build output (generated)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 7 | Build tool and dev server |
| TailwindCSS 4 | Utility-first styling |
| Framer Motion | Scroll animations |
| Lucide React | Icons |
| Wouter | Client-side routing |
