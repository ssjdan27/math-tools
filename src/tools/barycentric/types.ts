import type { Point2D } from '../../lib/geometry/point'

export interface TriangleVertices {
  a: Point2D
  b: Point2D
  c: Point2D
}

export interface BarycentricCoordinates {
  alpha: number
  beta: number
  gamma: number
}
