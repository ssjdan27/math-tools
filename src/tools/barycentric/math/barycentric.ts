import type { Point2D } from '../../../lib/geometry/point'
import type { BarycentricCoordinates, TriangleVertices } from '../types'

export const getBarycentricCoordinates = (
  point: Point2D,
  triangle: TriangleVertices,
): BarycentricCoordinates => {
  const { a, b, c } = triangle

  const denominator = (b.y - c.y) * (a.x - c.x) + (c.x - b.x) * (a.y - c.y)

  if (Math.abs(denominator) < 1e-9) {
    return { alpha: NaN, beta: NaN, gamma: NaN }
  }

  const alpha = ((b.y - c.y) * (point.x - c.x) + (c.x - b.x) * (point.y - c.y)) / denominator
  const beta = ((c.y - a.y) * (point.x - c.x) + (a.x - c.x) * (point.y - c.y)) / denominator
  const gamma = 1 - alpha - beta

  return { alpha, beta, gamma }
}

export const isInsideTriangle = (coords: BarycentricCoordinates, tolerance = 1e-6) => {
  return (
    coords.alpha >= -tolerance &&
    coords.beta >= -tolerance &&
    coords.gamma >= -tolerance &&
    coords.alpha <= 1 + tolerance &&
    coords.beta <= 1 + tolerance &&
    coords.gamma <= 1 + tolerance
  )
}
