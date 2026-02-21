# Storm Scope — PRD

## Problem Statement

Storm chasers and weather enthusiasts often struggle to interpret complex meteorological data from Skew-T charts and soundings. The data exists (CAPE, shear, CIN, etc.), but translating those numbers into actionable severe weather insights requires specialized knowledge that most people don't have.

## Target Audience

- **Storm chasers** — need quick analysis on the road
- **Weather enthusiasts** — want to understand severe weather setups
- **Meteorology students** — learning to read sounding data
- **Hobbyists** — interested in severe weather without formal training

## User Stories

| As a... | I want to... | So that... |
|---------|--------------|------------|
| Storm chaser | Enter sounding data quickly | I can get a rapid severity assessment before heading out |
| Weather enthusiast | Understand what CAPE/CIN/shear mean | I can learn about severe weather patterns |
| Student | Look up meteorological terms | I can study for exams or research |
| Chaser | Share a setup with friends | We can discuss the severe potential together |

## MVP Features (Prioritized)

### P0 — Must Have

1. **Metric Input Form**
   - CAPE (Convective Available Potential Energy)
   - CIN (Convective Inhibition)
   - 0-1km Shear
   - 0-6km Shear
   - LCL Height (Lift Condensation Level)
   - STP (Significant Tornado Parameter)
   - SCP (Supercell Composite Parameter)

2. **Analysis Engine**
   - Evaluate each metric against severe weather thresholds
   - Generate overall severity rating (None/Slight/Moderate/High)
   - Produce category-specific assessments:
     - Tornado potential
     - Large hail risk
     - Wind damage potential

3. **Glossary**
   - Searchable list of all meteorological terms
   - Clear definitions with threshold explanations
   - Links from input form to relevant definitions

### P1 — Should Have

4. **Shareable Reports**
   - Generate summary of the analysis
   - Copy to clipboard as text

5. **Case Study Examples**
   - Pre-loaded historical setups (e.g., May 2013 El Reno)

### P2 — Nice to Have

6. **Image Upload (v2)**
   - AI-powered chart parsing
   - Auto-extract metrics from Skew-T images

## Success Metrics

- User can complete an analysis in under 2 minutes
- Glossary covers at least 20 common terms
- Mobile-responsive for on-the-go use
- Zero console errors in production

## Out of Scope (v1)

- User accounts / authentication
- Saving history
- Image upload parsing
- Real-time data ingestion from weather APIs
