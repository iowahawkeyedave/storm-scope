import { useState, type ChangeEvent } from 'react'

interface Props {
  label: string
  name: string
  unit: string
  min?: number
  max?: number
  placeholder?: string
  onChange: (value: number | undefined) => void
}

export function MetricInput({ label, name, unit, min = 0, max = 9999, placeholder, onChange }: Props) {
  const [error, setError] = useState<string | null>(null)
  const errorId = `${name}-error`

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    if (raw.trim() === '') {
      setError(null)
      onChange(undefined)
      return
    }

    const value = Number(raw)
    if (Number.isNaN(value) || !Number.isFinite(value)) {
      setError('Please enter a valid number.')
      onChange(undefined)
      return
    }

    if (value < min || value > max) {
      setError(`Value must be between ${min} and ${max}.`)
      onChange(undefined)
      return
    }

    setError(null)
    onChange(value)
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-slate-800">
        {label} <span className="text-slate-500">({unit})</span>
      </label>
      <input
        id={name}
        name={name}
        type="number"
        min={min}
        max={max}
        step="any"
        placeholder={placeholder}
        onChange={handleChange}
        aria-label={label}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-slate-500"
      />
      <p id={errorId} className="min-h-5 text-xs text-red-600" role={error ? 'alert' : undefined}>
        {error ?? ' '}
      </p>
    </div>
  )
}
