import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getAreas, getOverall, getPatient, patients, toneLabel, toneShortLabel } from './data'
import type { AreaId, AreaInfo, Patient } from './data'
import { BodyMap } from './BodyMap'
import { DetailSheet } from './DetailSheet'
import { Icon } from './Icons'
import { Report } from './Report'
import { StatusPill } from './Ui'

type View = 'home' | 'report'
type ActionGroup = 'today' | 'months' | 'daily'

const areaOrder: AreaId[] = ['brain', 'foot', 'blood', 'heart']

function readInitialState() {
  if (typeof window === 'undefined') {
    return { patientId: 'zhang', view: 'home' as View, area: null as AreaId | null }
  }
  const params = new URLSearchParams(window.location.search)
  const requestedPatient = params.get('p')
  const patientId = patients.some((item) => item.id === requestedPatient) ? requestedPatient! : 'zhang'
  const requestedArea = params.get('area')
  const area = areaOrder.includes(requestedArea as AreaId) ? (requestedArea as AreaId) : null
  const view: View = params.get('view') === 'report' ? 'report' : 'home'
  return { patientId, view, area }
}

const initialState = readInitialState()

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 42 42" fill="none">
        <path d="M21 7v11m0 0-7 5m7-5 7 5M14 23v10m14-10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="21" cy="7" r="2.4" fill="currentColor" />
        <circle cx="14" cy="34" r="2.4" fill="currentColor" />
        <circle cx="28" cy="34" r="2.4" fill="currentColor" />
      </svg>
    </span>
  )
}

function CapillaryArt() {
  return (
    <div className="capillary-art">
      <div className="art-chip"><span />氧气 + 营养 → 每个细胞</div>
      <svg viewBox="0 0 560 440" className="capillary-art-svg" role="img" aria-label="毛细血管把氧气和营养送到身体细胞的示意图">
        <defs>
          <linearGradient id="art-vessel" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#e7b6a6" />
            <stop offset="0.55" stopColor="#e59a83" />
            <stop offset="1" stopColor="#d97762" />
          </linearGradient>
          <linearGradient id="art-soft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e6f5ef" />
            <stop offset="1" stopColor="#d3ede4" />
          </linearGradient>
        </defs>
        <circle cx="137" cy="128" r="128" fill="#e8f5f0" opacity="0.8" />
        <circle cx="424" cy="304" r="118" fill="#f8e9dc" opacity="0.6" />
        <path d="M38 360C130 328 177 284 238 224C302 162 366 116 512 74" fill="none" stroke="url(#art-vessel)" strokeWidth="35" strokeLinecap="round" />
        <path d="M38 360C130 328 177 284 238 224C302 162 366 116 512 74" fill="none" stroke="#fbded3" strokeWidth="19" strokeLinecap="round" opacity="0.7" />
        <path d="M38 360C130 328 177 284 238 224C302 162 366 116 512 74" fill="none" stroke="#fff7f1" strokeWidth="2.5" strokeDasharray="2 14" opacity="0.9" />
        <path d="M205 253C180 282 161 314 142 351M299 184C286 230 270 263 243 300M367 143C384 189 394 222 407 261" fill="none" stroke="#e7ab97" strokeWidth="11" strokeLinecap="round" opacity="0.7" />
        <g fill="#c95d4d">
          <ellipse rx="9" ry="7">
            <animateMotion dur="9s" repeatCount="indefinite" path="M38 360C130 328 177 284 238 224C302 162 366 116 512 74" />
          </ellipse>
          <ellipse rx="7" ry="5.5">
            <animateMotion dur="9s" begin="-3s" repeatCount="indefinite" path="M38 360C130 328 177 284 238 224C302 162 366 116 512 74" />
          </ellipse>
          <ellipse rx="8" ry="6.3">
            <animateMotion dur="9s" begin="-6s" repeatCount="indefinite" path="M38 360C130 328 177 284 238 224C302 162 366 116 512 74" />
          </ellipse>
        </g>
        <g className="art-cells">
          <g transform="translate(430 300)">
            <circle r="36" fill="url(#art-soft)" stroke="#a9d7ca" />
            <circle r="12" fill="#9ccfc0" opacity="0.9" />
          </g>
          <g transform="translate(492 250)">
            <circle r="25" fill="url(#art-soft)" stroke="#a9d7ca" />
            <circle r="8" fill="#9ccfc0" opacity="0.9" />
          </g>
          <g transform="translate(470 368)">
            <circle r="22" fill="url(#art-soft)" stroke="#a9d7ca" />
            <circle r="7" fill="#9ccfc0" opacity="0.9" />
          </g>
        </g>
        <g className="art-labels">
          <g transform="translate(78 285)">
            <rect width="102" height="33" rx="16.5" fill="#fffdf9" stroke="#e7dfd2" />
            <text x="51" y="21" textAnchor="middle">氧气</text>
          </g>
          <g transform="translate(242 112)">
            <rect width="102" height="33" rx="16.5" fill="#fffdf9" stroke="#e7dfd2" />
            <text x="51" y="21" textAnchor="middle">营养</text>
          </g>
          <g transform="translate(374 343)">
            <rect width="122" height="33" rx="16.5" fill="#fffdf9" stroke="#e7dfd2" />
            <text x="61" y="21" textAnchor="middle">细胞获得能量</text>
          </g>
        </g>
      </svg>
      <p className="art-caption">这是身体最末端的“配送网络”，也是这次评估关注的微循环。</p>
    </div>
  )
}

