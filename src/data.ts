export type Tone = 'good' | 'watch' | 'check'
export type AreaId = 'brain' | 'heart' | 'blood' | 'foot'
export type IconName = 'brain' | 'heart' | 'drop' | 'foot'

export const toneLabel: Record<Tone, string> = {
  good: '状态良好',
  watch: '需要关注',
  check: '建议进一步评估',
}

export const toneShortLabel: Record<Tone, string> = {
  good: '良好',
  watch: '需关注',
  check: '建议评估',
}

export interface DetailRow {
  label: string
  value: string
  unit: string
  range: string
  status: Tone | 'none'
  note?: string
}

export interface AreaInfo {
  id: AreaId
  order: number
  title: string
  shortTitle: string
  method: string
  icon: IconName
  tone: Tone
  headline: string
  summary: string
  hotspotNote: string
  whyTitle: string
  why: string[]
  meaning: string
  notMeaning: string
  action: string
  details: DetailRow[]
}

export interface ActionPlan {
  today: string[]
  months: string[]
  daily: string[]
}

export interface Patient {
  id: string
  name: string
  fullName: string
  age: number
  sex: '男' | '女'
  date: string
  time: string
  examNo: string
  reportNo: string
  room: string
  doctor: string
  overallNote: string
  goodNews: string
  actionPlan: ActionPlan
  reportNote: string
  raw: {
    foot: {
      ttr: number
      peak: number
      baseline: number
      nadir: number
      leftTtr: number
      rightTtr: number
      leftPeak: number
      rightPeak: number
      quality: number
      temperature: number
    }
    brain: {
      left: number
      right: number
      min: number
      asym: number
      reserve: number
      quality: number
    }
    blood: {
      tc: number
      tg: number
      ldl: number
      hdl: number
      glu: number
      hba1c: number
      viscosity: number
      hct: number
      hscrp: number
    }
    heart: {
      sbp: number
      dbp: number
      mean: number
      hr: number
      hrv: number
      pp: number
      pwv: number
      abi: number
      spo2: number
      pi: number
    }
  }
}

export interface OverallInfo {
  tone: Tone
  title: string
  lead: string
  note: string
  goodCount: number
  concernCount: number
  checkCount: number
}

const goodDetails: DetailRow = {
  label: '数据质量',
  value: '98.6',
  unit: '%',
  range: '≥ 95%',
  status: 'good',
}

function footTone(p: Patient): Tone {
  const { ttr, peak } = p.raw.foot
  if (ttr <= 90 && peak >= 1.8) return 'good'
  if (ttr > 150 || peak < 1.3) return 'check'
  return 'watch'
}

function brainTone(p: Patient): Tone {
  const { left, right, min, asym } = p.raw.brain
  if (min >= 60 && asym <= 4) return 'good'
  if (min >= 55 && asym <= 7) return 'watch'
  return 'check'
}

function bloodAbnormalCount(p: Patient): number {
  const b = p.raw.blood
  return [
    b.tc > 5.2,
    b.tg > 1.7,
    b.ldl > 3.4,
    b.hdl < 1.0,
    b.glu > 6.1,
    b.hba1c > 6.0,
    b.viscosity > 4.8,
  ].filter(Boolean).length
}

function bloodTone(p: Patient): Tone {
  const b = p.raw.blood
  if (b.ldl >= 4.5 || b.glu >= 7.0 || b.viscosity >= 6.4) return 'check'
  if (bloodAbnormalCount(p) > 0) return 'watch'
  return 'good'
}

function heartTone(p: Patient): Tone {
  const h = p.raw.heart
  if (h.sbp >= 140 || h.dbp >= 90 || h.pwv >= 12) return 'check'
  if (h.sbp >= 130 || h.dbp >= 85 || h.pwv >= 9.5) return 'watch'
  return 'good'
}

