interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  label: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export const SelectField = ({ label, value, options, onChange }: SelectFieldProps) => {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-slate-700">{label}</span>
      <select
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
