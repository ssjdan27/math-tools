import { conjugate, expComplex, power, type ComplexNumber } from '../../../lib/complex/complex'
import type { ComplexTransform } from '../types'

export const complexTransformations: ComplexTransform[] = [
  {
    key: 'identity',
    label: 'Identity (z)',
    apply: (input) => input,
  },
  {
    key: 'square',
    label: 'Square (z^2)',
    apply: (input) => power(input, 2),
  },
  {
    key: 'cube',
    label: 'Cube (z^3)',
    apply: (input) => power(input, 3),
  },
  {
    key: 'conjugate',
    label: 'Conjugate (z̄)',
    apply: (input) => conjugate(input),
  },
  {
    key: 'exp',
    label: 'Exponential (e^z)',
    apply: (input) => expComplex(input),
  },
]

export const getTransformation = (key: string) => {
  return (
    complexTransformations.find((transformation) => transformation.key === key) ??
    complexTransformations[0]
  )
}

export const applyTransformation = (
  points: ComplexNumber[],
  transform: (input: ComplexNumber) => ComplexNumber,
) => {
  return points.map((point) => transform(point))
}
