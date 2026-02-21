# Storm Scope — Technical Specification

## Tech Stack

- **Framework:** Astro 5 (with React for interactive components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** React useState / Zustand for complex state
- **Deployment:** Vercel (static output)

## Project Structure

```
storm-scope/
├── src/
│   ├── components/
│   │   ├── analyzer/
│   │   │   ├── MetricInput.tsx       # Single metric input field
│   │   │   ├── MetricForm.tsx       # Full form with all inputs
│   │   │   ├── AnalysisResult.tsx   # Results display
│   │   │   └── VerdictCard.tsx      # Severity verdict component
│   │   ├── glossary/
│   │   │   ├── GlossaryList.tsx      # Searchable glossary
│   │   │   ├── GlossaryItem.tsx     # Single term definition
│   │   │   └── GlossarySearch.tsx   # Search input
│   │   └── shared/
│   │       ├── Layout.astro          # Main layout
│   │       ├── Header.astro         # Navigation header
│   │       └── Footer.astro         # Site footer
│   ├── data/
│   │   ├── metrics.ts               # Metric definitions + thresholds
│   │   └── glossary.ts              # Glossary terms data
│   ├── lib/
│   │   ├── analyzer.ts              # Analysis logic
│   │   └── types.ts                 # TypeScript interfaces
│   ├── pages/
│   │   ├── index.astro              # Home / analyzer page
│   │   ├── glossary.astro          # Glossary page
│   │   └── cases.astro              # Case studies page
│   └── styles/
│       └── global.css               # Global styles
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Data Models

### Metric Input

```typescript
interface MetricInput {
  cape: number;           // J/kg
  cin: number;            // J/kg
  shear0to1: number;     // knots
  shear0to6: number;     // knots
  lclHeight: number;      // meters AGL
  stp: number;            // dimensionless
  scp: number;            // dimensionless
}
```

### Analysis Result

```typescript
interface AnalysisResult {
  overall: 'none' | 'slight' | 'moderate' | 'high';
  tornado: { rating: number; label: string; factors: string[] };
  hail: { rating: number; label: string; factors: string[] };
  wind: { rating: number; label: string; factors: string[] };
  summary: string;
}
```

### Glossary Term

```typescript
interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  thresholds?: {
    low: string;
    moderate: string;
    high: string;
  };
  relatedMetrics?: string[];
}
```

## Analysis Thresholds

### CAPE (Convective Available Potential Energy)

| Range | Interpretation |
|-------|----------------|
| < 500 | Weak instability |
| 500-1000 | Moderate instability |
| 1000-2500 | Strong instability |
| > 2500 | Extreme instability |

### 0-1km Shear

| Range | Interpretation |
|-------|----------------|
| < 10 kt | Weak shear |
| 10-20 kt | Moderate shear |
| 20-30 kt | Strong shear |
| > 30 kt | Extreme shear |

### STP (Significant Tornado Parameter)

| Range | Interpretation |
|-------|----------------|
| < 1 | Low tornado potential |
| 1-3 | Elevated tornado potential |
| > 3 | Significant tornado potential |

## Component Inventory

| Component | Location | Props | State | Notes |
|-----------|----------|-------|-------|-------|
| MetricInput | components/analyzer/ | label, name, unit, min, max, onChange | - | Single number input |
| MetricForm | components/analyzer/ | onSubmit: (data) => void | formData, errors | Full input form |
| VerdictCard | components/analyzer/ | result: AnalysisResult | - | Shows severity rating |
| GlossaryList | components/glossary/ | terms: GlossaryTerm[] | searchQuery | Filterable list |
| GlossaryItem | components/glossary/ | term: GlossaryTerm | - | Expandable definition |
| GlossarySearch | components/glossary/ | onSearch: (query) => void | query | Search input |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main analyzer — input form + results |
| `/glossary` | Searchable glossary of all terms |
| `/cases` | Historical case studies (stretch goal) |
