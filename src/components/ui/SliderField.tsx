interface SliderFieldProps {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
}

export const SliderField = ({ label, value, min, max, step = 1, onChange }: SliderFieldProps) => {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between text-sm text-slate-700">
        <span>{label}</span>
        <span className="font-medium text-slate-900">{value}</span>
      </div>
      <input
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  )
}