function valueRow(
  label: string,
  value: number | string,
  unit: string,
  range: string,
  status: Tone | 'none',
  note?: string,
): DetailRow {
  return { label, value: String(value), unit, range, status, note }
}

function footArea(p: Patient): AreaInfo {
  const r = p.raw.foot
  const tone = footTone(p)
  const good = tone === 'good'
  const why: string[] = []
  if (good) {
    why.push(`松开袖带后，末梢血流约 ${r.ttr} 秒回到接近基线，速度快于 90 秒的理想参考值。`)
    why.push(`峰值充血达到基础血流的 ${r.peak.toFixed(2)} 倍，说明小血管的扩张反应较好。`)
    why.push(`左右足差异为 ${Math.abs(r.leftTtr - r.rightTtr)} 秒，两侧反应比较一致。`)
  } else {
    why.push(`松开袖带后，血流用了约 ${r.ttr} 秒才回到接近基线，比 90 秒的理想速度慢。`)
    if (p.raw.heart.sbp >= 140) why.push(`本次血压为 ${p.raw.heart.sbp}/${p.raw.heart.dbp} mmHg，偏高时小血管需要承受更大的压力。`)
    if (r.ttr > 90) why.push('久坐、运动不足、吸烟或睡眠不好，也会让末梢血流恢复变慢。')
    else why.push('末梢循环的调节能力会随年龄、活动量和血管状态变化。')
  }
  return {
    id: 'foot',
    order: 2,
    title: '足部末梢循环',
    shortTitle: '足部',
    method: '足趾袖带阻断 + 组织灌注传感',
    icon: 'foot',
    tone,
    headline: good ? '脚趾血流恢复速度良好' : tone === 'check' ? '末梢血流恢复明显偏慢' : '脚趾血流恢复偏慢',
    summary: good
      ? '松开袖带后，末梢血流能较快恢复到静息水平。'
      : '松开袖带后，脚趾的小血管恢复供血比理想速度慢，提示末梢微循环储备需要关注。',
    hotspotNote: good ? '恢复速度良好' : '恢复速度偏慢',
    whyTitle: good ? '为什么判断为良好' : '为什么会这样',
    why: why.slice(0, 3),
    meaning: good
      ? '目前末梢小血管的扩张和恢复反应较好，脚趾的血液供应能够及时回到静息水平。'
      : '末梢小血管的调节速度偏慢。它常和血压、血糖、血脂、久坐等因素一起出现，是身体微循环状态的一个提示。',
    notMeaning: good
      ? '单次结果良好，不代表以后不会变化。建议保持活动，并按年度体检计划复查。'
      : '这不等于已经患上血管疾病，也不能单独用来诊断下肢动脉狭窄，需要结合其他检查和医生判断。',
    action: good
      ? '保持规律活动、避免久坐，每年体检时复查即可。'
      : tone === 'check'
        ? '建议尽快咨询医生，评估是否需要做下肢血管超声等进一步检查。'
        : '建议 3 个月内复查足部微循环，并同时关注血压、血脂和血糖。',
    details: [
      valueRow('左足恢复时间', r.leftTtr, '秒', '≤ 90 秒', footTone(p), '松开袖带后恢复到接近基线的时间'),
      valueRow('右足恢复时间', r.rightTtr, '秒', '≤ 90 秒', r.rightTtr <= 90 ? 'good' : r.rightTtr > 150 ? 'check' : 'watch'),
      valueRow('峰值充血倍数', r.peak.toFixed(2), '倍', '≥ 1.80 倍', r.peak >= 1.8 ? 'good' : r.peak < 1.3 ? 'check' : 'watch'),
      valueRow('阻断后最低血流', r.nadir, '%', '—', 'none', '相对于静息状态的血流比例'),
      valueRow('足趾皮肤温度', r.temperature, '℃', '≥ 30℃', r.temperature >= 30 ? 'good' : 'watch'),
      valueRow('数据质量', r.quality, '%', '≥ 95%', r.quality >= 95 ? 'good' : 'watch'),
    ],
  }
}

