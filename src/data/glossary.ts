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
    id: 'mlcape',
    term: 'MLCAPE',
    definition: 'Mixed-layer CAPE based on a representative low-level parcel, often more useful than surface CAPE for hail and storm mode analysis.',
    thresholds: {
      low: '< 500 J/kg',
      moderate: '500-3000 J/kg',
      high: '> 3000 J/kg',
    },
    relatedMetrics: ['mlcape'],
  },
  {
    id: 'mucape',
    term: 'MUCAPE',
    definition: 'Most-unstable CAPE derived from the most buoyant parcel in the profile, useful when elevated instability is present.',
    thresholds: {
      low: '< 750 J/kg',
      moderate: '750-3500 J/kg',
      high: '> 3500 J/kg',
    },
    relatedMetrics: ['mucape'],
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
    term: 'Effective STP',
    definition: 'Effective-layer Significant Tornado Parameter; combined index for environments supportive of significant tornadoes.',
    thresholds: {
      low: '< 1',
      moderate: '1-3',
      high: '> 3',
    },
    relatedMetrics: ['stp'],
  },
  {
    id: 'stp-fixed',
    term: 'Fixed-Layer STP',
    definition: 'Fixed-layer Significant Tornado Parameter; similar to STP but computed from a fixed parcel/layer assumption.',
    thresholds: {
      low: '< 1',
      moderate: '1-3',
      high: '> 3',
    },
    relatedMetrics: ['stpFixed'],
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
    thresholds: {
      low: '< 100 m²/s²',
      moderate: '100-300 m²/s²',
      high: '> 300 m²/s²',
    },
    relatedMetrics: ['srh0to1', 'srh0to3'],
  },
  {
    id: 'ehi',
    term: 'EHI',
    definition: 'Energy-Helicity Index; composite of buoyancy and helicity often used for tornado-supportive environments.',
    thresholds: {
      low: '< 1',
      moderate: '1-4',
      high: '> 4',
    },
    relatedMetrics: ['ehi'],
  },
  {
    id: 'hodograph',
    term: 'Hodograph',
    definition: 'Graph of wind vectors with height used to diagnose shear magnitude, curvature, and storm mode.',
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
    relatedMetrics: ['shear0to1', 'shear0to6', 'effectiveShear'],
  },
  {
    id: 'effective-bulk-shear',
    term: 'Effective Bulk Shear',
    definition: 'Bulk shear measured through the effective inflow layer, often more representative of the storm-feeding layer than fixed-depth shear.',
    thresholds: {
      low: '< 25 kt',
      moderate: '25-55 kt',
      high: '> 55 kt',
    },
    relatedMetrics: ['effectiveShear'],
  },
  {
    id: 'freezing-level',
    term: 'Freezing Level',
    definition: 'Approximate height of the 0°C isotherm; lower freezing levels generally favor large hail reaching the ground.',
    thresholds: {
      low: '< 2000 m',
      moderate: '2000-3800 m',
      high: '> 3800 m',
    },
    relatedMetrics: ['freezingLevel'],
  },
  {
    id: 'lapse-rate',
    term: 'Lapse Rate',
    definition: 'Temperature decrease with height; steeper lapse rates can support stronger instability and hail.',
    thresholds: {
      low: '< 6.0 °C/km',
      moderate: '6.0-8.0 °C/km',
      high: '> 8.0 °C/km',
    },
    relatedMetrics: ['lapseRate700to500'],
  },
  {
    id: 'sfc-3km-lapse-rate',
    term: 'Sfc-3 km Lapse Rate',
    definition: 'Low-level lapse rate through the boundary layer; steeper values favor stronger downdrafts and damaging wind potential.',
    thresholds: {
      low: '< 6.0 °C/km',
      moderate: '6.0-8.5 °C/km',
      high: '> 8.5 °C/km',
    },
    relatedMetrics: ['lapseRateSfcTo3km'],
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
    thresholds: {
      low: '< 500 J/kg',
      moderate: '500-1500 J/kg',
      high: '> 1500 J/kg',
    },
    relatedMetrics: ['dcape'],
  },
  {
    id: '850-500-wind',
    term: '850-500 mb Wind',
    definition: 'Layer-mean wind between 850 and 500 mb; stronger flow increases the momentum available for severe surface gusts.',
    thresholds: {
      low: '< 20 kt',
      moderate: '20-50 kt',
      high: '> 50 kt',
    },
    relatedMetrics: ['wind850to500'],
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
