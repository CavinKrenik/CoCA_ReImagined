# CoCA Seattle Homepage Concept

Responsive React/Vite homepage concept based on the CoCA Figma wireframe.

## Run locally

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
```

The production-ready files are generated in `dist/`.

## Current prototype behavior

- Desktop and tablet use the full scrolling homepage with a sticky header.
- Phones use four paginated screens instead of one long page.
- Main mobile pages support arrow keys, buttons, dots, and horizontal swipe.
- Navigation links open the corresponding pages on the current CoCA website.
- Approved exhibition artwork is used in the hero and visit sections.

## Source structure

```text
src/
├── components/
│   ├── layout/       Shared header and footer
│   └── ui/           Reusable links, buttons, cards, and brand mark
├── config/           Current-site URLs and external destinations
├── data/             Navigation and card content
├── features/
│   ├── desktop/      Scrolling desktop and tablet homepage
│   └── mobile/       Four-page mobile experience
├── App.jsx           Responsive experience composition
├── main.jsx          React entry point
└── styles.css        Shared design system and responsive styles
```

## GitHub Pages

The included workflow publishes the Vite production build whenever the `main` branch is pushed to GitHub. In the repository settings, set **Pages → Source** to **GitHub Actions**.
