import type { OverallSeverity } from '../../lib/types'

interface Props {
  severity: OverallSeverity
  summary: string
}

const severityStyles: Record<OverallSeverity, string> = {
  none: 'border-green-200 bg-green-50 text-green-900',
  slight: 'border-yellow-200 bg-yellow-50 text-yellow-900',
  moderate: 'border-orange-200 bg-orange-50 text-orange-900',
  high: 'border-red-200 bg-red-50 text-red-900',
}

const severityLabels: Record<OverallSeverity, string> = {
  none: 'None',
  slight: 'Slight',
  moderate: 'Moderate',
  high: 'High',
}

export function VerdictCard({ severity, summary }: Props) {
  return (
    <section className={`rounded-lg border p-4 ${severityStyles[severity]}`} aria-live="polite">
      <p className="text-xs font-semibold uppercase tracking-wider">Overall Severity</p>
      <h2 className="mt-1 text-2xl font-bold">{severityLabels[severity]}</h2>
      <p className="mt-2 text-sm">{summary}</p>
    </section>
  )
}
