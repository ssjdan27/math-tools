import { useMemo, useState } from 'react'
import { PageContainer } from '../../components/ui/PageContainer'
import { clamp } from '../../lib/math/numbers'
import type { Point2D } from '../../lib/geometry/point'
import { BarycentricReadout } from './components/BarycentricReadout'
import { getBarycentricCoordinates, isInsideTriangle } from './math/barycentric'
import { BarycentricSvg } from './render/BarycentricSvg'
import type { TriangleVertices } from './types'

type DragTarget = 'point' | 'a' | 'b' | 'c' | null

const boundedPoint = (point: Point2D): Point2D => ({
  x: clamp(point.x, 0, 700),
  y: clamp(point.y, 0, 500),
})

export const BarycentricToolPage = () => {
  const [triangle, setTriangle] = useState<TriangleVertices>({
    a: { x: 120, y: 400 },
    b: { x: 350, y: 90 },
    c: { x: 590, y: 390 },
  })
  const [point, setPoint] = useState<Point2D>({ x: 330, y: 260 })
  const [dragTarget, setDragTarget] = useState<DragTarget>(null)

  const coordinates = useMemo(() => getBarycentricCoordinates(point, triangle), [point, triangle])
  const inside = useMemo(() => isInsideTriangle(coordinates), [coordinates])

  const handleDragMove = (next: Point2D) => {
    if (!dragTarget) {
      return
    }

    const bounded = boundedPoint(next)

    if (dragTarget === 'point') {
      setPoint(bounded)
      return
    }

    setTriangle((current) => ({
      ...current,
      [dragTarget]: bounded,
    }))
  }

  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-slate-900">Barycentric Coordinates</h1>
      <p className="mt-2 text-sm text-slate-600">
        Drag the point or any triangle vertex. The barycentric coordinates update live relative to
        vertices A, B, and C.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <BarycentricSvg
          onDragEnd={() => setDragTarget(null)}
          onDragMove={handleDragMove}
          onDragStart={setDragTarget}
          point={point}
          triangle={triangle}
        />
        <BarycentricReadout coordinates={coordinates} inside={inside} />
      </div>
    </PageContainer>
  )
}
