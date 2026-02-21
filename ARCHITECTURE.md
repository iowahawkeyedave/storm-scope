# Storm Scope — Architecture

## System Overview

Storm Scope is a static site with client-side React components for interactivity. The analysis logic runs entirely in the browser — no backend required for v1.

## Data Flow

```
User Input → MetricForm → Analysis Engine → VerdictCard → Display
                ↓
          Glossary Data → GlossaryList → Search/Filter
```

## State Management

- **Form State:** React useState in MetricForm component
- **Analysis State:** Derived state computed by analyzer.ts
- **Search State:** Local state in GlossaryList

No global state management needed for v1. If v2 adds user accounts, consider Zustand.

## Analysis Engine Logic

The analysis engine evaluates each input against predefined thresholds and generates weighted scores:

1. **Tornado Score** — weighted by: STP, 0-1km shear, LCL height
2. **Hail Score** — weighted by: CAPE, 0-6km shear, STP
3. **Wind Score** — weighted by: 0-6km shear, CAPE, CIN

Each category produces a 0-100 score mapped to:
- 0-25: Low
- 26-50: Moderate
- 51-75: Elevated
- 76-100: High

Overall severity = highest category score.

## External Integrations

None for v1. Future versions could integrate:
- Weather APIs (NOAA, Storm Prediction Center)
- AI vision for chart parsing (GPT-4 Vision, etc.)

## File Structure Summary

```
src/
├── components/     # React + Astro components
├── data/          # Static data (metrics, glossary)
├── lib/           # Utility functions + types
├── pages/         # Astro pages (routes)
└── styles/        # CSS
```

## Rendering Strategy

- **Home page:** SSR for SEO, client-side React for form interactivity
- **Glossary:** Static generation (all terms known at build time)
- **Case studies:** Static generation

## Edge Cases

- Invalid inputs (negative numbers, non-numeric): Show validation error
- Extreme values (> 9999): Accept but cap in analysis
- Empty form submission: Show "please enter at least one metric" message

## Accessibility

- All inputs have associated labels
- Keyboard navigation works throughout
- Color is not the only indicator (also use text labels)
- ARIA attributes on interactive components