function brainArea(p: Patient): AreaInfo {
  const r = p.raw.brain
  const tone = brainTone(p)
  const good = tone === 'good'
  const diff = Math.abs(r.left - r.right)
  const why = good
    ? [
        `左脑 ${r.left}%，右脑 ${r.right}%，左右只相差 ${diff} 个百分点。`,
        '两侧供氧都处于常见的静息范围，没有明显偏低。',
        `本次脑氧信号质量 ${r.quality}%，数据完整，结果较可靠。`,
      ]
    : [
        `左脑 ${r.left}%，右脑 ${r.right}%，左右相差 ${diff} 个百分点。`,
        r.min < 60 ? `较低一侧为 ${r.min}%，略低于常见的 60%–80% 参考范围。` : '双侧供氧仍在常见范围内，但均衡性需要关注。',
        '脑部供氧会受到血压、睡眠、呼吸状态和情绪紧张程度影响。',
      ]
  return {
    id: 'brain',
    order: 1,
    title: '大脑供氧',
    shortTitle: '脑部',
    method: '近红外脑氧监测 · 左右额叶',
    icon: 'brain',
    tone,
    headline: good ? '左右脑供氧均衡' : tone === 'check' ? '大脑供氧差异较明显' : '大脑供氧需要关注',
    summary: good
      ? '静息状态下，左右两侧的供氧水平接近，暂未见明显不对称。'
      : '左右两侧的供氧水平存在差异，建议结合血压、睡眠和呼吸状态一起观察。',
    hotspotNote: good ? '左右供氧均衡' : '左右略不对称',
    whyTitle: good ? '为什么判断为良好' : '为什么需要关注',
    why,
    meaning: good
      ? '说明在安静状态下，大脑左右两侧都能获得比较稳定的氧气供应。'
      : '大脑供氧的均衡性可能受到血压、睡眠质量、呼吸状态或紧张情绪的影响，需要结合整体情况判断。',
    notMeaning: good
      ? '这不代表脑血管完全没有问题。如出现持续头晕、言语不清或肢体无力，仍需及时就医。'
      : '单次脑氧结果不等于脑血管疾病诊断，也不能替代头颅影像或专科检查。',
    action: good
      ? '目前无需特别处理。保持规律睡眠和活动，年度体检时复查即可。'
      : '建议把结果交给医生结合血压和神经系统症状判断；如出现持续头晕、言语不清或单侧肢体无力，请及时就医。',
    details: [
      valueRow('左脑氧饱和度', r.left, '%', '60%–80%', r.left < 55 ? 'check' : r.left < 60 ? 'watch' : 'good', '静息状态'),
      valueRow('右脑氧饱和度', r.right, '%', '60%–80%', r.right < 55 ? 'check' : r.right < 60 ? 'watch' : 'good', '静息状态'),
      valueRow('左右差异', diff, '个百分点', '≤ 5', diff <= 4 ? 'good' : diff <= 7 ? 'watch' : 'check'),
      valueRow('脑氧储备', r.reserve, '%', '≥ 15%', r.reserve >= 15 ? 'good' : 'watch', '呼吸挑战后的变化能力'),
      valueRow('数据质量', r.quality, '%', '≥ 95%', r.quality >= 95 ? 'good' : 'watch'),
    ],
  }
}

