import type { PropsWithChildren } from 'react'

interface ControlPanelProps extends PropsWithChildren {
  title: string
}

export const ControlPanel = ({ title, children }: ControlPanelProps) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}
