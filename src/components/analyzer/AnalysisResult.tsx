import type { AnalysisResult as AnalysisResultData, HazardResult } from '../../lib/types'
import { VerdictCard } from './VerdictCard'

interface Props {
  result: AnalysisResultData | null
}

function ratingStyles(rating: number): string {
  if (rating >= 76) return 'bg-red-50 border-red-200 text-red-900'
  if (rating >= 51) return 'bg-orange-50 border-orange-200 text-orange-900'
  if (rating >= 26) return 'bg-yellow-50 border-yellow-200 text-yellow-900'
  return 'bg-green-50 border-green-200 text-green-900'
}

function HazardPanel({ title, hazard }: { title: string; hazard: HazardResult }) {
  return (
    <article className={`rounded-lg border p-4 ${ratingStyles(hazard.rating)}`}>
      <div className="flex items-end justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-medium">{hazard.label}</p>
      </div>
      <p className="mt-1 text-2xl font-bold">{hazard.rating}/100</p>
      <h4 className="mt-3 text-xs font-semibold uppercase tracking-wider">Top Factors</h4>
      {hazard.factors.length > 0 ? (
        <ul className="mt-2 space-y-1 text-sm">
          {hazard.factors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm">No contributing factors yet.</p>
      )}
    </article>
  )
}

export function AnalysisResult({ result }: Props) {
  if (!result) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-600" aria-live="polite">
        Submit metrics to view tornado, hail, and wind analysis.
      </section>
    )
  }

  return (
    <section className="space-y-4" aria-live="polite" aria-label="Analysis results">
      <VerdictCard severity={result.overall} summary={result.summary} />
      <div className="grid gap-3 md:grid-cols-3">
        <HazardPanel title="Tornado" hazard={result.tornado} />
        <HazardPanel title="Hail" hazard={result.hail} />
        <HazardPanel title="Wind" hazard={result.wind} />
      </div>
    </section>
  )
}
