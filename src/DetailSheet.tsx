import { useEffect, useRef } from 'react'
import type { AreaInfo, Patient } from './data'
import { StatusPill } from './Ui'
import { Icon } from './Icons'
import { BloodVisual, BrainVisual, FootCurveChart, HeartVisual } from './Visuals'

interface DetailSheetProps {
  patient: Patient
  area: AreaInfo
  index: number
  total: number
  prev?: AreaInfo
  next?: AreaInfo
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function AreaVisual({ patient, area }: { patient: Patient; area: AreaInfo }) {
  if (area.id === 'brain') return <BrainVisual patient={patient} />
  if (area.id === 'blood') return <BloodVisual patient={patient} />
  if (area.id === 'heart') return <HeartVisual patient={patient} />
  return <FootCurveChart patient={patient} compact />
}

function rowStatusLabel(status: string) {
  if (status === 'good') return '正常'
  if (status === 'watch') return '偏离'
  if (status === 'check') return '关注'
  return '—'
}

export function DetailSheet({ patient, area, index, total, prev, next, onClose, onPrev, onNext }: DetailSheetProps) {
  const sheetRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !sheetRef.current) return
      const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], summary, input, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', onKeyDown)
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="sheet-layer">
      <button className="sheet-scrim" type="button" aria-label="关闭解读" onClick={onClose} />
      <section
        className="detail-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-describedby="sheet-summary"
        ref={sheetRef}
      >
        <div className={`sheet-accent ${area.tone}`} />
        <div className="sheet-grab" aria-hidden="true" />

        <header className="sheet-header">
          <div className="sheet-topline">
            <div className="sheet-index">
              <span>0{index + 1}</span>
              <em>/ 0{total}</em>
              <i />
              <b>{area.title}</b>
            </div>
            <StatusPill tone={area.tone} icon />
            <button ref={closeRef} type="button" className="sheet-close" onClick={onClose} aria-label="关闭">
              <Icon name="close" size={22} />
            </button>
          </div>
          <h2 id="sheet-title">{area.headline}</h2>
          <p id="sheet-summary">{area.summary}</p>
          <div className="sheet-method">
            <Icon name="activity" size={15} />
            检测方式 · {area.method}
          </div>
        </header>

        <div className="sheet-content">
          <div className="sheet-visual-col">
            <div className="visual-label"><span>您的情况</span><em>本次检测结果</em></div>
            <div className={`visual-frame ${area.tone}`}>
              <AreaVisual patient={patient} area={area} />
            </div>
            <div className="visual-footnote">
              <Icon name="info" size={14} />
              图形用于帮助理解，具体判断以医生解释为准
            </div>
          </div>

          <div className="sheet-copy">
            <section className="why-block">
              <h3>{area.whyTitle}</h3>
              <ul>
                {area.why.map((reason) => (
                  <li key={reason}><i className={area.tone} />{reason}</li>
                ))}
              </ul>
            </section>

            <div className="meaning-grid">
              <div className="meaning-card">
                <span><Icon name="check" size={15} />这代表什么</span>
                <p>{area.meaning}</p>
              </div>
              <div className="meaning-card is-muted">
                <span><Icon name="info" size={15} />不代表什么</span>
                <p>{area.notMeaning}</p>
              </div>
            </div>

            <div className={`next-step ${area.tone}`}>
              <div className="next-step-icon"><Icon name="arrow-right" size={19} /></div>
              <div>
                <span>下一步建议</span>
                <p>{area.action}</p>
              </div>
            </div>

            <details className="data-details">
              <summary>
                <span><Icon name="file" size={17} />查看详细数据 <em>{area.details.length} 项</em></span>
                <Icon name="chevron-down" size={18} className="detail-chevron" />
              </summary>
              <div className="detail-table-wrap">
                <table className="detail-table">
                  <thead>
                    <tr><th>指标</th><th>结果</th><th>参考范围</th><th>提示</th></tr>
                  </thead>
                  <tbody>
                    {area.details.map((row) => (
                      <tr key={row.label}>
                        <td>
                          <span>{row.label}</span>
                          {row.note ? <small>{row.note}</small> : null}
                        </td>
                        <td><b>{row.value}</b><small>{row.unit}</small></td>
                        <td>{row.range}</td>
                        <td>
                          <span className={`row-status ${row.status}`}>
                            <i />{rowStatusLabel(row.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="table-note">参考范围来自本次检测机构使用的成人参考区间，具体解读需结合个人情况。</p>
              </div>
            </details>

            <p className="sheet-ai-note">
              <Icon name="shield" size={14} />
              本页为智能辅助解释，由体检医生审核；最终以医生意见为准。
            </p>
          </div>
        </div>

        <footer className="sheet-footer">
          <button className="sheet-nav-btn" type="button" onClick={onPrev} disabled={!prev}>
            <Icon name="arrow-left" size={18} />
            <span><small>上一处</small><b>{prev ? prev.shortTitle : '已是第一处'}</b></span>
          </button>
          <div className="sheet-progress" aria-hidden="true">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className={i === index ? `active ${area.tone}` : i < index ? 'done' : ''} />
            ))}
          </div>
          <button className="sheet-nav-btn is-next" type="button" onClick={onNext}>
            <span><small>{next ? '下一处' : '完成'}</small><b>{next ? next.shortTitle : '回到身体地图'}</b></span>
            <Icon name={next ? 'arrow-right' : 'check'} size={18} />
          </button>
        </footer>
      </section>
    </div>
  )
}
