#!/bin/bash
codex --yolo exec 'Build Phase 2 of the Storm Scope app.

## Phase 2 Tasks (Data Layer):

1. Create src/lib/types.ts — TypeScript interfaces for MetricInput, AnalysisResult, and GlossaryTerm (see project SPEC for exact types)

2. Create src/data/metrics.ts — metric definitions with thresholds for CAPE, CIN, 0-1km Shear, 0-6km Shear, LCL Height, STP, SCP

3. Create src/data/glossary.ts — glossary with 20+ meteorological terms with definitions and thresholds

4. Build src/lib/analyzer.ts — analysis engine that takes MetricInput and returns AnalysisResult. Evaluate each metric against thresholds, calculate tornado/hail/wind ratings (0-10), determine overall severity (none/slight/moderate/high), generate summary.

5. Test analyzer with sample data in Node to verify it works.

Commit each file. Push when done. Then run: openclaw system event --text "Phase 2 complete: types, metrics, glossary, analyzer created" --mode now'
