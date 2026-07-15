# LegalLink Uganda — Marketing Site

Standalone Next.js marketing/info site explaining LegalLink Uganda to firms
considering the product. Completely separate from the main app repo
(`DeepSeaSailor/legallink`) — no shared code, no risk to the live product.

## Run locally

```
npm install
npm run dev
```

## Deploy

Push this folder to its own GitHub repo, then import it as a new Vercel
project. Point a subdomain (e.g. `www.legallink.ug` or
`info.legallink-two.vercel.app`) at it once deployed.

## Structure

- `app/layout.js` — fonts, metadata, page shell
- `app/page.js` — the entire single-page site
- `app/globals.css` — all styling (navy/ivory/gold palette, Newsreader serif + Inter)
