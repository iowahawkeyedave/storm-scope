# Storm Scope — Coding Standards

## File Organization

- **Components:** `src/components/{feature}/ComponentName.tsx`
- **Data:** `src/data/{feature}.ts`
- **Utils:** `src/lib/{feature}.ts`
- **Types:** `src/lib/types.ts`
- **Pages:** `src/pages/{route}.astro`

## Naming Conventions

- **Components:** PascalCase (MetricInput, VerdictCard)
- **Hooks:** camelCase with 'use' prefix (not needed for v1)
- **Utils:** camelCase (analyzeSetup, getThresholdLabel)
- **Files:** match default export name
- **CSS Classes:** kebab-case (use Tailwind utilities)

## Component Structure

```tsx
// MetricInput.tsx example
import { useState } from 'react'

interface Props {
  label: string
  name: string
  unit: string
  min?: number
  max?: number
  placeholder?: string
  onChange: (value: number) => void
}

export function MetricInput({ label, name, unit, min = 0, max = 9999, placeholder, onChange }: Props) {
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (isNaN(value)) {
      setError('Please enter a valid number')
      return
    }
    if (value < min || value > max) {
      setError(`Value must be between ${min} and ${max}`)
      return
    }
    setError(null)
    onChange(value)
  }

  return (
    <div class="flex flex-col gap-1">
      <label for={name} class="text-sm font-medium">
        {label} <span class="text-gray-500">({unit})</span>
      </label>
      <input
        id={name}
        type="number"
        class="border rounded px-3 py-2"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <span class="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
```

## Tailwind Usage

- Use utility classes directly in JSX
- No custom CSS unless absolutely necessary
- Keep layouts simple: flexbox + grid
- Mobile-first: default styles work on mobile, add `md:` for larger screens

## Analysis Engine Rules

- Always return a valid AnalysisResult, never throw
- Log to console for debugging, but don't expose to user
- Thresholds in `data/metrics.ts` — don't hardcode in components

## Testing Checklist

Before marking any component complete:
- [ ] Renders without errors
- [ ] Props are typed correctly
- [ ] Handles empty/invalid inputs gracefully
- [ ] Works on mobile (320px width minimum)
- [ ] No console warnings

## Astro-Specific

- Use `client:load` on React components that need interactivity
- Keep static parts in .astro files
- Put client-side state in React, not Astro
- Use Astro's built-in props for page data

## Accessibility

- All inputs have `<label for="...">`
- Use semantic HTML (`<main>`, `<nav>`, `<section>`)
- Don't rely solely on color to convey meaning
- Test with keyboard only (Tab through all inputs)
