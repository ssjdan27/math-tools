export const formatNumber = (value: number, digits = 3) => {
  if (!Number.isFinite(value)) {
    return 'NaN'
  }

  return value.toFixed(digits)
}
