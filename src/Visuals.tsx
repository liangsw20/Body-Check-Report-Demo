import type { Patient } from './data'
import { buildBloodPressureWave, buildFootCurve } from './charts'
import { Icon } from './Icons'

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function linePath(points: Array<{ x: number; y: number }>) {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

export function FootCurveChart({ patient, compact = false }: { patient: Patient; compact?: boolean }) {
  const left = buildFootCurve(patient.raw.foot.leftTtr, patient.raw.foot.leftPeak)
  const right = buildFootCurve(patient.raw.foot.rightTtr, patient.raw.foot.rightPeak)

  const W = compact ? 520 : 620
  const H = compact ? 260 : 310
  const margin = { top: 28, right: 18, bottom: 38, left: 42 }
  const innerW = W - margin.left - margin.right
  const innerH = H - margin.top - margin.bottom
  const maxT = 600
  const maxV = 170
  const x = (t: number) => margin.left + (t / maxT) * innerW
  const y = (v: number) => margin.top + innerH - (v / maxV) * innerH
  const leftPoints = left.points.map((p) => ({ x: x(p.t), y: y(p.v) }))
  const rightPoints = right.points.map((p) => ({ x: x(p.t), y: y(p.v) }))
  const yTicks = [0, 50, 100, 150]
  const xTicks = [0, 120, 240, 360, 480, 600]
  const labelLeft = left.recovery.t > 480
  const footTone = patient.raw.foot.ttr <= 90 ? 'good' : patient.raw.foot.ttr > 150 ? 'check' : 'watch'

  return (
    <div className={`foot-chart ${compact ? 'is-compact' : ''}`}>
      <div className="foot-chart-top">
        <div className="chart-phase-labels">
          <span style={{ width: '10%' }}>静息</span>
          <span className="phase-occlusion" style={{ width: '50%' }}>阻断 5 分钟</span>
          <span style={{ width: '40%' }}>松开后</span>
        </div>
        <span className="chart-unit">相对血流 %</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" role="img" aria-label="脚趾缺血再灌注血流曲线">
        <defs>
          <linearGradient id="foot-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22a88f" stopOpacity="0.16" />
            <stop offset="1" stopColor="#22a88f" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x={x(60)} y={margin.top} width={x(360) - x(60)} height={innerH} fill="#f3e6da" opacity="0.55" rx="4" />
        <rect x={x(360)} y={margin.top} width={innerW - (x(360) - margin.left)} height={innerH} fill="#e4f4ef" opacity="0.55" rx="4" />

        {yTicks.map((tick) => (
          <g key={tick}>
            <line x1={margin.left} x2={W - margin.right} y1={y(tick)} y2={y(tick)} className="chart-grid" />
            <text x={margin.left - 9} y={y(tick) + 4} textAnchor="end" className="chart-axis">{tick}</text>
          </g>
        ))}

        {xTicks.map((tick) => (
          <text key={tick} x={x(tick)} y={H - 13} textAnchor="middle" className="chart-axis">
            {tick === 0 ? '0' : `${tick / 60} 分`}
          </text>
        ))}

        <line x1={margin.left} x2={W - margin.right} y1={y(100)} y2={y(100)} className="chart-baseline" />
        <text x={W - margin.right} y={y(100) - 7} textAnchor="end" className="chart-note">静息水平 100%</text>

        <path d={linePath(leftPoints)} className={`foot-line left ${footTone}`} />
        <path d={linePath(rightPoints)} className="foot-line right" />

        <line x1={x(360)} x2={x(360)} y1={margin.top} y2={margin.top + innerH} className="release-line" />
        <text x={x(360) + 7} y={margin.top + 12} className="release-label">松开袖带</text>

        <circle cx={x(left.peak.t)} cy={y(left.peak.v)} r="4.5" className={`chart-dot ${footTone}`} />
        <circle cx={x(left.recovery.t)} cy={y(left.recovery.v)} r="5.5" className={`recovery-dot ${footTone}`} />
        <circle cx={x(left.recovery.t)} cy={y(left.recovery.v)} r="10" className={`recovery-ring ${footTone}`} />

        <g transform={`translate(${clamp(x(left.recovery.t) + (labelLeft ? -12 : 12), margin.left + 48, W - margin.right - 55)}, ${clamp(y(left.recovery.v) - 26, margin.top + 10, margin.top + innerH - 48)})`}>
          <rect x={labelLeft ? -88 : 0} y="0" width="88" height="40" rx="9" className="chart-bubble" />
          <text x={labelLeft ? -44 : 44} y="16" textAnchor="middle" className="bubble-title">恢复时间</text>
          <text x={labelLeft ? -44 : 44} y="32" textAnchor="middle" className="bubble-value">{left.ttr} 秒</text>
        </g>
      </svg>
      <div className="chart-legend">
        <span><i className={`line-key left ${footTone}`} />左足 {left.ttr} 秒</span>
        <span><i className="line-key right" />右足 {right.ttr} 秒</span>
        <span className="chart-hint-line">恢复到接近静息水平所需时间</span>
      </div>
    </div>
  )
}

export function BrainVisual({ patient }: { patient: Patient }) {
  const { left, right, asym } = patient.raw.brain
  const tone = Math.min(left, right) >= 60 && asym <= 4 ? 'good' : Math.min(left, right) >= 55 && asym <= 7 ? 'watch' : 'check'
  const diff = Math.abs(left - right)

  return (
    <div className={`brain-visual ${tone}`}>
      <svg viewBox="0 0 400 270" className="brain-svg" role="img" aria-label={`左脑供氧 ${left}%，右脑供氧 ${right}%`}>
        <defs>
          <linearGradient id="brain-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={tone === 'good' ? '#6ed4c0' : tone === 'watch' ? '#ecc27c' : '#eaa38d'} />
            <stop offset="1" stopColor={tone === 'good' ? '#1c9d86' : tone === 'watch' ? '#c7953f' : '#cc735c'} />
          </linearGradient>
          <linearGradient id="brain-right" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={tone === 'good' ? '#8ae1cf' : tone === 'watch' ? '#f3d398' : '#f0b7a6'} />
            <stop offset="1" stopColor={tone === 'good' ? '#29a891' : tone === 'watch' ? '#d5a451' : '#d47e67'} />
          </linearGradient>
          <filter id="brain-glow">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <ellipse cx="200" cy="135" rx="145" ry="115" fill="currentColor" opacity="0.07" />
        <path
          d="M192 55C157 35 105 51 92 94C80 136 105 190 146 202C168 209 188 194 192 170Z"
          fill="url(#brain-left)"
          opacity="0.95"
        />
        <path
          d="M208 55C243 35 295 51 308 94C320 136 295 190 254 202C232 209 212 194 208 170Z"
          fill="url(#brain-right)"
          opacity="0.95"
        />
        <path d="M192 60C188 100 188 145 192 190M208 60C212 100 212 145 208 190" stroke="#fdfcf7" strokeWidth="3" opacity="0.9" />
        <g opacity="0.34" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M164 76C146 88 136 106 138 124M124 116C110 129 108 148 120 163M154 154C142 169 146 185 160 190" />
          <path d="M236 76C254 88 264 106 262 124M276 116C290 129 292 148 280 163M246 154C258 169 254 185 240 190" />
        </g>
        <circle cx="133" cy="118" r="28" fill="#fff" opacity="0.15" filter="url(#brain-glow)" />
        <circle cx="267" cy="118" r="28" fill="#fff" opacity="0.15" filter="url(#brain-glow)" />
        <text x="124" y="232" textAnchor="middle" className="brain-side-label">左脑</text>
        <text x="276" y="232" textAnchor="middle" className="brain-side-label">右脑</text>
        <text x="124" y="256" textAnchor="middle" className="brain-value-label">{left}%</text>
        <text x="276" y="256" textAnchor="middle" className="brain-value-label">{right}%</text>
      </svg>
      <div className="brain-balance">
        <span><i className="balance-mark left" />左脑供氧</span>
        <strong>{left}%</strong>
        <span className="balance-divider">相差 {diff} 个百分点</span>
        <strong>{right}%</strong>
        <span>右脑供氧<i className="balance-mark right" /></span>
      </div>
      <div className="brain-verdict">
        <span className="verdict-dot" />
        {tone === 'good' ? '左右供氧均衡，暂未见明显不对称' : '左右供氧存在差异，建议结合医生意见观察'}
      </div>
    </div>
  )
}

function BioBar({
  label,
  value,
  unit,
  low,
  high,
  max,
  tone,
}: {
  label: string
  value: number
  unit: string
  low: number
  high: number
  max: number
  tone: 'good' | 'watch' | 'check'
}) {
  const pct = clamp((value / max) * 100, 4, 96)
  return (
    <div className={`bio-bar ${tone}`}>
      <div className="bio-bar-head">
        <span>{label}</span>
        <span className="bio-value">{value}<small>{unit}</small></span>
      </div>
      <div className="bio-track">
        <span className="bio-range" style={{ left: `${(low / max) * 100}%`, width: `${((high - low) / max) * 100}%` }} />
        <span className="bio-marker" style={{ left: `${pct}%` }} />
      </div>
      <div className="bio-bar-foot">
        <span>参考 {low}–{high} {unit}</span>
        <span>{tone === 'good' ? '在范围内' : tone === 'watch' ? '偏离理想范围' : '建议进一步评估'}</span>
      </div>
    </div>
  )
}

export function BloodVisual({ patient }: { patient: Patient }) {
  const b = patient.raw.blood
  const vTone = b.viscosity > 4.8 ? (b.viscosity >= 6.4 ? 'check' : 'watch') : 'good'
  const lTone = b.ldl > 3.4 ? (b.ldl >= 4.5 ? 'check' : 'watch') : 'good'
  const gTone = b.glu > 6.1 ? (b.glu >= 7 ? 'check' : 'watch') : 'good'

  return (
    <div className="blood-visual">
      <div className={`capillary-scene ${vTone}`}>
        <div className="capillary-label">
          <span><Icon name="drop" size={16} />血液流动示意</span>
          <em>微流控芯片 · 9 项指标</em>
        </div>
        <svg viewBox="0 0 420 160" className="capillary-svg" role="img" aria-label="血液在毛细血管中流动的示意图">
          <defs>
            <linearGradient id="cap-tube" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#f4d7c7" />
              <stop offset="0.55" stopColor="#efc4ad" />
              <stop offset="1" stopColor="#f4d7c7" />
            </linearGradient>
            <filter id="cell-glow">
              <feGaussianBlur stdDeviation="2.4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M32 80C85 44 156 44 210 80C264 116 335 116 388 80" fill="none" stroke="#f2e4d8" strokeWidth="34" strokeLinecap="round" />
          <path d="M32 80C85 44 156 44 210 80C264 116 335 116 388 80" fill="none" stroke="url(#cap-tube)" strokeWidth="24" strokeLinecap="round" opacity="0.9" />
          <path d="M32 80C85 44 156 44 210 80C264 116 335 116 388 80" fill="none" stroke="#fff8f0" strokeWidth="2" strokeDasharray="2 8" opacity="0.7" />
          <g filter="url(#cell-glow)">
            <circle r="7" fill="#d96654">
              <animateMotion dur="7s" repeatCount="indefinite" path="M32 80C85 44 156 44 210 80C264 116 335 116 388 80" />
            </circle>
            <circle r="5.5" fill="#e4816a">
              <animateMotion dur="7s" begin="-2.3s" repeatCount="indefinite" path="M32 80C85 44 156 44 210 80C264 116 335 116 388 80" />
            </circle>
            <circle r="6.2" fill="#cf5b4e">
              <animateMotion dur="7s" begin="-4.6s" repeatCount="indefinite" path="M32 80C85 44 156 44 210 80C264 116 335 116 388 80" />
            </circle>
          </g>
          <text x="210" y="145" textAnchor="middle" className="capillary-note">血液越黏稠，流动越费力</text>
        </svg>
      </div>

      <div className="bio-bars">
        <BioBar label="血液黏稠度" value={b.viscosity} unit="mPa·s" low={3.5} high={4.8} max={9} tone={vTone} />
        <BioBar label="坏胆固醇（LDL-C）" value={b.ldl} unit="mmol/L" low={0} high={3.4} max={6.5} tone={lTone} />
        <BioBar label="空腹血糖" value={b.glu} unit="mmol/L" low={3.9} high={6.1} max={10} tone={gTone} />
      </div>
    </div>
  )
}

export function BpWaveChart({ patient, compact = false }: { patient: Patient; compact?: boolean }) {
  const { sbp, dbp, hr } = patient.raw.heart
  const points = buildBloodPressureWave(sbp, dbp, hr)
  const W = compact ? 460 : 600
  const H = compact ? 150 : 210
  const margin = { top: 24, right: 22, bottom: 26, left: 42 }
  const innerW = W - margin.left - margin.right
  const innerH = H - margin.top - margin.bottom
  const minV = dbp - 14
  const maxV = sbp + 14
  const x = (t: number) => margin.left + (t / points[points.length - 1].t) * innerW
  const y = (v: number) => margin.top + innerH - ((v - minV) / (maxV - minV)) * innerH
  const pathPoints = points.map((p) => ({ x: x(p.t), y: y(p.v) }))
  const line = linePath(pathPoints)
  const area = `${line} L${x(points[points.length - 1].t)},${y(minV)} L${x(0)},${y(minV)} Z`
  const yTicks = [dbp, sbp]

  return (
    <div className={`bp-chart ${compact ? 'is-compact' : ''}`}>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" role="img" aria-label={`血压波形，高压 ${sbp}，低压 ${dbp}`}>
        <defs>
          <linearGradient id="bp-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d96f5b" stopOpacity="0.28" />
            <stop offset="1" stopColor="#d96f5b" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        {yTicks.map((tick) => (
          <g key={tick}>
            <line x1={margin.left} x2={W - margin.right} y1={y(tick)} y2={y(tick)} className="chart-grid" />
            <text x={margin.left - 9} y={y(tick) + 4} textAnchor="end" className="chart-axis">{tick}</text>
          </g>
        ))}
        <path d={area} fill="url(#bp-fill)" />
        <path d={line} className="bp-line" />
        <circle cx={x(points.reduce((best, p) => (p.v > best.v ? p : best), points[0]).t)} cy={y(sbp)} r="4" className="bp-dot" />
        <text x={margin.left} y={margin.top - 8} className="chart-unit">mmHg</text>
        <text x={W - margin.right} y={margin.top - 8} textAnchor="end" className="chart-note">连续血压波形</text>
      </svg>
    </div>
  )
}

export function HeartVisual({ patient }: { patient: Patient }) {
  const h = patient.raw.heart
  const tone = h.sbp >= 140 || h.dbp >= 90 ? 'check' : h.sbp >= 130 || h.dbp >= 85 ? 'watch' : 'good'
  const rangePct = h.sbp >= 140 || h.dbp >= 90 ? 72 : h.sbp >= 130 || h.dbp >= 85 ? 50 : 26

  return (
    <div className={`heart-visual ${tone}`}>
      <div className="bp-readout">
        <div>
          <span>高压 <small>收缩压</small></span>
          <strong>{h.sbp}<em>mmHg</em></strong>
        </div>
        <div className="bp-slash">/</div>
        <div>
          <span>低压 <small>舒张压</small></span>
          <strong>{h.dbp}<em>mmHg</em></strong>
        </div>
      </div>
      <BpWaveChart patient={patient} compact />
      <div className="bp-scale">
        <div className="bp-scale-labels"><span>理想</span><span>正常高值</span><span>偏高</span></div>
        <div className="bp-scale-track">
          <span className="bp-zone ideal" />
          <span className="bp-zone high" />
          <span className="bp-zone elevated" />
          <span className="bp-marker" style={{ left: `${rangePct}%` }}><i />您的位置</span>
        </div>
      </div>
      <div className="vital-chips">
        <span><Icon name="heart" size={16} />心率 <b>{h.hr}</b> 次/分</span>
        <span><Icon name="activity" size={16} />心率变异性 <b>{h.hrv}</b> ms</span>
        <span><Icon name="wave" size={16} />血管弹性 <b>{h.pwv.toFixed(1)}</b> m/s</span>
      </div>
    </div>
  )
}
