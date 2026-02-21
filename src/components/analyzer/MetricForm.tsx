import { useState, type FormEvent } from 'react'
import { METRIC_DEFINITIONS } from '../../data/metrics'
import { analyzeSetup } from '../../lib/analyzer'
import type { AnalysisResult as AnalysisResultData, MetricInput as MetricInputData, MetricKey } from '../../lib/types'
import { AnalysisResult } from './AnalysisResult'
import { MetricInput } from './MetricInput'

const METRIC_ORDER: MetricKey[] = ['cape', 'cin', 'shear0to1', 'shear0to6', 'lclHeight', 'stp', 'scp']

export function MetricForm() {
  const [values, setValues] = useState<Partial<MetricInputData>>({})
  const [result, setResult] = useState<AnalysisResultData | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const updateMetric = (metric: MetricKey, value: number | undefined) => {
    setValues((prev) => {
      const next = { ...prev }
      if (value === undefined) {
        delete next[metric]
      } else {
        next[metric] = value
      }
      return next
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAnalyzing(true)
    try {
      const nextResult = analyzeSetup(values)
      setResult(nextResult)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <section className="space-y-5" aria-live="polite">
      <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5" aria-label="Storm setup metric form">
        <h2 className="text-xl font-semibold text-slate-900">Storm Setup Analyzer</h2>
        <p className="mt-1 text-sm text-slate-600">Enter one or more environmental metrics, then run analysis.</p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {METRIC_ORDER.map((key) => {
            const metric = METRIC_DEFINITIONS[key]
            return (
              <MetricInput
                key={metric.key}
                label={metric.label}
                name={metric.key}
                unit={metric.unit}
                min={metric.min}
                max={metric.max}
                placeholder={`${metric.min} - ${metric.max}`}
                onChange={(value) => updateMetric(metric.key, value)}
              />
            )
          })}
        </div>

        <button
          type="submit"
          disabled={isAnalyzing}
          aria-busy={isAnalyzing ? 'true' : 'false'}
          className="mt-4 inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Setup'}
        </button>
      </form>

      <AnalysisResult result={result} />
    </section>
  )
}
