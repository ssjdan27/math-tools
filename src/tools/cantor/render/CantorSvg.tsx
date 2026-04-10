import type { CantorSegment } from '../types'

interface CantorSvgProps {
  segments: CantorSegment[]
  width: number
  rowHeight: number
  strokeWidth: number
}

export const CantorSvg = ({ segments, width, rowHeight, strokeWidth }: CantorSvgProps) => {
  const maxLevel = Math.max(...segments.map((segment) => segment.level), 0)
  const height = (maxLevel + 1) * rowHeight + 20

  return (
    <svg
      aria-label="Cantor set visualization"
      className="h-auto w-full rounded-lg border border-slate-200 bg-white"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
    >
      {segments.map((segment, index) => {
        const y = 10 + segment.level * rowHeight
        return (
          <line
            key={`${segment.level}-${segment.x1}-${segment.x2}-${index}`}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            x1={segment.x1 * width}
            x2={segment.x2 * width}
            y1={y}
            y2={y}
          />
        )
      })}
    </svg>
  )
}