function areaMetric(patient: Patient, area: AreaInfo) {
  if (area.id === 'brain') {
    return { value: `${patient.raw.brain.left} / ${patient.raw.brain.right}`, unit: '%', label: '左右脑供氧' }
  }
  if (area.id === 'foot') {
    return { value: String(patient.raw.foot.ttr), unit: '秒', label: '血流恢复时间' }
  }
  if (area.id === 'blood') {
    return { value: patient.raw.blood.viscosity.toFixed(1), unit: 'mPa·s', label: '血液黏稠度' }
  }
  return { value: `${patient.raw.heart.sbp} / ${patient.raw.heart.dbp}`, unit: 'mmHg', label: '本次血压' }
}

function AreaCard({
  patient,
  area,
  onSelect,
}: {
  patient: Patient
  area: AreaInfo
  onSelect: (id: AreaId) => void
}) {
  const metric = areaMetric(patient, area)
  return (
    <button type="button" className={`area-card ${area.tone}`} onClick={() => onSelect(area.id)}>
      <span className="area-card-top">
        <span className="area-index">0{area.order}</span>
        <StatusPill tone={area.tone} />
      </span>
      <span className="area-card-title">
        <span className="area-icon"><Icon name={area.icon} size={23} /></span>
        <span>
          <strong>{area.title}</strong>
          <small>{area.method}</small>
        </span>
      </span>
      <span className="area-card-headline">{area.headline}</span>
      <span className="area-card-metric">
        <b>{metric.value}</b><em>{metric.unit}</em><small>{metric.label}</small>
      </span>
      <span className="area-card-summary">{area.summary}</span>
      <span className="area-card-foot">
        了解这一处
        <span><Icon name="arrow-right" size={17} /></span>
      </span>
    </button>
  )
}

