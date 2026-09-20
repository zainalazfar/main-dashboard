# Creator Main Dashboard & Studio Hub

A modern, high-performance personal portfolio and creator showcase dashboard designed to bring together everything you offer:
- **Software Applications** (featuring **SnapTask Free** with quick launch and interactive preview)
- **Digital Video Courses** (curriculum browser, video intros, early-bird waitlist)
- **3D Printed & STL Files** (3D print specifications, infill recommendations, STL download simulator)
- **Handmade Leathercraft Products** (materials, saddle-stitching specs, custom order inquiry form)

---

## Quick Start (1-Click Desktop Launcher)

Simply double-click:
```bat
start-dashboard.bat
```
This boots up the local server on `http://localhost:5174` and automatically opens your default web browser.

---

## Manual Startup

```bash
npm run dev
```

To build for production:
```bash
npm run build
```

---

## How to Add New Creations or Update Existing Ones

All catalogue data is neatly organized in a single file:
`src/data/items.js`

To add a new item, simply add an object to the `ITEMS` array with:
- `id`: Unique identifier string
- `title`: Item name
- `category`: `'apps'` | `'courses'` | `'3d-stl'` | `'leathercraft'`
- `status`: `'Live & Ready'`, `'In Production'`, `'Coming Soon'`, or `'Instant STL Download'`
- `price`: Pricing or `'Free / Open'`
- `shortDesc`: Brief 1-2 sentence overview for cards
- `longDesc`: Detailed description for the popup modal
- `specs`: Array of `{ key, val }` pairs (e.g. materials, software, dimensions)
- `highlights`: Array of feature bullet points
- `actionType`: `'snaptask-preview'` | `'course-modal'` | `'detail-modal'` | `'contact-modal'`

---

## Design System
- Built to match the clean aesthetic of **SnapTask**
- Dark Mode Default (`#090d16` / `#131b2e`) with Light Mode Toggle
- Typography: `Plus Jakarta Sans` & `Outfit`
- Vivid Indigo-Purple-Fuchsia gradient accents
