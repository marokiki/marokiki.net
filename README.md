This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Internationalization

This project now includes an English version of the site under `/en`.

- English pages: `app/en/layout.js`, `app/en/page.js`, component `app/components/HomeEn.js`.
- The app uses Next.js built-in i18n settings in `next.config.mjs` with `ja` as the default locale and `en` enabled.
- A middleware (`middleware.js`) inspects the browser `Accept-Language` header and will redirect to `/en` when the browser prefers English (basic check: first language starts with `en`).

How to run locally
-------------------

Start dev server:

```bash
npm install
npm run dev
```

Build for export (project currently uses `output: 'export'`):

```bash
npm run build
npm run start
```

Notes
-----
- The Accept-Language redirect is a simple heuristic. For more advanced locale negotiation consider using a parser or storing user preference in cookies.
- If you'd like translations to be managed centrally, we can introduce a lightweight i18n library or use Next.js /app directory patterns with translation JSON files.
