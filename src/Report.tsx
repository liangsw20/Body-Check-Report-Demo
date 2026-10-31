import type { AreaInfo, OverallInfo, Patient } from './data'
import { toneLabel, toneShortLabel } from './data'
import { Icon } from './Icons'
import { StatusPill } from './Ui'

function MiniBodyMap({ areas }: { areas: AreaInfo[] }) {
  const byId = Object.fromEntries(areas.map((area) => [area.id, area])) as Record<string, AreaInfo>
  return (
    <div className="report-map">
      <svg viewBox="0 0 280 380" role="img" aria-label="身体风险部位示意图">
        <defs>
          <linearGradient id="report-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#eef8f3" />
            <stop offset="1" stopColor="#c9e9df" />
          </linearGradient>
        </defs>
        <ellipse cx="140" cy="365" rx="70" ry="8" fill="#9ecfc3" opacity="0.25" />
        <g fill="url(#report-body)" stroke="#a9d5ca" strokeWidth="1.5">
          <circle cx="140" cy="45" r="24" />
          <path d="M125 115C112 119 103 132 99 149L94 205L86 260L82 320L103 322L111 268L117 216L124 190L130 228L128 290L141 292L146 240L154 292L168 290L165 228L171 190L178 216L185 268L193 322L214 320L210 260L202 205L197 149C193 132 184 119 171 115Z" />
          <path d="M109 133C97 141 90 160 86 182L80 210L94 213L102 184L113 158Z" />
          <path d="M171 133C183 141 190 160 194 182L200 210L186 213L178 184L167 158Z" />
          <rect x="126" y="68" width="28" height="32" rx="10" />
        </g>
        <g stroke="#2da58f" strokeWidth="1.6" fill="none" opacity="0.7">
          <path d="M140 117v72M140 190c-14 38-15 70-16 112M140 190c14 38 15 70 16 112M140 145c-12-18-13-38-13-62M140 145c12-18 13-38 13-62" />
        </g>
        <g>
          <circle cx="140" cy="66" r="12" fill={byId.brain.tone === 'good' ? '#2aa58e' : byId.brain.tone === 'watch' ? '#d3a04b' : '#d47861'} opacity="0.92" />
          <circle cx="157" cy="160" r="10" fill={byId.heart.tone === 'good' ? '#2aa58e' : byId.heart.tone === 'watch' ? '#d3a04b' : '#d47861'} opacity="0.92" />
          <circle cx="140" cy="212" r="11" fill={byId.blood.tone === 'good' ? '#2aa58e' : byId.blood.tone === 'watch' ? '#d3a04b' : '#d47861'} opacity="0.92" />
          <circle cx="124" cy="312" r="9" fill={byId.foot.tone === 'good' ? '#2aa58e' : byId.foot.tone === 'watch' ? '#d3a04b' : '#d47861'} opacity="0.92" />
        </g>
        <g fontSize="9" fill="#42645f">
          <text x="170" y="63">脑供氧</text>
          <text x="184" y="164">心血管</text>
          <text x="168" y="216">血液</text>
          <text x="148" y="316">足部</text>
        </g>
      </svg>
      <div className="report-map-legend">
        <span><i className="good" />良好</span>
        <span><i className="watch" />需关注</span>
        <span><i className="check" />建议评估</span>
      </div>
    </div>
  )
}

