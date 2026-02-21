import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallbackTitle?: string
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error('React component render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900"
          role="alert"
          aria-live="assertive"
        >
          <h2 className="text-base font-semibold">{this.props.fallbackTitle ?? 'Something went wrong.'}</h2>
          <p className="mt-1">Please refresh the page and try again.</p>
        </section>
      )
    }

    return this.props.children
  }
}
