import type { HazardKey, HazardWeight, MetricDefinition, MetricKey } from '../lib/types'

export const METRIC_DEFINITIONS: Record<MetricKey, MetricDefinition> = {
  cape: {
    key: 'cape',
    label: 'CAPE',
    unit: 'J/kg',
    min: 0,
    max: 6000,
    description: 'Convective Available Potential Energy (instability).',
    bands: [
      { max: 500, score: 15, label: 'Weak', interpretation: 'Weak instability' },
      { max: 1000, score: 40, label: 'Moderate', interpretation: 'Moderate instability' },
      { max: 2500, score: 70, label: 'Strong', interpretation: 'Strong instability' },
      { max: Number.POSITIVE_INFINITY, score: 95, label: 'Extreme', interpretation: 'Extreme instability' },
    ],
  },
  cin: {
    key: 'cin',
    label: 'CIN',
    unit: 'J/kg',
    min: 0,
    max: 500,
    inputMode: 'absolute',
    description: 'Convective Inhibition; lower values generally favor storm initiation.',
    bands: [
      { max: 25, score: 90, label: 'Weak cap', interpretation: 'Minimal inhibition' },
      { max: 75, score: 70, label: 'Manageable cap', interpretation: 'Some inhibition present' },
      { max: 150, score: 40, label: 'Strong cap', interpretation: 'Inhibition may suppress storms' },
      { max: Number.POSITIVE_INFINITY, score: 15, label: 'Very strong cap', interpretation: 'Strongly suppressive inhibition' },
    ],
  },
  shear0to1: {
    key: 'shear0to1',
    label: '0-1 km Shear',
    unit: 'kt',
    min: 0,
    max: 80,
    description: 'Low-level wind shear, important for tornado potential.',
    bands: [
      { max: 10, score: 15, label: 'Weak', interpretation: 'Weak low-level shear' },
      { max: 20, score: 45, label: 'Moderate', interpretation: 'Moderate low-level shear' },
      { max: 30, score: 75, label: 'Strong', interpretation: 'Strong low-level shear' },
      { max: Number.POSITIVE_INFINITY, score: 95, label: 'Extreme', interpretation: 'Extreme low-level shear' },
    ],
  },
  shear0to6: {
    key: 'shear0to6',
    label: '0-6 km Shear',
    unit: 'kt',
    min: 0,
    max: 100,
    description: 'Deep-layer wind shear, supports storm organization.',
    bands: [
      { max: 20, score: 20, label: 'Weak', interpretation: 'Limited storm organization' },
      { max: 35, score: 50, label: 'Moderate', interpretation: 'Organized storms possible' },
      { max: 50, score: 80, label: 'Strong', interpretation: 'Strong supercell support' },
      { max: Number.POSITIVE_INFINITY, score: 95, label: 'Extreme', interpretation: 'Exceptional storm organization support' },
    ],
  },
  lclHeight: {
    key: 'lclHeight',
    label: 'LCL Height',
    unit: 'm AGL',
    min: 0,
    max: 3000,
    description: 'Lifted Condensation Level; lower values tend to favor tornado potential.',
    bands: [
      { max: 750, score: 95, label: 'Very low', interpretation: 'Highly favorable cloud base height' },
      { max: 1200, score: 75, label: 'Low', interpretation: 'Favorable cloud base height' },
      { max: 1800, score: 45, label: 'Moderate', interpretation: 'Marginal cloud base height' },
      { max: Number.POSITIVE_INFINITY, score: 20, label: 'High', interpretation: 'Unfavorable cloud base height' },
    ],
  },
  stp: {
    key: 'stp',
    label: 'STP',
    unit: 'index',
    min: 0,
    max: 15,
    description: 'Significant Tornado Parameter.',
    bands: [
      { max: 1, score: 20, label: 'Low', interpretation: 'Low significant tornado potential' },
      { max: 3, score: 65, label: 'Elevated', interpretation: 'Elevated tornado potential' },
      { max: 6, score: 85, label: 'High', interpretation: 'High significant tornado potential' },
      { max: Number.POSITIVE_INFINITY, score: 98, label: 'Extreme', interpretation: 'Extreme significant tornado potential' },
    ],
  },
  scp: {
    key: 'scp',
    label: 'SCP',
    unit: 'index',
    min: 0,
    max: 30,
    description: 'Supercell Composite Parameter.',
    bands: [
      { max: 1, score: 20, label: 'Low', interpretation: 'Low supercell support' },
      { max: 4, score: 55, label: 'Moderate', interpretation: 'Moderate supercell support' },
      { max: 10, score: 80, label: 'High', interpretation: 'Strong supercell support' },
      { max: Number.POSITIVE_INFINITY, score: 95, label: 'Extreme', interpretation: 'Extreme supercell support' },
    ],
  },
}

export const HAZARD_WEIGHTS: Record<HazardKey, HazardWeight[]> = {
  tornado: [
    { metric: 'stp', weight: 0.45 },
    { metric: 'shear0to1', weight: 0.35 },
    { metric: 'lclHeight', weight: 0.2 },
  ],
  hail: [
    { metric: 'cape', weight: 0.5 },
    { metric: 'shear0to6', weight: 0.3 },
    { metric: 'stp', weight: 0.2 },
  ],
  wind: [
    { metric: 'shear0to6', weight: 0.45 },
    { metric: 'cape', weight: 0.35 },
    { metric: 'cin', weight: 0.2 },
  ],
}
