import { formatNumber } from '../../../lib/utils/format'
import type { BarycentricCoordinates } from '../types'

interface BarycentricReadoutProps {
  coordinates: BarycentricCoordinates
  inside: boolean
}

export const BarycentricReadout = ({ coordinates, inside }: BarycentricReadoutProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Coordinates</h2>
      <dl className="mt-3 space-y-1 text-sm text-slate-700">
        <div className="flex justify-between">
          <dt>alpha (A)</dt>
          <dd className="font-medium text-slate-900">{formatNumber(coordinates.alpha)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>beta (B)</dt>
          <dd className="font-medium text-slate-900">{formatNumber(coordinates.beta)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>gamma (C)</dt>
          <dd className="font-medium text-slate-900">{formatNumber(coordinates.gamma)}</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm text-slate-600">
        Point status:{' '}
        <span className={inside ? 'font-semibold text-emerald-700' : 'font-semibold text-amber-700'}>
          {inside ? 'inside triangle' : 'outside triangle'}
        </span>
      </p>
    </div>
  )
}
