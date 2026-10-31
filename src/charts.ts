export interface CurvePoint {
  t: number
  v: number
}

export interface FootCurve {
  points: CurvePoint[]
  peak: CurvePoint
  recovery: CurvePoint
  ttr: number
  peakMultiple: number
}

const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3)
const smoothStep = (x: number) => {
  const t = Math.max(0, Math.min(1, x))
  return t * t * (3 - 2 * t)
}

export function buildFootCurve(
  ttr: number,
  peakMultiple: number,
  baseline = 100,
  nadir = 24,
): FootCurve {
  const release = 360
  const ttp = Math.max(30, Math.min(66, ttr * 0.36))
  const peakValue = baseline * peakMultiple
  const tau = Math.max(12, (ttr - ttp) / Math.log(10))
  const points: CurvePoint[] = []

  for (let t = 0; t <= 600; t += 3) {
    let v: number
    if (t < 60) {
      v = baseline + Math.sin(t * 0.11) * 1.1 + Math.sin(t * 0.37) * 0.35
    } else if (t < 88) {
      const p = smoothStep((t - 60) / 28)
      v = baseline + (nadir - baseline) * p + Math.sin(t * 0.2) * 0.4 * (1 - p)
    } else if (t < release) {
      v = nadir + Math.sin(t * 0.18) * 0.65
    } else if (t <= release + ttp) {
      const p = easeOutCubic((t - release) / ttp)
      v = nadir + (peakValue - nadir) * p
    } else {
      v = baseline + (peakValue - baseline) * Math.exp(-(t - release - ttp) / tau)
    }
    points.push({ t, v: Math.max(2, v) })
  }

  return {
    points,
    peak: { t: release + ttp, v: peakValue },
    recovery: {
      t: release + ttr,
      v: baseline + (peakValue - baseline) * 0.1,
    },
    ttr,
    peakMultiple,
  }
}

export interface WavePoint {
  t: number
  v: number
}

export function buildBloodPressureWave(sbp: number, dbp: number, hr: number): WavePoint[] {
  const cycle = 60 / hr
  const duration = cycle * 3.2
  const keys: Array<[number, number]> = [
    [0, 0.08],
    [0.05, 0.12],
    [0.12, 1],
    [0.19, 0.82],
    [0.3, 0.58],
    [0.36, 0.66],
    [0.43, 0.47],
    [0.62, 0.2],
    [0.8, 0.11],
    [1, 0.08],
  ]

  const valueAt = (phase: number) => {
    for (let i = 0; i < keys.length - 1; i += 1) {
      const [p0, v0] = keys[i]
      const [p1, v1] = keys[i + 1]
      if (phase >= p0 && phase <= p1) {
        const local = smoothStep((phase - p0) / Math.max(0.0001, p1 - p0))
        return v0 + (v1 - v0) * local
      }
    }
    return keys[keys.length - 1][1]
  }

  const points: WavePoint[] = []
  const steps = 260
  const amplitude = sbp - dbp
  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * duration
    const phase = (t / cycle) % 1
    const v = dbp + amplitude * valueAt(phase)
    points.push({ t, v })
  }
  return points
}

export function buildViscosityCurve(viscosity: number) {
  const shear = [1, 2, 5, 10, 20, 50, 100, 200]
  const ratios = [1.65, 1.38, 1.18, 1.08, 1.03, 1, 0.99, 0.98]
  const patient = shear.map((s, i) => ({ shear: s, value: viscosity * ratios[i] }))
  const reference = shear.map((s, i) => ({
    shear: s,
    value: 4.6 * ratios[i],
    low: 4.15 * ratios[i],
    high: 5.05 * ratios[i],
  }))
  return { patient, reference }
}

export function buildSparkline(seed: number, status: 'good' | 'watch' | 'check') {
  const points: Array<{ x: number; y: number }> = []
  for (let i = 0; i <= 24; i += 1) {
    const wave = Math.sin(i * 0.7 + seed) * 5 + Math.sin(i * 0.27 + seed * 2) * 3
    const slope = status === 'good' ? -i * 0.2 : status === 'watch' ? i * 0.12 : i * 0.25
    points.push({ x: i, y: 22 + wave + slope })
  }
  return points
}
