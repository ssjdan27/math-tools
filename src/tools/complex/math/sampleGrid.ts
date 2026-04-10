import type { ComplexNumber } from '../../../lib/complex/complex'

export const createSampleGrid = (density: number, extent: number): ComplexNumber[] => {
  const points: ComplexNumber[] = []
  const step = (2 * extent) / density

  for (let row = 0; row <= density; row += 1) {
    const y = -extent + row * step
    for (let column = 0; column <= density; column += 1) {
      const x = -extent + column * step
      points.push({ re: x, im: y })
    }
  }

  return points
}
