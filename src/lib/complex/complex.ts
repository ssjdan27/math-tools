export interface ComplexNumber {
  re: number
  im: number
}

export const complex = (re: number, im: number): ComplexNumber => ({ re, im })

export const multiply = (a: ComplexNumber, b: ComplexNumber): ComplexNumber => ({
  re: a.re * b.re - a.im * b.im,
  im: a.re * b.im + a.im * b.re,
})

export const power = (z: ComplexNumber, exponent: number): ComplexNumber => {
  if (exponent === 0) {
    return complex(1, 0)
  }

  let result = complex(z.re, z.im)
  for (let index = 1; index < exponent; index += 1) {
    result = multiply(result, z)
  }

  return result
}

export const conjugate = (z: ComplexNumber): ComplexNumber => ({
  re: z.re,
  im: -z.im,
})

export const expComplex = (z: ComplexNumber): ComplexNumber => {
  const scale = Math.exp(z.re)
  return {
    re: scale * Math.cos(z.im),
    im: scale * Math.sin(z.im),
  }
}