export function Report({
  patient,
  areas,
  overall,
  onBack,
  onPrint,
}: {
  patient: Patient
  areas: AreaInfo[]
  overall: OverallInfo
  onBack: () => void
  onPrint: () => void
}) {
  const keyRows = [
    { label: '脚趾血流恢复时间', value: `${patient.raw.foot.ttr} 秒`, ref: '≤ 90 秒', tone: patient.raw.foot.ttr <= 90 ? 'good' : patient.raw.foot.ttr > 150 ? 'check' : 'watch' },
    { label: '血压', value: `${patient.raw.heart.sbp} / ${patient.raw.heart.dbp} mmHg`, ref: '< 130 / 85', tone: patient.raw.heart.sbp < 130 && patient.raw.heart.dbp < 85 ? 'good' : patient.raw.heart.sbp >= 140 || patient.raw.heart.dbp >= 90 ? 'check' : 'watch' },
    { label: '坏胆固醇 LDL-C', value: `${patient.raw.blood.ldl.toFixed(2)} mmol/L`, ref: '< 3.40', tone: patient.raw.blood.ldl <= 3.4 ? 'good' : patient.raw.blood.ldl >= 4.5 ? 'check' : 'watch' },
    { label: '空腹血糖', value: `${patient.raw.blood.glu.toFixed(1)} mmol/L`, ref: '3.9–6.1', tone: patient.raw.blood.glu <= 6.1 ? 'good' : patient.raw.blood.glu >= 7 ? 'check' : 'watch' },
    { label: '血液黏稠度', value: `${patient.raw.blood.viscosity.toFixed(1)} mPa·s`, ref: '3.5–4.8', tone: patient.raw.blood.viscosity <= 4.8 ? 'good' : patient.raw.blood.viscosity >= 6.4 ? 'check' : 'watch' },
    { label: '左右脑氧差异', value: `${Math.abs(patient.raw.brain.left - patient.raw.brain.right)} 个百分点`, ref: '≤ 5', tone: Math.abs(patient.raw.brain.left - patient.raw.brain.right) <= 4 ? 'good' : 'watch' },
    { label: '血管弹性 cf-PWV', value: `${patient.raw.heart.pwv.toFixed(1)} m/s`, ref: '< 9.0', tone: patient.raw.heart.pwv < 9 ? 'good' : patient.raw.heart.pwv >= 12 ? 'check' : 'watch' },
    { label: '心率变异性 SDNN', value: `${patient.raw.heart.hrv} ms`, ref: '≥ 50', tone: patient.raw.heart.hrv >= 50 ? 'good' : patient.raw.heart.hrv >= 35 ? 'watch' : 'check' },
  ]

  const questions: string[] = []
  if (overall.concernCount === 0) {
    questions.push('下一次复查建议安排在什么时候？', '目前的生活方式还需要注意什么？', '我的家族史需要额外关注吗？')
  } else {
    if (areas.find((area) => area.id === 'heart')?.tone !== 'good') questions.push('我的血压需要复测或进一步检查吗？')
    if (areas.find((area) => area.id === 'foot')?.tone !== 'good') questions.push('足部血流恢复偏慢，需要做下肢血管检查吗？')
    if (areas.find((area) => area.id === 'blood')?.tone !== 'good') questions.push('血脂和血糖现在需要开始干预吗？')
    if (questions.length < 3) questions.push('这些结果和我正在服用的药物有关系吗？')
  }

  return (
    <div className="report-view">
      <div className="report-toolbar">
        <button className="back-button" type="button" onClick={onBack}>
          <Icon name="arrow-left" size={18} />返回结果
        </button>
        <div className="report-toolbar-title">
          <span>患者版健康报告</span>
          <small>A4 预览 · 可打印或保存为 PDF</small>
        </div>
        <button className="primary-button is-small" type="button" onClick={onPrint}>
          <Icon name="printer" size={17} />打印 / 保存 PDF
        </button>
      </div>

      <div className="report-canvas">
        <article className="report-page report-page-one">
          <header className="report-brand-head">
            <div className="report-brand">
              <span className="report-brand-mark">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 5v10m0 0-6 4m6-4 6 4M10 19v7m12-7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="16" cy="5" r="1.8" fill="currentColor" />
                  <circle cx="10" cy="26" r="1.8" fill="currentColor" />
                  <circle cx="22" cy="26" r="1.8" fill="currentColor" />
                </svg>
              </span>
              <div><b>微循</b><small>全身微循环评估</small></div>
            </div>
            <div className="report-head-meta">
              <b>患者版健康报告</b>
              <span>{patient.date}</span>
            </div>
          </header>

          <div className="report-title-block">
            <span className="report-kicker">WHOLE-BODY MICROCIRCULATION · PATIENT REPORT</span>
            <h1>全身微循环健康评估报告</h1>
            <p>{patient.name} · {patient.sex} · {patient.age} 岁</p>
            <div className="report-meta-grid">
              <span>体检号 <b>{patient.examNo}</b></span>
              <span>报告编号 <b>{patient.reportNo}</b></span>
              <span>评估时间 <b>{patient.date} {patient.time}</b></span>
              <span>总检医生 <b>{patient.doctor}</b></span>
            </div>
          </div>

          <section className={`report-summary ${overall.tone}`}>
            <div className="report-summary-status">
              <span>整体评估</span>
              <strong>{overall.title}</strong>
              <StatusPill tone={overall.tone} icon />
            </div>
            <div className="report-summary-copy">
              <p>{overall.lead}</p>
              <small>{overall.note}</small>
            </div>
          </section>

          <section className="report-section">
            <div className="report-section-head">
              <h2>全身风险地图</h2>
              <span>4 个评估部位</span>
            </div>
            <div className="report-map-row">
              <MiniBodyMap areas={areas} />
              <div className="report-area-list">
                {areas.map((area) => (
                  <div className={`report-area-row ${area.tone}`} key={area.id}>
                    <span className="report-area-icon"><Icon name={area.icon} size={16} /></span>
                    <div>
                      <b>{area.title}</b>
                      <small>{area.hotspotNote}</small>
                    </div>
                    <em>{toneShortLabel[area.tone]}</em>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="report-good-news">
            <Icon name="spark" size={18} />
            <div><b>这次的好消息</b><span>{patient.goodNews}</span></div>
          </div>

          <section className="report-section report-section-areas">
            <div className="report-section-head">
              <h2>四个部位，逐项看懂</h2>
              <span>用简单的话解释这次结果</span>
            </div>
            <div className="report-area-grid">
              {areas.map((area) => (
                <div className={`report-detail-card ${area.tone}`} key={area.id}>
                  <div className="report-detail-head">
                    <span><Icon name={area.icon} size={16} />{area.title}</span>
                    <em>{toneLabel[area.tone]}</em>
                  </div>
                  <b>{area.headline}</b>
                  <p>{area.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="report-quick-wrap">
            <div className="report-quick-label">关键数值速览</div>
            <div className="report-quick-grid">
              {keyRows.slice(0, 4).map((row) => (
                <div className="report-quick-cell" key={row.label}>
                  <span>{row.label}</span>
                  <b>{row.value}</b>
                  <i className={row.tone} />
                </div>
              ))}
            </div>
          </div>

          <section className="report-dictionary report-dictionary-page-one">
            <div className="report-section-head">
              <h2>健康小词典</h2>
              <span>三个词，看懂这次评估</span>
            </div>
            <div className="report-dictionary-grid">
              <div><b>微循环</b><p>身体最末端的毛细血管网络，把氧气和营养送到每个细胞。</p></div>
              <div><b>血管弹性</b><p>血管随心跳自然扩张、回弹的能力。弹性下降，心脏会更费力。</p></div>
              <div><b>血液黏稠度</b><p>血液流动的顺畅程度。偏高时，血液流动的阻力会增加。</p></div>
            </div>
          </section>

          <footer className="report-page-foot">
            <span>本报告为健康风险提示，不构成疾病诊断。</span>
            <span>第 1 页 / 共 2 页</span>
          </footer>
        </article>

        <article className="report-page report-page-two">
          <header className="report-page-header">
            <span>微循 · 全身微循环评估</span>
            <span>{patient.name} · {patient.reportNo}</span>
          </header>

          <section className="report-section">
            <div className="report-section-head">
              <h2>关键检测数据</h2>
              <span>供您和医生沟通时参考</span>
            </div>
            <div className="report-data-grid">
              {keyRows.map((row) => (
                <div className="report-data-cell" key={row.label}>
                  <span>{row.label}</span>
                  <b>{row.value}</b>
                  <small>参考 {row.ref}</small>
                  <i className={row.tone} />
                </div>
              ))}
            </div>
          </section>

          <section className="report-action-section">
            <div className="report-section-head">
              <h2>我的行动清单</h2>
              <span>从今天能做的一件小事开始</span>
            </div>
            <div className="report-actions">
              <div>
                <span className="report-action-time"><Icon name="sun" size={14} />今天</span>
                {patient.actionPlan.today.map((item) => <p key={item}>{item}</p>)}
              </div>
              <div>
                <span className="report-action-time"><Icon name="calendar" size={14} />3 个月内</span>
                {patient.actionPlan.months.map((item) => <p key={item}>{item}</p>)}
              </div>
              <div>
                <span className="report-action-time"><Icon name="walk" size={14} />每天</span>
                {patient.actionPlan.daily.map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
          </section>

          <section className="report-question-section">
            <div className="report-section-head">
              <h2>可以问医生的问题</h2>
              <span>带着具体问题去沟通</span>
            </div>
            <div className="report-questions">
              {questions.map((question) => (
                <p key={question}><span>?</span>{question}</p>
              ))}
            </div>
          </section>

          <div className={`report-followup ${overall.tone}`}>
            <div className="report-followup-time">
              <span>建议复查</span>
              <b>{overall.concernCount === 0 ? '12 个月后' : overall.tone === 'check' ? '尽快安排' : '3 个月内'}</b>
            </div>
            <p>
              {overall.concernCount === 0
                ? '按年度体检计划复查微循环、血压、血脂和空腹血糖即可。'
                : '复查血压、血脂和空腹血糖，并把这份报告带给医生，便于前后对照。'}
            </p>
          </div>

          <section className="report-method-section">
            <div className="report-section-head">
              <h2>这次是怎么检测的</h2>
              <span>无创检测 · 约 18 分钟</span>
            </div>
            <div className="report-methods">
              {areas.map((area) => (
                <div className="report-method" key={area.id}>
                  <span className={`report-method-icon ${area.tone}`}><Icon name={area.icon} size={14} /></span>
                  <b>{area.title}</b>
                  <small>{area.method}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="report-habit-section">
            <div className="report-section-head">
              <h2>一周行动打卡</h2>
              <span>完成一天，就涂一个圆</span>
            </div>
            <div className="report-habit-table">
              <div className="report-habit-row is-head">
                <span>每天的小习惯</span>
                {['一', '二', '三', '四', '五', '六', '日'].map((day) => <i key={day}>{day}</i>)}
              </div>
              {['规律活动 30 分钟', '少盐少油', '睡够 7 小时'].map((habit) => (
                <div className="report-habit-row" key={habit}>
                  <span>{habit}</span>
                  {Array.from({ length: 7 }).map((_, index) => <i key={index} />)}
                </div>
              ))}
            </div>
          </section>

          <div className="report-doctor-note">
            <span>医生提示</span>
            <p>{patient.reportNote}</p>
          </div>

          <div className="report-sign">
            <div>
              <span>总检医生</span>
              <b>{patient.doctor}</b>
              <small>滨江院区智能体检中心 · 心血管内科</small>
            </div>
            <div className="report-sign-mark">林知远</div>
            <div className="report-date-stamp">
              <span>报告日期</span>
              <b>{patient.date}</b>
            </div>
          </div>

          <footer className="report-page-foot report-disclaimer">
            <p>说明：本报告基于本次检测数据生成，仅用于健康风险评估和体检结果解释，不构成疾病诊断，也不能替代医生的面诊、影像或实验室检查。如有胸痛、胸闷、头晕、单侧肢体无力或言语不清等症状，请及时就医。</p>
            <span>第 2 页 / 共 2 页</span>
          </footer>
        </article>
      </div>
    </div>
  )
}
