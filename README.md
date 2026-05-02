# The Watch Gallery — Developer Handoff

## File Structure

```
WatchGallery/
├── index.html          ← Entry point — open this in a browser or deploy to any host
├── styles.css          ← All styles (Cormorant Garamond + Montserrat, dark luxury theme)
├── app.js              ← All app logic (auth, catalog, wishlist, modals, state)
├── data-rolex.js       ← Complete Rolex catalog (~185 configurations, full pricing)
├── data-ap.js          ← AP catalog (coming — paste into index.html script tags)
└── data-patek.js       ← Patek catalog (coming — same)
```

## Deployment (GitHub + Netlify)

1. Create a new **GitHub repository** (e.g. `watch-gallery`)
2. Upload all files into the repository root
3. Go to **Netlify** → Add new site → Import from GitHub → Select repo
4. Leave all build settings **blank** (no build command, publish directory = `/`)
5. Click Deploy — done. Live in 30 seconds.

For a **custom domain** (e.g. `catalog.thewatchgallery.com`):
- In Netlify → Domain settings → Add custom domain
- Point your domain's DNS CNAME to Netlify's URL

## Adding AP + Patek Data

When AP and Patek data files arrive:
1. Add `data-ap.js` and `data-patek.js` to the folder
2. In `index.html`, uncomment the two script tags already there
3. In `app.js`, extend `filteredWatches()` and the sidebar to include the new brand arrays
4. Push to GitHub — Netlify auto-deploys in under 60 seconds

## Tech Stack

- **Zero dependencies** — pure HTML, CSS, vanilla JavaScript
- **No build step** — works by opening `index.html` directly
- **localStorage** — client accounts, wishlists, and uploaded photos persist in browser
- **Anthropic Claude API** — used for buy request and watch sourcing notifications
- **Google Fonts** — Cormorant Garamond + Montserrat (loaded via CSS @import)

## Pricing Engine

Each watch has:
- `pricing` — base prices for 4 set configurations (Full Set / Watch + Papers / Watch + Box / Watch Only)
- `cM` — condition multipliers (Unworn → Fair)
- `eM` — era multipliers (Pre-1960 → 2020s)

`calcPrice(watch, set, condition, era)` returns `{ low, avg, high }` in USD.

Sources aggregated from: Chrono24, WatchCharts, WatchGuys, Ermitage, Phillips, Christie's, Sotheby's — April 2026.

## Photo Upload

Photos are stored as base64 data URLs in localStorage per user account.

- **Family photo**: Named by `familyId` (e.g. `rolex-sub`) — applies to ALL variants in that family
- **Watch photo**: Named by watch `id` — overrides family photo for that specific reference

Upload via the 📷 button in any watch modal, or the "Upload Family Photo" button when a family is selected in the sidebar.

## Client Accounts

Client data is stored in `localStorage` under key `twg_v5_users`. Each user has:
- `name`, `email`, `phone`, `pw` (plaintext — for production, replace with proper auth)
- `wishlist` — array of `{ wid, set, cond, era, addedAt }`
- `photos` — photo data keyed by watch ID or family ID

For production: replace localStorage auth with a proper backend (Supabase, Firebase, etc.)

## Buy Request Flow

When a client clicks "Buy This Watch":
1. A form collects their details + optional note
2. A call is made to the Anthropic Claude API
3. Claude generates a professional internal notification for the store owner
4. The client sees a confirmation screen

The API key is handled by the proxy — no key needed in the frontend.

## Customization

- **Brand colors**: Edit `:root` variables in `styles.css`
- **Add a watch**: Add an object to `window.ROLEX_WATCHES` in `data-rolex.js`
- **Change pricing**: Update the `pricing`, `cM`, or `eM` fields on any watch object
- **Add a brand**: Create `data-ap.js` following the same pattern as `data-rolex.js`
