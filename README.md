# 🌩️ Storm Scope

A severe weather setup analyzer for storm chasers and weather enthusiasts.

## What is this?

Storm Scope analyzes atmospheric conditions to estimate tornado, hail, and damaging wind potential from a given storm setup. Enter meteorological metrics like CAPE, shear values, and indices to get severity ratings.

## Features

- **Severe Weather Analyzer** — Input environmental metrics and get tornado/hail/wind risk estimates
- **Searchable Glossary** — 23+ meteorological terms with definitions and thresholds
- **Accessible** — Built with keyboard navigation and ARIA support
- **SEO Optimized** — Meta tags and Open Graph for sharing

## Tech Stack

- [Astro](https://astro.build) — Static site framework
- [React](https://react.dev) — Interactive components
- [Tailwind CSS](https://tailwindcss.com) — Styling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:4321 to view.

## Deployment

Deployed to [Render](https://render.com) as a static site. See `render.yaml` for configuration.

## Metrics Supported

- CAPE (Convective Available Potential Energy)
- MLCAPE (Mixed-Layer CAPE)
- MUCAPE (Most-Unstable CAPE)
- CIN (Convective Inhibition)
- 0-1km Shear
- 0-1km SRH
- 0-3km SRH
- 0-6km Shear
- Effective Bulk Shear
- LCL Height
- 700-500 mb Lapse Rate
- Sfc-3 km Lapse Rate
- Freezing Level
- DCAPE (Downdraft CAPE)
- 850-500 mb Wind
- EHI (Energy-Helicity Index)
- Effective STP
- Fixed-Layer STP
- SCP (Supercell Composite Parameter)

## License

MIT
