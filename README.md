# Prismic + Next.js site starter

A Prismic-powered site built on Next.js (App Router) and Slice Machine. Content lives in Prismic as custom types, and pages are rendered through reusable slices, so editors can update copy, images and layouts without touching code.

## What's inside

- **Next.js (App Router)** — dynamic routing at `src/app/[uid]/page.js`
- **Prismic** — `@prismicio/client`, `@prismicio/react`, `@prismicio/next`
- **Slice Machine** — build and preview slices in the browser
- **Custom types** — `article`, `page`, `secondPage`, `navigation`, `settings`, `publicity`, `richtext`
- **Slices** — `ContactForm`, `ThreeColumnArticles`, `HorizontalDivider` and more
- PostCSS pipeline

## Getting started

```sh
npm install

# point the app at your Prismic repository
printf 'NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-repo-name\n' > .env.local

npm run slicemachine   # optional: edit slices and custom types
npm run dev            # http://localhost:3000
```

Useful scripts:

| Script | What it does |
|---|---|
| `npm run dev` | next dev |
| `npm run build` | production build |
| `npm run start` | serve the production build |
| `npm run slicemachine` | Slice Machine UI |
| `npm run gen` | regenerate Prismic TypeScript types |
| `npm run lint` | ESLint |

## Configuration

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` | Your Prismic repository name. Falls back to the repository configured in `src/prismicio.js`. |

## License

Apache-2.0 (based on the Prismic starter).

---

Built by **Cody Wang**, front-end engineer. I build and optimise Prismic, Next.js and SvelteKit sites. Website: [prismicaudit.com](https://prismicaudit.com)