function bloodArea(p: Patient): AreaInfo {
  const b = p.raw.blood
  const tone = bloodTone(p)
  const good = tone === 'good'
  const highItems: string[] = []
  if (b.ldl > 3.4) highItems.push('坏胆固醇')
  if (b.tg > 1.7) highItems.push('甘油三酯')
  if (b.glu > 6.1) highItems.push('空腹血糖')
  if (b.viscosity > 4.8) highItems.push('血液黏稠度')
  if (b.tc > 5.2 && !highItems.includes('坏胆固醇')) highItems.push('总胆固醇')
  if (b.hdl < 1.0) highItems.push('好胆固醇偏低')

  const why = good
    ? [
        `血液黏稠度 ${b.viscosity.toFixed(1)}，在常见参考范围内，血液流动阻力较小。`,
        `坏胆固醇 ${b.ldl.toFixed(2)} mmol/L，空腹血糖 ${b.glu.toFixed(1)} mmol/L，均处于理想范围。`,
        '血脂、血糖和血液流变学指标之间比较协调。',
      ]
    : [
        highItems.length ? `本次有多项血液指标偏离理想范围：${highItems.slice(0, 3).join('、')}。` : '部分血液指标接近参考上限。',
        b.viscosity > 4.8
          ? `血液黏稠度为 ${b.viscosity.toFixed(1)}，偏高时血液流动会更费力。`
          : '血液黏稠度目前处于可接受范围。',
        '饮食结构、运动量、体重和睡眠都会影响血脂、血糖和血液流变状态。',
      ]

  return {
    id: 'blood',
    order: 3,
    title: '血液状态',
    shortTitle: '血液',
    method: '微流控芯片 · 一次检测多项血液指标',
    icon: 'drop',
    tone,
    headline: good ? '血液状态较平稳' : tone === 'check' ? '多项血液指标需要进一步评估' : '血液偏稠，血脂和血糖需关注',
    summary: good
      ? '血脂、血糖和血液黏稠度都在较理想的范围内。'
      : '血液黏稠度和血脂偏高，空腹血糖也接近上限，会增加血管的负担。',
    hotspotNote: good ? '血脂血糖平稳' : '血液偏稠',
    whyTitle: good ? '为什么判断为良好' : '为什么会这样',
    why: why.slice(0, 3),
    meaning: good
      ? '目前血液的流动状态和代谢指标比较平稳，有利于氧气和营养输送到身体各处。'
      : '血液偏稠、坏胆固醇偏高，会让血液流动更费力，也更容易在血管壁上留下沉积。',
    notMeaning: good
      ? '这不代表以后不会出现变化。保持当前的生活方式，并按年度体检复查即可。'
      : '这不等于一定发生血栓或心脏病。需要结合血压、血糖、体重和医生评估，不能只看单项数值。',
    action: good
      ? '保持均衡饮食和规律运动，按年度体检复查血脂、血糖即可。'
      : tone === 'check'
        ? '建议尽快与医生讨论血脂、血糖和血液黏稠度的综合管理方案。'
        : '建议 3 个月内复查血脂、空腹血糖和糖化血红蛋白，并由医生评估是否需要进一步干预。',
    details: [
      valueRow('总胆固醇', b.tc.toFixed(2), 'mmol/L', '< 5.20', b.tc > 5.2 ? 'watch' : 'good'),
      valueRow('甘油三酯', b.tg.toFixed(2), 'mmol/L', '< 1.70', b.tg > 1.7 ? 'watch' : 'good'),
      valueRow('坏胆固醇（LDL-C）', b.ldl.toFixed(2), 'mmol/L', '< 3.40', b.ldl > 3.4 ? (b.ldl >= 4.5 ? 'check' : 'watch') : 'good'),
      valueRow('好胆固醇（HDL-C）', b.hdl.toFixed(2), 'mmol/L', '≥ 1.00', b.hdl < 1.0 ? 'watch' : 'good'),
      valueRow('空腹血糖', b.glu.toFixed(1), 'mmol/L', '3.9–6.1', b.glu > 6.1 ? (b.glu >= 7 ? 'check' : 'watch') : 'good'),
      valueRow('糖化血红蛋白', b.hba1c.toFixed(1), '%', '< 6.0', b.hba1c > 6.0 ? 'watch' : 'good'),
      valueRow('血液黏稠度', b.viscosity.toFixed(1), 'mPa·s', '3.5–4.8', b.viscosity > 4.8 ? (b.viscosity >= 6.4 ? 'check' : 'watch') : 'good'),
      valueRow('红细胞压积', b.hct.toFixed(1), '%', '40–50', b.hct > 50 ? 'watch' : 'good'),
      valueRow('高敏 C 反应蛋白', b.hscrp.toFixed(1), 'mg/L', '< 3.0', b.hscrp >= 3 ? 'watch' : 'good'),
    ],
  }
}

