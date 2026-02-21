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
      cin: 20,
      shear0to1: 35,
      shear0to6: 55,
      lclHeight: 650,
      stp: 5,
      scp: 14,
    })

    expect(result.overall).toBe('high')
    expect(result.tornado.rating).toBeGreaterThanOrEqual(85)
    expect(result.tornado.label).toBe('High')
  })

  it('keeps overall low for weak severe setups', () => {
    const result = analyzeSetup({
      cape: 250,
      cin: 220,
      shear0to1: 8,
      shear0to6: 15,
      lclHeight: 2200,
      stp: 0.2,
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
      cin: -40,
      shear0to1: 18,
      shear0to6: 40,
      lclHeight: 1400,
      stp: 1.8,
      scp: 6,
    })

    expect(result.wind.rating).toBeGreaterThan(0)
    expect(result.summary).toContain('Overall')
  })

  it('ignores invalid values without throwing', () => {
    const result = analyzeSetup({
      cape: Number.NaN,
      cin: Number.POSITIVE_INFINITY,
      shear0to1: 25,
    })

    expect(result.tornado.rating).toBeGreaterThan(0)
    expect(result.overall).not.toBeUndefined()
  })
})
