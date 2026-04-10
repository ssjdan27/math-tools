import { ControlPanel } from '../../../components/ui/ControlPanel'
import { SliderField } from '../../../components/ui/SliderField'

interface CantorControlsProps {
  depth: number
  rowHeight: number
  strokeWidth: number
  onDepthChange: (value: number) => void
  onRowHeightChange: (value: number) => void
  onStrokeWidthChange: (value: number) => void
}

export const CantorControls = ({
  depth,
  rowHeight,
  strokeWidth,
  onDepthChange,
  onRowHeightChange,
  onStrokeWidthChange,
}: CantorControlsProps) => {
  return (
    <ControlPanel title="Cantor Controls">
      <SliderField label="Recursion depth" max={8} min={0} onChange={onDepthChange} value={depth} />
      <SliderField
        label="Vertical spacing"
        max={60}
        min={18}
        onChange={onRowHeightChange}
        value={rowHeight}
      />
      <SliderField
        label="Stroke width"
        max={12}
        min={2}
        onChange={onStrokeWidthChange}
        value={strokeWidth}
      />
    </ControlPanel>
  )
}
