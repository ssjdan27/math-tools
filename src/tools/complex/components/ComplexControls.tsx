import { ControlPanel } from '../../../components/ui/ControlPanel'
import { SelectField } from '../../../components/ui/SelectField'
import { SliderField } from '../../../components/ui/SliderField'
import type { TransformKey } from '../types'
import { complexTransformations } from '../math/transformations'

interface ComplexControlsProps {
  transform: TransformKey
  zoom: number
  density: number
  onTransformChange: (value: TransformKey) => void
  onZoomChange: (value: number) => void
  onDensityChange: (value: number) => void
}

export const ComplexControls = ({
  transform,
  zoom,
  density,
  onTransformChange,
  onZoomChange,
  onDensityChange,
}: ComplexControlsProps) => {
  return (
    <ControlPanel title="Transformation Controls">
      <SelectField
        label="Transformation"
        onChange={(value) => onTransformChange(value as TransformKey)}
        options={complexTransformations.map((option) => ({
          label: option.label,
          value: option.key,
        }))}
        value={transform}
      />
      <SliderField label="Zoom" max={140} min={30} onChange={onZoomChange} value={zoom} />
      <SliderField
        label="Grid density"
        max={42}
        min={8}
        onChange={onDensityChange}
        value={density}
      />
    </ControlPanel>
  )
}
