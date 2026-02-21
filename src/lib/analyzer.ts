import { HAZARD_WEIGHTS, METRIC_DEFINITIONS } from '../data/metrics'
import type { AnalysisResult, HazardKey, HazardLabel, HazardResult, MetricInput, MetricKey, OverallSeverity } from './types'

const EMPTY_HAZARD: HazardResult = {
  rating: 0,
  label: 'Low',
  factors: [],
}

function toValidNumber(value: number | undefined): number | null {
  if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
    return null
  }

  return value
}

function normalizeMetricValue(metric: MetricKey, value: number): number {
  const definition = METRIC_DEFINITIONS[metric]
  const normalized = definition.inputMode === 'absolute' ? Math.abs(value) : value

  if (normalized < definition.min) return definition.min
  if (normalized > definition.max) return definition.max

  return normalized
}

function getMetricScore(metric: MetricKey, value: number): { score: number; interpretation: string } {
  const definition = METRIC_DEFINITIONS[metric]
  const normalizedValue = normalizeMetricValue(metric, value)
  const matchingBand = definition.bands.find((band) => normalizedValue <= band.max)

  if (!matchingBand) {
    return { score: 0, interpretation: 'No threshold match' }
  }

  return { score: matchingBand.score, interpretation: matchingBand.interpretation }
}

function toHazardLabel(score: number): HazardLabel {
  if (score >= 76) return 'High'
  if (score >= 51) return 'Elevated'
  if (score >= 26) return 'Moderate'
  return 'Low'
}

function toOverallSeverity(score: number): OverallSeverity {
  if (score >= 71) return 'high'
  if (score >= 46) return 'moderate'
  if (score >= 21) return 'slight'
  return 'none'
}

function buildHazardResult(hazard: HazardKey, input: Partial<MetricInput>): HazardResult {
  const weights = HAZARD_WEIGHTS[hazard]
  const scoredMetrics: Array<{ metric: MetricKey; contribution: number; interpretation: string }> = []
  let weightedScoreTotal = 0
  let weightTotal = 0

  for (const { metric, weight } of weights) {
    const value = toValidNumber(input[metric])
    if (value === null) continue

    const metricScore = getMetricScore(metric, value)
    const contribution = metricScore.score * weight

    weightedScoreTotal += contribution
    weightTotal += weight
    scoredMetrics.push({
      metric,
      contribution,
      interpretation: metricScore.interpretation,
    })
  }

  if (weightTotal === 0) {
    return EMPTY_HAZARD
  }

  const rating = Math.max(0, Math.min(100, Math.round(weightedScoreTotal / weightTotal)))
  const factors = scoredMetrics
    .sort((a, b) => b.contribution - a.contribution)
    .map(({ metric, interpretation }) => `${METRIC_DEFINITIONS[metric].label}: ${interpretation}`)

  return {
    rating,
    label: toHazardLabel(rating),
    factors,
  }
}

export function analyzeSetup(input: Partial<MetricInput>): AnalysisResult {
  try {
    const values = Object.values(input).filter((value) => toValidNumber(value) !== null)
    if (values.length === 0) {
      return {
        overall: 'none',
        tornado: EMPTY_HAZARD,
        hail: EMPTY_HAZARD,
        wind: EMPTY_HAZARD,
        summary: 'Enter at least one valid metric to generate an analysis.',
      }
    }

    const tornado = buildHazardResult('tornado', input)
    const hail = buildHazardResult('hail', input)
    const wind = buildHazardResult('wind', input)

    const overallScore = Math.max(tornado.rating, hail.rating, wind.rating)
    const overall = toOverallSeverity(overallScore)
    const dominantHazard = ([
      ['tornado', tornado.rating],
      ['hail', hail.rating],
      ['wind', wind.rating],
    ] as const).sort((a, b) => b[1] - a[1])[0][0]

    return {
      overall,
      tornado,
      hail,
      wind,
      summary: `Overall ${overall} severe potential. Primary concern: ${dominantHazard}.`,
    }
  } catch (error) {
    console.error('Analyzer failed, returning safe fallback result.', error)
    return {
      overall: 'none',
      tornado: EMPTY_HAZARD,
      hail: EMPTY_HAZARD,
      wind: EMPTY_HAZARD,
      summary: 'Analysis unavailable. Please verify inputs and try again.',
    }
  }
}
