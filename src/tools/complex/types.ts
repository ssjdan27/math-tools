import type { ComplexNumber } from '../../lib/complex/complex'

export type TransformKey = 'identity' | 'square' | 'cube' | 'conjugate' | 'exp'

export interface ComplexTransform {
  key: TransformKey
  label: string
  apply: (input: ComplexNumber) => ComplexNumber
}
