import type { ReactNode } from 'react'
import type { Tone } from './data'
import { toneLabel } from './data'
import { Icon } from './Icons'

export function StatusPill({
  tone,
  label,
  compact = false,
  icon = false,
}: {
  tone: Tone
  label?: string
  compact?: boolean
  icon?: boolean
}) {
  return (
    <span className={`status-pill ${tone} ${compact ? 'is-compact' : ''}`}>
      {icon ? <Icon name={tone === 'good' ? 'check' : tone === 'watch' ? 'info' : 'alert'} size={13} /> : <i />}
      {label ?? toneLabel[tone]}
    </span>
  )
}

export function SectionKicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`section-kicker ${light ? 'is-light' : ''}`}><i />{children}</div>
}

export function CircleIcon({ tone, children }: { tone: Tone; children: ReactNode }) {
  return <span className={`circle-icon ${tone}`}>{children}</span>
}
