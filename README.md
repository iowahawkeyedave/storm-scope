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
- CIN (Convective Inhibition)
- 0-1km Shear
- 0-6km Shear
- LCL Height
- STP (Significant Tornado Parameter)
- SCP (Supercell Composite Parameter)

## License

MIT