function heartArea(p: Patient): AreaInfo {
  const h = p.raw.heart
  const tone = heartTone(p)
  const good = tone === 'good'
  const why = good
    ? [
        `本次血压 ${h.sbp}/${h.dbp} mmHg，处于理想范围。`,
        `血管弹性指标 cf-PWV 为 ${h.pwv.toFixed(1)} m/s，血管弹性较好。`,
        `心率 ${h.hr} 次/分，节律规则，心脏负担较小。`,
      ]
    : [
        `本次血压 ${h.sbp}/${h.dbp} mmHg，高于理想范围（< 120/80 mmHg）。`,
        `脉压 ${h.pp} mmHg，血管弹性指标 cf-PWV ${h.pwv.toFixed(1)} m/s，提示血管弹性有所下降。`,
        '血压偏高会让心脏泵血更费力，也会增加小血管的负担。',
      ]
  return {
    id: 'heart',
    order: 4,
    title: '心脏与血管',
    shortTitle: '心血管',
    method: '连续血压 + 脉搏波 + 血管弹性',
    icon: 'heart',
    tone,
    headline: good ? '血压与血管弹性良好' : tone === 'check' ? '血压偏高，建议进一步评估' : '血压偏高，血管弹性需关注',
    summary: good
      ? '血压、心率和血管弹性都在较理想的范围。'
      : '血压高于理想范围，血管弹性也略有下降，心脏需要更用力地把血液泵到全身。',
    hotspotNote: good ? '血压平稳' : '血压偏高',
    whyTitle: good ? '为什么判断为良好' : '为什么会这样',
    why,
    meaning: good
      ? '心脏泵血时血管能够较好地扩张和回弹，整体血流阻力较小。'
      : '血压偏高、血管弹性下降，会让心脏和血管长期承受更大的压力，也是微循环风险的重要因素。',
    notMeaning: good
      ? '单次血压正常不代表永远不会升高，仍建议在安静状态下定期测量。'
      : '一次测量不能确诊高血压。需要在安静状态下规范复测，并由医生结合多次结果判断。',
    action: good
      ? '保持低盐饮食和规律运动，每年体检时测量血压即可。'
      : '建议静坐 5 分钟后复测血压；如仍高于 140/90 mmHg，请到心内科进一步评估。',
    details: [
      valueRow('高压（收缩压）', h.sbp, 'mmHg', '< 130', h.sbp >= 140 ? 'check' : h.sbp >= 130 ? 'watch' : 'good'),
      valueRow('低压（舒张压）', h.dbp, 'mmHg', '< 85', h.dbp >= 90 ? 'check' : h.dbp >= 85 ? 'watch' : 'good'),
      valueRow('脉压', h.pp, 'mmHg', '30–50', h.pp > 50 ? 'watch' : 'good'),
      valueRow('平均动脉压', h.mean, 'mmHg', '70–105', h.mean > 105 ? 'watch' : 'good'),
      valueRow('心率', h.hr, '次/分', '60–100', h.hr >= 60 && h.hr <= 100 ? 'good' : 'watch'),
      valueRow('心率变异性（SDNN）', h.hrv, 'ms', '≥ 50', h.hrv >= 50 ? 'good' : h.hrv >= 35 ? 'watch' : 'check'),
      valueRow('血管弹性（cf-PWV）', h.pwv.toFixed(1), 'm/s', '< 9.0', h.pwv >= 12 ? 'check' : h.pwv >= 9.5 ? 'watch' : 'good'),
      valueRow('踝臂指数（ABI）', h.abi.toFixed(2), '', '1.00–1.40', h.abi < 0.9 ? 'check' : h.abi < 1.0 ? 'watch' : 'good'),
      valueRow('血氧饱和度', h.spo2, '%', '≥ 95%', h.spo2 >= 95 ? 'good' : 'watch'),
    ],
  }
}

