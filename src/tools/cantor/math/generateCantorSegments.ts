import type { CantorSegment } from '../types'

const buildSegments = (
  x1: number,
  x2: number,
  level: number,
  maxLevel: number,
  target: CantorSegment[],
) => {
  target.push({ x1, x2, level })

  if (level >= maxLevel) {
    return
  }

  const third = (x2 - x1) / 3
  buildSegments(x1, x1 + third, level + 1, maxLevel, target)
  buildSegments(x2 - third, x2, level + 1, maxLevel, target)
}

export const generateCantorSegments = (depth: number): CantorSegment[] => {
  const segments: CantorSegment[] = []
  buildSegments(0, 1, 0, depth, segments)
  return segments
}
