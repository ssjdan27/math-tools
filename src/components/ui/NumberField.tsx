interface NumberFieldProps {
  label: string
  value: number
  step?: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

export const NumberField = ({ label, value, step = 1, min, max, onChange }: NumberFieldProps) => {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-slate-700">{label}</span>
      <input
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  )
}