export function getAreas(p: Patient): AreaInfo[] {
  return [brainArea(p), footArea(p), bloodArea(p), heartArea(p)]
}

export function getOverall(p: Patient): OverallInfo {
  const areas = getAreas(p)
  const goodCount = areas.filter((a) => a.tone === 'good').length
  const concernCount = areas.length - goodCount
  const checkCount = areas.filter((a) => a.tone === 'check').length
  let tone: Tone = 'good'
  if (checkCount >= 2) tone = 'check'
  else if (concernCount > 0) tone = 'watch'

  const title = tone === 'good' ? '状态良好' : tone === 'check' ? '建议进一步评估' : '需要关注'
  const lead =
    concernCount === 0
      ? '4 个评估部位均处于良好状态。'
      : goodCount === 0
        ? '4 个评估部位中，4 个需要关注。'
        : `4 个评估部位中，${goodCount} 个状态良好，${concernCount} 个需要关注。`

  return { tone, title, lead, note: p.overallNote, goodCount, concernCount, checkCount }
}

export const patients: Patient[] = [
  {
    id: 'zhang',
    name: '张先生',
    fullName: '张建国',
    age: 56,
    sex: '男',
    date: '2025年5月18日',
    time: '09:42',
    examNo: 'TJ20250518001',
    reportNo: 'MX-20250518-001',
    room: '滨江院区 · 微循环评估室 03',
    doctor: '林知远',
    overallNote: '这不等于已经患病。多数提示可以通过复查、生活方式调整和医生评估进一步明确。',
    goodNews: '您的大脑左右供氧均衡，静息状态下供氧稳定。',
    actionPlan: {
      today: [
        '把这份报告给总检医生看，确认下一步安排',
        '静坐 5 分钟后，再测一次血压',
      ],
      months: [
        '3 个月内复查血压、血脂和空腹血糖',
        '和医生讨论是否需要做下肢血管或颈动脉超声',
      ],
      daily: [
        '每天快走 30 分钟，减少连续久坐',
        '少盐、少油炸，晚餐吃到七分饱',
        '保证 7 小时睡眠，戒烟并限制饮酒',
      ],
    },
    reportNote: '建议结合本次体检的血压、血脂、血糖结果，由总检医生综合判断。',
    raw: {
      foot: {
        ttr: 132,
        peak: 1.42,
        baseline: 68,
        nadir: 24,
        leftTtr: 132,
        rightTtr: 118,
        leftPeak: 1.42,
        rightPeak: 1.56,
        quality: 98.6,
        temperature: 30.8,
      },
      brain: { left: 66, right: 68, min: 64, asym: 2, reserve: 18.4, quality: 97.9 },
      blood: {
        tc: 6.32,
        tg: 2.85,
        ldl: 4.12,
        hdl: 0.92,
        glu: 6.8,
        hba1c: 6.1,
        viscosity: 5.8,
        hct: 47.2,
        hscrp: 2.8,
      },
      heart: {
        sbp: 142,
        dbp: 91,
        mean: 108,
        hr: 78,
        hrv: 32,
        pp: 51,
        pwv: 10.8,
        abi: 0.94,
        spo2: 97,
        pi: 2.8,
      },
    },
  },
  {
    id: 'li',
    name: '李女士',
    fullName: '李清怡',
    age: 46,
    sex: '女',
    date: '2025年5月18日',
    time: '10:18',
    examNo: 'TJ20250518002',
    reportNo: 'MX-20250518-002',
    room: '滨江院区 · 微循环评估室 03',
    doctor: '林知远',
    overallNote: '本次未发现需要特别关注的微循环风险。保持目前的生活方式，并按年度体检计划复查即可。',
    goodNews: '四个评估部位均处于良好状态，说明目前的微循环整体运转较平稳。',
    actionPlan: {
      today: ['保存这份报告，作为下一次体检的对照'],
      months: ['按年度体检计划复查微循环、血压、血脂和血糖'],
      daily: [
        '保持每周 150 分钟中等强度运动',
        '饮食均衡，少盐少糖',
        '保持规律睡眠，继续不吸烟',
      ],
    },
    reportNote: '本次结果整体良好，建议继续保持当前的生活方式，并按计划进行年度复查。',
    raw: {
      foot: {
        ttr: 74,
        peak: 2.12,
        baseline: 72,
        nadir: 22,
        leftTtr: 74,
        rightTtr: 70,
        leftPeak: 2.12,
        rightPeak: 2.06,
        quality: 99.1,
        temperature: 32.1,
      },
      brain: { left: 71, right: 72, min: 69, asym: 1, reserve: 24.6, quality: 98.4 },
      blood: {
        tc: 4.3,
        tg: 1.02,
        ldl: 2.42,
        hdl: 1.58,
        glu: 5.0,
        hba1c: 5.3,
        viscosity: 4.1,
        hct: 40.8,
        hscrp: 1.2,
      },
      heart: {
        sbp: 116,
        dbp: 74,
        mean: 88,
        hr: 66,
        hrv: 52,
        pp: 42,
        pwv: 7.8,
        abi: 1.08,
        spo2: 98,
        pi: 3.6,
      },
    },
  },
  {
    id: 'wang',
    name: '王先生',
    fullName: '王志强',
    age: 64,
    sex: '男',
    date: '2025年5月18日',
    time: '10:56',
    examNo: 'TJ20250518003',
    reportNo: 'MX-20250518-003',
    room: '滨江院区 · 微循环评估室 03',
    doctor: '林知远',
    overallNote: '多个环节需要进一步评估。建议尽快与医生沟通，制定复查和干预计划。',
    goodNews: '心跳节律规则，本次采集的数据完整，可为后续评估提供参考。',
    actionPlan: {
      today: [
        '尽快预约心内科或内分泌科医生解读报告',
        '如出现胸闷、胸痛、头晕或单侧肢体无力，请及时就医',
      ],
      months: [
        '按医生建议完善血管、血脂和血糖相关检查',
        '开始记录家庭血压，复诊时带给医生',
      ],
      daily: [
        '从每天 20 分钟缓步走开始，量力而行',
        '严格少盐，减少加工食品和含糖饮料',
        '保证睡眠，戒烟并避免二手烟',
      ],
    },
    reportNote: '多项指标提示心血管和微循环负担较重，建议尽快由专科医生进行综合评估。',
    raw: {
      foot: {
        ttr: 168,
        peak: 1.2,
        baseline: 62,
        nadir: 16,
        leftTtr: 168,
        rightTtr: 154,
        leftPeak: 1.2,
        rightPeak: 1.28,
        quality: 96.8,
        temperature: 29.4,
      },
      brain: { left: 59, right: 64, min: 57, asym: 5, reserve: 14.1, quality: 96.5 },
      blood: {
        tc: 7.1,
        tg: 3.6,
        ldl: 4.9,
        hdl: 0.82,
        glu: 7.9,
        hba1c: 7.1,
        viscosity: 6.4,
        hct: 49.1,
        hscrp: 4.6,
      },
      heart: {
        sbp: 158,
        dbp: 96,
        mean: 117,
        hr: 88,
        hrv: 24,
        pp: 62,
        pwv: 13.2,
        abi: 0.86,
        spo2: 96,
        pi: 2.1,
      },
    },
  },
]

export function getPatient(id: string): Patient {
  return patients.find((p) => p.id === id) ?? patients[0]
}
