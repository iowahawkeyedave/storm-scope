import { describe, expect, it } from 'vitest'

import { analyzeSetup } from './analyzer'

describe('analyzeSetup', () => {
  it('returns a safe empty result when no valid metrics are provided', () => {
    const result = analyzeSetup({})

    expect(result.overall).toBe('none')
    expect(result.tornado.rating).toBe(0)
    expect(result.hail.rating).toBe(0)
    expect(result.wind.rating).toBe(0)
    expect(result.summary).toContain('Enter at least one valid metric')
  })

  it('identifies a high-end tornado setup', () => {
    const result = analyzeSetup({
      cape: 3200,
      mlcape: 2800,
      mucape: 3400,
      cin: 20,
      shear0to1: 35,
      srh0to1: 320,
      srh0to3: 420,
      shear0to6: 55,
      effectiveShear: 55,
      lclHeight: 650,
      lapseRate700to500: 7.9,
      lapseRateSfcTo3km: 8.7,
      freezingLevel: 2300,
      dcape: 1250,
      wind850to500: 48,
      ehi: 4.2,
      stp: 5,
      stpFixed: 4.5,
      scp: 14,
    })

    expect(result.overall).toBe('high')
    expect(result.tornado.rating).toBeGreaterThanOrEqual(85)
    expect(result.tornado.label).toBe('High')
  })

  it('keeps overall low for weak severe setups', () => {
    const result = analyzeSetup({
      cape: 250,
      mlcape: 180,
      mucape: 300,
      cin: 220,
      shear0to1: 8,
      srh0to1: 45,
      srh0to3: 90,
      shear0to6: 15,
      effectiveShear: 18,
      lclHeight: 2200,
      lapseRate700to500: 5.6,
      lapseRateSfcTo3km: 5.8,
      freezingLevel: 4200,
      dcape: 250,
      wind850to500: 16,
      ehi: 0.3,
      stp: 0.2,
      stpFixed: 0.1,
      scp: 0.4,
    })

    expect(result.overall).toBe('none')
    expect(result.tornado.rating).toBeLessThanOrEqual(25)
    expect(result.hail.rating).toBeLessThanOrEqual(25)
    expect(result.wind.rating).toBeLessThanOrEqual(25)
  })

  it('handles CIN provided as a negative value', () => {
    const result = analyzeSetup({
      cape: 1800,
      mlcape: 1600,
      mucape: 2200,
      cin: -40,
      shear0to1: 18,
      srh0to1: 160,
      srh0to3: 260,
      shear0to6: 40,
      effectiveShear: 42,
      lclHeight: 1400,
      lapseRate700to500: 7.1,
      lapseRateSfcTo3km: 8.1,
      freezingLevel: 2900,
      dcape: 1400,
      wind850to500: 42,
      ehi: 1.7,
      stp: 1.8,
      stpFixed: 1.1,
      scp: 6,
    })

    expect(result.wind.rating).toBeGreaterThan(0)
    expect(result.summary).toContain('Overall')
  })

  it('ignores invalid values without throwing', () => {
    const result = analyzeSetup({
      cape: Number.NaN,
      mlcape: 2100,
      cin: Number.POSITIVE_INFINITY,
      shear0to1: 25,
      lapseRate700to500: 7.4,
      dcape: 900,
      srh0to1: 220,
      stpFixed: Number.NaN,
    })

    expect(result.tornado.rating).toBeGreaterThan(0)
    expect(result.overall).not.toBeUndefined()
  })

  it('can produce an elevated tornado signal from tornado-specific metrics alone', () => {
    const result = analyzeSetup({
      srh0to1: 275,
      srh0to3: 390,
      effectiveShear: 48,
      lclHeight: 850,
      ehi: 2.8,
      stp: 3.4,
      stpFixed: 2.5,
    })

    expect(result.tornado.rating).toBeGreaterThanOrEqual(70)
    expect(result.tornado.label === 'Elevated' || result.tornado.label === 'High').toBe(true)
    expect(result.summary).toContain('Primary concern: tornado')
  })

  it('can produce a high hail signal from hail-specific metrics', () => {
    const result = analyzeSetup({
      mlcape: 3200,
      mucape: 4100,
      shear0to6: 52,
      lapseRate700to500: 8.4,
      freezingLevel: 1900,
      scp: 8,
    })

    expect(result.hail.rating).toBeGreaterThanOrEqual(80)
    expect(result.hail.label).toBe('High')
    expect(result.summary).toContain('Primary concern: hail')
  })

  it('can produce a high wind signal from wind-specific metrics', () => {
    const result = analyzeSetup({
      dcape: 1650,
      lapseRateSfcTo3km: 8.8,
      wind850to500: 54,
      shear0to6: 38,
      cape: 2400,
      cin: 35,
    })

    expect(result.wind.rating).toBeGreaterThanOrEqual(80)
    expect(result.wind.label).toBe('High')
    expect(result.summary).toContain('Primary concern: wind')
  })
})
