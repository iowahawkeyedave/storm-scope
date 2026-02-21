import type { GlossaryTerm } from '../lib/types'

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'cape',
    term: 'CAPE',
    definition: 'Convective Available Potential Energy; a measure of atmospheric instability that can fuel stronger updrafts.',
    thresholds: {
      low: '< 500 J/kg',
      moderate: '500-2500 J/kg',
      high: '> 2500 J/kg',
    },
    relatedMetrics: ['cape'],
  },
  {
    id: 'cin',
    term: 'CIN',
    definition: 'Convective Inhibition; energy that suppresses parcels from rising freely and can delay storm initiation.',
    thresholds: {
      low: '< 25 J/kg',
      moderate: '25-150 J/kg',
      high: '> 150 J/kg',
    },
    relatedMetrics: ['cin'],
  },
  {
    id: 'shear-0-1km',
    term: '0-1 km Shear',
    definition: 'Wind speed/direction change in the lowest kilometer; critical for low-level storm rotation.',
    thresholds: {
      low: '< 10 kt',
      moderate: '10-30 kt',
      high: '> 30 kt',
    },
    relatedMetrics: ['shear0to1'],
  },
  {
    id: 'shear-0-6km',
    term: '0-6 km Shear',
    definition: 'Deep-layer shear controlling storm organization, longevity, and supercell potential.',
    thresholds: {
      low: '< 20 kt',
      moderate: '20-50 kt',
      high: '> 50 kt',
    },
    relatedMetrics: ['shear0to6'],
  },
  {
    id: 'lcl',
    term: 'LCL Height',
    definition: 'Lifted Condensation Level; lower cloud base heights are often more favorable for tornadoes.',
    thresholds: {
      low: '< 750 m',
      moderate: '750-1800 m',
      high: '> 1800 m',
    },
    relatedMetrics: ['lclHeight'],
  },
  {
    id: 'stp',
    term: 'STP',
    definition: 'Significant Tornado Parameter; combined index for environments supportive of significant tornadoes.',
    thresholds: {
      low: '< 1',
      moderate: '1-3',
      high: '> 3',
    },
    relatedMetrics: ['stp'],
  },
  {
    id: 'scp',
    term: 'SCP',
    definition: 'Supercell Composite Parameter; index estimating support for supercell thunderstorm structures.',
    thresholds: {
      low: '< 1',
      moderate: '1-10',
      high: '> 10',
    },
    relatedMetrics: ['scp'],
  },
  {
    id: 'supercell',
    term: 'Supercell',
    definition: 'A thunderstorm with a persistent rotating updraft (mesocyclone), often producing severe hazards.',
  },
  {
    id: 'mesocyclone',
    term: 'Mesocyclone',
    definition: 'A deep, rotating updraft within a storm, typically associated with supercells.',
  },
  {
    id: 'updraft',
    term: 'Updraft',
    definition: 'Rising air current inside a thunderstorm that transports heat and moisture upward.',
  },
  {
    id: 'downdraft',
    term: 'Downdraft',
    definition: 'Descending air within a storm that can transport momentum to the surface and create wind damage.',
  },
  {
    id: 'srh',
    term: 'Storm-Relative Helicity',
    definition: 'Measure of streamwise vorticity available to a storm; higher values support rotating updrafts.',
  },
  {
    id: 'hodograph',
    term: 'Hodograph',
    definition: 'Graph of wind vectors with height used to diagnose shear magnitude, curvature, and storm mode.',
  },
  {
    id: 'mlcape',
    term: 'MLCAPE',
    definition: 'Mixed-layer CAPE based on a representative low-level parcel, often more realistic than surface CAPE.',
  },
  {
    id: 'mucin',
    term: 'MUCIN',
    definition: 'Inhibition of the most unstable parcel; useful when elevated convection is present.',
  },
  {
    id: 'bulk-shear',
    term: 'Bulk Shear',
    definition: 'Vector wind difference through a layer, commonly used for supercell and organization diagnosis.',
  },
  {
    id: 'lapse-rate',
    term: 'Lapse Rate',
    definition: 'Temperature decrease with height; steeper lapse rates can support stronger instability and hail.',
  },
  {
    id: 'effective-inflow-layer',
    term: 'Effective Inflow Layer',
    definition: 'Layer of air parcels feeding a storm updraft and contributing to storm-relative helicity.',
  },
  {
    id: 'dcape',
    term: 'DCAPE',
    definition: 'Downdraft CAPE; proxy for potential intensity of downbursts and damaging wind events.',
  },
  {
    id: 'outflow-boundary',
    term: 'Outflow Boundary',
    definition: 'Boundary left by storm-cooled air that can focus low-level convergence and new convection.',
  },
  {
    id: 'dryline',
    term: 'Dryline',
    definition: 'Boundary separating moist and dry air masses; common trigger for Plains severe storms.',
  },
  {
    id: 'warm-front',
    term: 'Warm Front',
    definition: 'Advancing warm air boundary that often enhances low-level shear and severe potential nearby.',
  },
  {
    id: 'cap',
    term: 'Cap',
    definition: 'Warm layer aloft limiting convection early; if breached, can lead to explosive storm development.',
  },
]
