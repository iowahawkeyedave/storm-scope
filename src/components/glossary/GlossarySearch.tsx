import { useMemo, useState } from 'react'
import type { GlossaryTerm } from '../../lib/types'

interface Props {
  terms: GlossaryTerm[]
}

export function GlossarySearch({ terms }: Props) {
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()
  const filteredTerms = useMemo(() => {
    if (!normalizedQuery) {
      return terms
    }

    return terms.filter((term) => {
      const searchableText = `${term.term} ${term.definition}`.toLowerCase()
      return searchableText.includes(normalizedQuery)
    })
  }, [normalizedQuery, terms])

  return (
    <section className="space-y-4">
      <label htmlFor="glossary-search" className="block text-sm font-medium text-slate-900">
        Search Terms
      </label>
      <input
        id="glossary-search"
        name="glossary-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by term or definition..."
        aria-label="Search glossary terms"
        aria-controls="glossary-results"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
      />

      <p className="text-sm text-slate-700" role="status" aria-live="polite">
        Showing {filteredTerms.length} of {terms.length} terms
      </p>

      <div id="glossary-results" className="grid gap-3" aria-live="polite">
        {filteredTerms.map((term) => (
          <article key={term.id} className="rounded-lg border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-slate-900">{term.term}</h2>
            <p className="mt-1 text-sm text-slate-700">{term.definition}</p>
            {term.thresholds && (
              <dl className="mt-3 grid gap-1 text-sm text-slate-700 md:grid-cols-3">
                <div>
                  <dt className="font-semibold text-slate-900">Low</dt>
                  <dd>{term.thresholds.low}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Moderate</dt>
                  <dd>{term.thresholds.moderate}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">High</dt>
                  <dd>{term.thresholds.high}</dd>
                </div>
              </dl>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
