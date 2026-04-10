import { useEffect, useRef } from 'react'
import type { ComplexNumber } from '../../../lib/complex/complex'

interface ComplexCanvasProps {
  inputPoints: ComplexNumber[]
  outputPoints: ComplexNumber[]
  zoom: number
}

const drawPlane = (
  context: CanvasRenderingContext2D,
  points: ComplexNumber[],
  originX: number,
  planeWidth: number,
  canvasHeight: number,
  zoom: number,
  title: string,
) => {
  context.save()
  context.translate(originX, 0)

  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, planeWidth, canvasHeight)

  context.strokeStyle = '#e2e8f0'
  context.lineWidth = 1
  for (let index = 0; index <= 8; index += 1) {
    const x = (index / 8) * planeWidth
    const y = (index / 8) * canvasHeight
    context.beginPath()
    context.moveTo(x, 0)
    context.lineTo(x, canvasHeight)
    context.stroke()
    context.beginPath()
    context.moveTo(0, y)
    context.lineTo(planeWidth, y)
    context.stroke()
  }

  const cx = planeWidth / 2
  const cy = canvasHeight / 2
  context.strokeStyle = '#64748b'
  context.beginPath()
  context.moveTo(0, cy)
  context.lineTo(planeWidth, cy)
  context.stroke()
  context.beginPath()
  context.moveTo(cx, 0)
  context.lineTo(cx, canvasHeight)
  context.stroke()

  context.fillStyle = '#0f172a'
  context.font = '14px sans-serif'
  context.fillText(title, 12, 22)

  context.fillStyle = '#0284c7'
  for (const point of points) {
    const px = cx + point.re * zoom
    const py = cy - point.im * zoom

    if (px < 0 || px > planeWidth || py < 0 || py > canvasHeight) {
      continue
    }

    context.beginPath()
    context.arc(px, py, 1.8, 0, Math.PI * 2)
    context.fill()
  }

  context.restore()
}

export const ComplexCanvas = ({ inputPoints, outputPoints, zoom }: ComplexCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    const width = canvas.width
    const height = canvas.height
    const planeWidth = width / 2

    context.clearRect(0, 0, width, height)
    drawPlane(context, inputPoints, 0, planeWidth, height, zoom, 'Input Plane')
    drawPlane(context, outputPoints, planeWidth, planeWidth, height, zoom, 'Transformed Plane')
  }, [inputPoints, outputPoints, zoom])

  return (
    <canvas
      ref={canvasRef}
      className="h-auto w-full rounded-xl border border-slate-200 bg-white"
      height={420}
      width={980}
    />
  )
}
