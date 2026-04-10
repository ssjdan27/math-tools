import { useMemo, useState } from 'react'
import { PageContainer } from '../../components/ui/PageContainer'
import { generateCantorSegments } from './math/generateCantorSegments'
import { CantorControls } from './components/CantorControls'
import { CantorSvg } from './render/CantorSvg'

export const CantorToolPage = () => {
  const [depth, setDepth] = useState(5)
  const [rowHeight, setRowHeight] = useState(30)
  const [strokeWidth, setStrokeWidth] = useState(6)

  const segments = useMemo(() => generateCantorSegments(depth), [depth])

  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-slate-900">Cantor Set</h1>
      <p className="mt-2 text-sm text-slate-600">
        Each level removes the middle third of every segment. Increase depth to watch structure
        emerge recursively.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <CantorControls
          depth={depth}
          onDepthChange={setDepth}
          onRowHeightChange={setRowHeight}
          onStrokeWidthChange={setStrokeWidth}
          rowHeight={rowHeight}
          strokeWidth={strokeWidth}
        />
        <div className="text-slate-900">
          <CantorSvg rowHeight={rowHeight} segments={segments} strokeWidth={strokeWidth} width={980} />
        </div>
      </div>
    </PageContainer>
  )
}