function ActionGroupBlock({
  group,
  title,
  icon,
  items,
  patientId,
  completed,
  onToggle,
}: {
  group: ActionGroup
  title: string
  icon: 'sun' | 'calendar' | 'walk'
  items: string[]
  patientId: string
  completed: Set<string>
  onToggle: (key: string) => void
}) {
  return (
    <div className="action-group">
      <div className="action-group-head">
        <span className="action-group-icon"><Icon name={icon} size={19} /></span>
        <span>{title}</span>
      </div>
      <div className="action-list">
        {items.map((item, index) => {
          const key = `${patientId}:${group}:${index}`
          const done = completed.has(key)
          return (
            <button
              key={item}
              type="button"
              className={`action-item ${done ? 'is-done' : ''}`}
              onClick={() => onToggle(key)}
              aria-pressed={done}
            >
              <span className="action-check">{done ? <Icon name="check" size={14} /> : null}</span>
              <span>{item}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function App() {
  const [patientId, setPatientId] = useState(initialState.patientId)
  const [view, setView] = useState<View>(initialState.view)
  const [activeArea, setActiveArea] = useState<AreaId | null>(initialState.area)
  const [demoOpen, setDemoOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('overview')
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const demoRef = useRef<HTMLDivElement>(null)
  const scrollBeforeReport = useRef(0)

  const patient = useMemo(() => getPatient(patientId), [patientId])
  const areas = useMemo(() => getAreas(patient), [patient])
  const overall = useMemo(() => getOverall(patient), [patient])
  const orderedAreas = useMemo(
    () => areaOrder.map((id) => areas.find((area) => area.id === id)).filter(Boolean) as AreaInfo[],
    [areas],
  )
  const activeAreaIndex = activeArea ? orderedAreas.findIndex((area) => area.id === activeArea) : -1
  const activeAreaInfo = activeAreaIndex >= 0 ? orderedAreas[activeAreaIndex] : null
  const totalActions = patient.actionPlan.today.length + patient.actionPlan.months.length + patient.actionPlan.daily.length
  const doneActions = Array.from(completed).filter((key) => key.startsWith(`${patient.id}:`)).length

  useEffect(() => {
    document.title = view === 'report' ? '患者版报告 · 微循' : `${patient.name}的微循环评估 · 微循`
  }, [view, patient.name])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(null), 2800)
    return () => window.clearTimeout(timer)
  }, [toast])

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (demoRef.current && !demoRef.current.contains(event.target as Node)) setDemoOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  useEffect(() => {
    if (view !== 'home') return
    let frame = 0
    const update = () => {
      frame = 0
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
      const areasEl = document.getElementById('areas')
      const actionsEl = document.getElementById('actions')
      if (actionsEl && actionsEl.getBoundingClientRect().top <= 230) setActiveSection('actions')
      else if (areasEl && areasEl.getBoundingClientRect().top <= 190) setActiveSection('areas')
      else setActiveSection('overview')
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [view])

  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const top = element.getBoundingClientRect().top + window.scrollY - (id === 'overview' ? 0 : 104)
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveSection(id)
  }, [])

  const openArea = useCallback((id: AreaId) => {
    setActiveArea(id)
  }, [])

  const closeArea = useCallback(() => {
    setActiveArea(null)
  }, [])

  const navigateArea = useCallback(
    (direction: 1 | -1) => {
      if (activeAreaIndex < 0) return
      const next = activeAreaIndex + direction
      if (next < 0 || next >= orderedAreas.length) {
        setActiveArea(null)
        return
      }
      setActiveArea(orderedAreas[next].id)
    },
    [activeAreaIndex, orderedAreas],
  )

  const toggleAction = (key: string) => {
    setCompleted((current) => {
      const next = new Set(current)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const switchPatient = (id: string) => {
    const nextPatient = getPatient(id)
    setPatientId(id)
    setDemoOpen(false)
    setActiveArea(null)
    setView('home')
    setCompleted(new Set())
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setToast(`已切换至${nextPatient.name}的演示结果`)
  }

  const openReport = () => {
    scrollBeforeReport.current = window.scrollY
    setView('report')
    setActiveArea(null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const closeReport = () => {
    setView('home')
    window.scrollTo({ top: scrollBeforeReport.current, behavior: 'auto' })
  }

  const restart = () => {
    setActiveArea(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setToast('已回到本次结果首页')
  }

  const goodArea = orderedAreas.find((area) => area.tone === 'good')
  const goodCounts = {
    good: orderedAreas.filter((area) => area.tone === 'good').length,
    watch: orderedAreas.filter((area) => area.tone === 'watch').length,
    check: orderedAreas.filter((area) => area.tone === 'check').length,
  }

  if (view === 'report') {
    return (
      <>
        <Report patient={patient} areas={orderedAreas} overall={overall} onBack={closeReport} onPrint={() => window.print()} />
        {toast ? <div className="toast" role="status"><Icon name="check" size={17} />{toast}</div> : null}
      </>
    )
  }

  return (
    <div className={`app ${activeArea ? 'has-sheet' : ''}`}>
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <a className="brand" href="#overview" onClick={(event) => { event.preventDefault(); scrollToId('overview') }}>
          <BrandMark />
          <span className="brand-copy"><strong>微循</strong><small>全身微循环评估</small></span>
        </a>

        <nav className="chapter-nav" aria-label="页面章节">
          <button type="button" className={activeSection === 'overview' ? 'is-active' : ''} onClick={() => scrollToId('overview')}>整体结果</button>
          <button type="button" className={activeSection === 'areas' ? 'is-active' : ''} onClick={() => scrollToId('areas')}>逐项了解</button>
          <button type="button" className={activeSection === 'actions' ? 'is-active' : ''} onClick={() => scrollToId('actions')}>行动建议</button>
          <button type="button" onClick={openReport}>我的报告</button>
        </nav>

        <div className="header-actions">
          <div className="demo-picker" ref={demoRef}>
            <button
              type="button"
              className={`demo-trigger ${demoOpen ? 'is-open' : ''}`}
              onClick={() => setDemoOpen((open) => !open)}
              aria-expanded={demoOpen}
              aria-haspopup="listbox"
            >
              <span className="demo-badge">演示</span>
              <span>{patient.name}</span>
              <Icon name="chevron-down" size={15} />
            </button>
            {demoOpen ? (
              <div className="demo-menu" role="listbox" aria-label="选择演示病例">
                <div className="demo-menu-head">
                  <b>切换演示病例</b>
                  <span>用于比较不同风险水平</span>
                </div>
                {patients.map((option) => {
                  const optionOverall = getOverall(option)
                  return (
                    <button
                      type="button"
                      key={option.id}
                      className={`demo-option ${option.id === patientId ? 'is-active' : ''}`}
                      onClick={() => switchPatient(option.id)}
                      role="option"
                      aria-selected={option.id === patientId}
                    >
                      <span className={`demo-avatar ${optionOverall.tone}`}>{option.name.slice(0, 1)}</span>
                      <span className="demo-option-copy">
                        <b>{option.name}<small>{option.sex} · {option.age} 岁</small></b>
                        <span><i className={optionOverall.tone} />{optionOverall.title} · {optionOverall.goodCount} 个部位良好</span>
                      </span>
                      {option.id === patientId ? <Icon name="check" size={17} /> : null}
                    </button>
                  )
                })}
                <p className="demo-menu-note"><Icon name="info" size={14} />演示数据，不可用于真实诊疗</p>
              </div>
            ) : null}
          </div>
          <button className="header-icon-btn" type="button" onClick={restart} aria-label="重新开始">
            <Icon name="rotate" size={19} />
          </button>
        </div>
      </header>

      <main className="page">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-date"><Icon name="calendar" size={15} />{patient.date}</span>
              <i />
              <span>{patient.room}</span>
            </div>

            <div className={`overall-chip ${overall.tone}`}>
              <span className="overall-chip-dot" />
              整体评估 · {overall.title === '整体状态良好' ? '状态良好' : overall.title}
            </div>

            <h1><span className="hero-name">{patient.name}</span>，<br />您的微循环评估已完成</h1>
            <p className="hero-lead">
              {overall.concernCount === 0 ? (
                <>这次评估的 <strong>4 个部位</strong> 都处于良好状态。</>
              ) : overall.goodCount === 0 ? (
                <>这次评估的 <strong>4 个部位</strong> 都需要关注。</>
              ) : (
                <>这次评估的 <strong>4 个部位</strong> 中，<br className="hero-lead-break" /><strong className="good-text">{overall.goodCount} 个状态良好</strong>，<strong className={overall.tone === 'check' ? 'check-text' : 'watch-text'}>{overall.concernCount} 个需要关注</strong>。</>
              )}
            </p>
            <p className="hero-note">{overall.note}</p>

            <div className="overall-meter" aria-label={`${goodCounts.good} 个良好，${goodCounts.watch} 个需关注，${goodCounts.check} 个建议评估`}>
              {orderedAreas.map((area) => <span key={area.id} className={area.tone} />)}
            </div>
            <div className="overall-meter-labels">
              {goodCounts.good > 0 ? <span><i className="good" />{goodCounts.good} 良好</span> : null}
              {goodCounts.watch > 0 ? <span><i className="watch" />{goodCounts.watch} 需关注</span> : null}
              {goodCounts.check > 0 ? <span><i className="check" />{goodCounts.check} 建议评估</span> : null}
            </div>

            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={() => { scrollToId('areas'); }}>
                带我一处一处看
                <Icon name="arrow-right" size={18} />
              </button>
              <button type="button" className="secondary-button" onClick={() => scrollToId('actions')}>
                直接看建议
              </button>
            </div>

            <div className="hero-meta">
              <span><Icon name="clock" size={15} />约 3 分钟阅读</span>
              <span><Icon name="shield" size={15} />已由 {patient.doctor} 医生审核</span>
              <span><Icon name="file" size={15} />28 项指标 · 4 类检测</span>
            </div>
          </div>

          <div className="hero-map-wrap" id="map">
            <BodyMap areas={orderedAreas} onSelect={openArea} />
            <div className="map-caption">
              <span><i className="live-dot" />数据采集完成 · {patient.time}</span>
              <span>点击身体部位，查看具体含义</span>
            </div>
          </div>
        </section>

        <section className="good-news-band">
          <div className="good-news-icon"><Icon name="spark" size={22} /></div>
          <div className="good-news-copy">
            <span>先说一个好消息</span>
            <p>{patient.goodNews}</p>
          </div>
          {goodArea ? (
            <button type="button" className="text-button" onClick={() => openArea(goodArea.id)}>
              看看这一处
              <Icon name="arrow-right" size={16} />
            </button>
          ) : (
            <button type="button" className="text-button" onClick={() => scrollToId('actions')}>
              看看下一步
              <Icon name="arrow-right" size={16} />
            </button>
          )}
        </section>

        <section className="micro-explain">
          <div className="explain-copy">
            <div className="section-kicker"><i />看懂这次检测</div>
            <h2>微循环，是身体最末端的<br /><em>“配送网络”</em></h2>
            <p className="explain-lead">
              动脉、静脉和毛细血管一起，把氧气和营养送到每个细胞，再把代谢废物带走。它的状态，和血管弹性、血液流动、末梢供血都有关系。
            </p>
            <div className="explain-points">
              <div><span>01</span><b>血管弹性</b><small>血管能否随心跳自然扩张、回弹</small></div>
              <div><span>02</span><b>血液流动</b><small>血液是否偏稠，流动是否顺畅</small></div>
              <div><span>03</span><b>末梢供血</b><small>手脚等末端能否及时获得血液</small></div>
            </div>
            <p className="explain-note"><Icon name="info" size={15} />这次评估从四个角度观察这套网络，帮助您更早看到需要关注的地方。</p>
          </div>
          <CapillaryArt />
        </section>

        <section className="areas-section" id="areas">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><i />逐项了解</div>
              <h2>四个部位，逐一说明</h2>
              <p>不需要记住所有数字，先看结论和下一步。</p>
            </div>
            <span className="section-count">{overall.concernCount === 0 ? '4 处状态良好' : `${overall.concernCount} 处需要关注`}</span>
          </div>
          <div className="area-grid">
            {orderedAreas.map((area) => (
              <AreaCard patient={patient} area={area} key={area.id} onSelect={openArea} />
            ))}
          </div>
        </section>

        <section className="action-section" id="actions">
          <div className="action-intro">
            <div className="section-kicker is-light"><i />接下来</div>
            <h2>不用一次<br />改变所有事</h2>
            <p>从今天能做的一件小事开始。完成一项，就点一下前面的圆圈。</p>
            <div className="action-progress">
              <div><span>我的行动进度</span><b>{doneActions} / {totalActions}</b></div>
              <div className="action-progress-track"><i style={{ width: `${totalActions ? (doneActions / totalActions) * 100 : 0}%` }} /></div>
            </div>
            <button type="button" className="light-button" onClick={openReport}>
              查看患者版报告
              <Icon name="arrow-right" size={17} />
            </button>
          </div>

          <div className="action-groups">
            <ActionGroupBlock
              group="today"
              title="今天"
              icon="sun"
              items={patient.actionPlan.today}
              patientId={patient.id}
              completed={completed}
              onToggle={toggleAction}
            />
            <ActionGroupBlock
              group="months"
              title="3 个月内"
              icon="calendar"
              items={patient.actionPlan.months}
              patientId={patient.id}
              completed={completed}
              onToggle={toggleAction}
            />
            <ActionGroupBlock
              group="daily"
              title="每天"
              icon="walk"
              items={patient.actionPlan.daily}
              patientId={patient.id}
              completed={completed}
              onToggle={toggleAction}
            />
          </div>

          <div className="action-warning">
            <Icon name="alert" size={17} />
            <span>如出现胸痛、胸闷、单侧肢体无力或言语不清，请立即就医，不要等待体检报告。</span>
          </div>
        </section>

        <section className="report-teaser">
          <div className="report-mini" aria-hidden="true">
            <div className="report-mini-head"><span className="mini-brand">微循</span><i /></div>
            <div className="report-mini-title">全身微循环<br />健康评估报告</div>
            <div className="report-mini-meta">{patient.name} · {patient.date}</div>
            <div className="report-mini-map">
              <span className="mini-body" />
              <i className="good" />
              <i className="watch" />
              <i className="check" />
              <i className="watch" />
            </div>
            <div className="report-mini-lines"><i /><i /><i /></div>
            <div className="report-mini-foot"><span>患者版</span><span>{patient.reportNo}</span></div>
          </div>
          <div className="report-teaser-copy">
            <div className="section-kicker"><i />把结果带回家</div>
            <h2>一份看得懂的报告，<br />方便您和医生沟通</h2>
            <p>包含整体结论、身体风险地图、四个部位的通俗解释、关键数据和您的行动清单。</p>
            <div className="report-features">
              <span><Icon name="check" size={15} />适合保存和打印</span>
              <span><Icon name="check" size={15} />不用记医学术语</span>
              <span><Icon name="check" size={15} />可给家人一起看</span>
            </div>
            <div className="report-teaser-actions">
              <button type="button" className="primary-button" onClick={openReport}>
                查看患者版报告
                <Icon name="arrow-right" size={18} />
              </button>
              <button type="button" className="secondary-button" onClick={openReport}>
                <Icon name="printer" size={17} />打印 / 保存 PDF
              </button>
            </div>
          </div>
        </section>

        <footer className="page-footer">
          <div className="footer-brand"><BrandMark /><span><b>微循</b><small>看见身体的微循环</small></span></div>
          <div className="footer-note">
            <p>本页面为健康风险提示，不构成疾病诊断。最终解释请以体检医生意见为准。</p>
            <p>数据仅用于本次评估 · 离开页面后不会保存 · 演示版本</p>
          </div>
          <div className="footer-actions">
            <span><Icon name="shield" size={15} />隐私保护</span>
            <span>滨江院区智能体检中心</span>
          </div>
        </footer>
      </main>

      {activeAreaInfo ? (
        <DetailSheet
          key={activeAreaInfo.id}
          patient={patient}
          area={activeAreaInfo}
          index={activeAreaIndex}
          total={orderedAreas.length}
          prev={activeAreaIndex > 0 ? orderedAreas[activeAreaIndex - 1] : undefined}
          next={activeAreaIndex < orderedAreas.length - 1 ? orderedAreas[activeAreaIndex + 1] : undefined}
          onClose={closeArea}
          onPrev={() => navigateArea(-1)}
          onNext={() => navigateArea(1)}
        />
      ) : null}

      {toast ? <div className="toast" role="status"><Icon name="check" size={17} />{toast}</div> : null}
    </div>
  )
}
