import type { PointerEvent } from 'react'
import type { Point2D } from '../../../lib/geometry/point'
import type { TriangleVertices } from '../types'

type DragTarget = 'point' | 'a' | 'b' | 'c' | null

interface BarycentricSvgProps {
  triangle: TriangleVertices
  point: Point2D
  onDragStart: (target: Exclude<DragTarget, null>) => void
  onDragMove: (point: Point2D) => void
  onDragEnd: () => void
}

const circleClass = 'cursor-grab active:cursor-grabbing transition hover:stroke-slate-900'

export const BarycentricSvg = ({
  triangle,
  point,
  onDragStart,
  onDragMove,
  onDragEnd,
}: BarycentricSvgProps) => {
  const toLocalPoint = (event: PointerEvent<SVGSVGElement>): Point2D => {
    const rect = event.currentTarget.getBoundingClientRect()
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  return (
    <svg
      className="h-auto w-full rounded-xl border border-slate-200 bg-white"
      height={500}
      onPointerLeave={onDragEnd}
      onPointerMove={(event) => onDragMove(toLocalPoint(event))}
      onPointerUp={onDragEnd}
      viewBox="0 0 700 500"
      width={700}
    >
      <polygon
        fill="#f0f9ff"
        points={`${triangle.a.x},${triangle.a.y} ${triangle.b.x},${triangle.b.y} ${triangle.c.x},${triangle.c.y}`}
        stroke="#0284c7"
        strokeWidth={2}
      />

      <line
        stroke="#cbd5e1"
        strokeWidth={1.5}
        x1={point.x}
        x2={triangle.a.x}
        y1={point.y}
        y2={triangle.a.y}
      />
      <line
        stroke="#cbd5e1"
        strokeWidth={1.5}
        x1={point.x}
        x2={triangle.b.x}
        y1={point.y}
        y2={triangle.b.y}
      />
      <line
        stroke="#cbd5e1"
        strokeWidth={1.5}
        x1={point.x}
        x2={triangle.c.x}
        y1={point.y}
        y2={triangle.c.y}
      />

      <circle
        className={circleClass}
        cx={triangle.a.x}
        cy={triangle.a.y}
        fill="#bae6fd"
        onPointerDown={() => onDragStart('a')}
        r={10}
        stroke="#0369a1"
        strokeWidth={2}
      />
      <circle
        className={circleClass}
        cx={triangle.b.x}
        cy={triangle.b.y}
        fill="#bae6fd"
        onPointerDown={() => onDragStart('b')}
        r={10}
        stroke="#0369a1"
        strokeWidth={2}
      />
      <circle
        className={circleClass}
        cx={triangle.c.x}
        cy={triangle.c.y}
        fill="#bae6fd"
        onPointerDown={() => onDragStart('c')}
        r={10}
        stroke="#0369a1"
        strokeWidth={2}
      />

      <circle
        className={circleClass}
        cx={point.x}
        cy={point.y}
        fill="#0ea5e9"
        onPointerDown={() => onDragStart('point')}
        r={9}
        stroke="#0f172a"
        strokeWidth={2}
      />
    </svg>
  )
}
