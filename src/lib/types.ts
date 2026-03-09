export type OverallSeverity = 'none' | 'slight' | 'moderate' | 'high'

export type HazardKey = 'tornado' | 'hail' | 'wind'

export type HazardLabel = 'Low' | 'Moderate' | 'Elevated' | 'High'

export type MetricKey =
  | 'cape'
  | 'mlcape'
  | 'mucape'
  | 'cin'
  | 'shear0to1'
  | 'shear0to6'
  | 'srh0to1'
  | 'srh0to3'
  | 'effectiveShear'
  | 'lclHeight'
  | 'lapseRate700to500'
  | 'lapseRateSfcTo3km'
  | 'freezingLevel'
  | 'dcape'
  | 'wind850to500'
  | 'ehi'
  | 'stp'
  | 'stpFixed'
  | 'scp'

export interface MetricInput {
  cape: number
  mlcape: number
  mucape: number
  cin: number
  shear0to1: number
  shear0to6: number
  srh0to1: number
  srh0to3: number
  effectiveShear: number
  lclHeight: number
  lapseRate700to500: number
  lapseRateSfcTo3km: number
  freezingLevel: number
  dcape: number
  wind850to500: number
  ehi: number
  stp: number
  stpFixed: number
  scp: number
}

export interface MetricBand {
  max: number
  score: number
  label: string
  interpretation: string
}

export interface MetricDefinition {
  key: MetricKey
  label: string
  unit: string
  min: number
  max: number
  description: string
  inputMode?: 'direct' | 'absolute'
  bands: MetricBand[]
}

export interface HazardWeight {
  metric: MetricKey
  weight: number
}

export interface HazardResult {
  rating: number
  label: HazardLabel
  factors: string[]
}

export interface AnalysisResult {
  overall: OverallSeverity
  tornado: HazardResult
  hail: HazardResult
  wind: HazardResult
  summary: string
}

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  thresholds?: {
    low: string
    moderate: string
    high: string
  }
  relatedMetrics?: MetricKey[]
}
