# Storm Scope — Build Plan

## Phase 1: Setup (30 min)

- [ ] Initialize Astro project with React: `npm create astro@latest storm-scope`
- [ ] Add React integration: `npx astro add react`
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Set up project structure (folders per TECH-SPEC)
- [ ] Verify dev server runs: `npm run dev`

## Phase 2: Data Layer (45 min)

- [ ] Create `src/lib/types.ts` — TypeScript interfaces
- [ ] Create `src/data/metrics.ts` — metric definitions with thresholds
- [ ] Create `src/data/glossary.ts` — glossary terms (20+ terms)
- [ ] Build analysis engine in `src/lib/analyzer.ts`
- [ ] Test analyzer with sample data in Node

## Phase 3: Core Components (90 min)

- [ ] Create Layout.astro — base layout with header/footer
- [ ] Create MetricInput.tsx — single input field component
- [ ] Create MetricForm.tsx — full form with validation
- [ ] Create VerdictCard.tsx — severity display component
- [ ] Create AnalysisResult.tsx — full results display

## Phase 4: Pages (60 min)

- [ ] Build `/` (index.astro) — combine form + results
- [ ] Build `/glossary` (glossary.astro) — searchable glossary
- [ ] Build `/cases` (cases.astro) — case studies page (or placeholder)
- [ ] Add navigation between pages

## Phase 5: Polish (45 min)

- [ ] Add responsive styles for mobile
- [ ] Add loading states (if needed)
- [ ] Add empty/validation states
- [ ] Test form submission flow end-to-end
- [ ] Check accessibility (keyboard, screen reader)

## Phase 6: Deploy (15 min)

- [ ] Build for production: `npm run build`
- [ ] Deploy to Vercel (or static hosting)
- [ ] Test production build locally first
- [ ] Verify all pages load correctly

## Total Estimated Time

~4.5 hours for MVP

## Dependencies Checklist

- astro
- @astrojs/react
- @astrojs/tailwind
- react
- react-dom
- tailwindcss
- typescript

## Testing Checklist

Before marking complete, verify:
- [ ] Form accepts valid numbers
- [ ] Form rejects invalid inputs with clear errors
- [ ] Analysis produces reasonable results for known setups
- [ ] Glossary is searchable and all terms render
- [ ] Mobile layout works (no horizontal scroll)
- [ ] No console errors on any page
- [ ] All links navigate correctly
