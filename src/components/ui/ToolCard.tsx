import { Link } from 'react-router-dom'
import type { ToolMetadata } from '../../content/toolMetadata'

interface ToolCardProps {
  tool: ToolMetadata
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Link
      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow"
      to={tool.route}
    >
      <h2 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700">{tool.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool.description}</p>
      <p className="mt-4 text-sm font-medium text-sky-700">Open tool</p>
    </Link>
  )
}
