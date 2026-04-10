import { useMemo, useState } from 'react'
import { PageContainer } from '../../components/ui/PageContainer'
import { applyTransformation, getTransformation } from './math/transformations'
import { createSampleGrid } from './math/sampleGrid'
import type { TransformKey } from './types'
import { ComplexCanvas } from './render/ComplexCanvas'
import { ComplexControls } from './components/ComplexControls'

export const ComplexToolPage = () => {
  const [transform, setTransform] = useState<TransformKey>('identity')
  const [zoom, setZoom] = useState(72)
  const [density, setDensity] = useState(20)

  const inputPoints = useMemo(() => createSampleGrid(density, 2.2), [density])
  const activeTransform = useMemo(() => getTransformation(transform), [transform])
  const outputPoints = useMemo(() => {
    return applyTransformation(inputPoints, activeTransform.apply)
  }, [activeTransform, inputPoints])

  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-slate-900">Complex Plane Transformations</h1>
      <p className="mt-2 text-sm text-slate-600">
        The left panel is the sampled input plane. The right panel shows the transformed result for
        the selected function.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <ComplexControls
          density={density}
          onDensityChange={setDensity}
          onTransformChange={setTransform}
          onZoomChange={setZoom}
          transform={transform}
          zoom={zoom}
        />
        <ComplexCanvas inputPoints={inputPoints} outputPoints={outputPoints} zoom={zoom} />
      </div>
    </PageContainer>
  )
}
