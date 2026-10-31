import { useId } from 'react'
import type { AreaId, AreaInfo } from './data'
import { toneShortLabel } from './data'
import { Icon } from './Icons'

interface BodyMapProps {
  areas: AreaInfo[]
  onSelect: (id: AreaId) => void
}

const pinPosition: Record<AreaId, { left: string; top: string }> = {
  brain: { left: '50%', top: '14.5%' },
  heart: { left: '56.2%', top: '35.6%' },
  blood: { left: '50%', top: '48.5%' },
  foot: { left: '40.5%', top: '91%' },
}

const cardPosition: Record<AreaId, { left: string; top: string }> = {
  brain: { left: '62%', top: '6%' },
  heart: { left: '-1%', top: '31%' },
  blood: { left: '62%', top: '44%' },
  foot: { left: '-1%', top: '77%' },
}

export function BodyMap({ areas, onSelect }: BodyMapProps) {
  const rawId = useId()
  const uid = rawId.replace(/:/g, '')
  const byId = Object.fromEntries(areas.map((area) => [area.id, area])) as Record<AreaId, AreaInfo>

  return (
    <div className="body-map">
      <div className="map-orb map-orb-a" />
      <div className="map-orb map-orb-b" />
      <div className="map-topline">
        <span className="map-title"><i className="live-dot" />全身风险地图</span>
        <span className="map-hint">点击身体部位查看解释</span>
      </div>

      <svg className="body-svg" viewBox="0 0 520 660" role="img" aria-label="全身微循环风险地图，标注脑、心脏、血液与足部">
        <defs>
          <linearGradient id={`${uid}-body`} x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0" stopColor="#f4fbf7" />
            <stop offset="0.45" stopColor="#d8efe7" />
            <stop offset="1" stopColor="#acd9cd" />
          </linearGradient>
          <linearGradient id={`${uid}-vessel`} x1="0" y1="0" x2="0.7" y2="1">
            <stop offset="0" stopColor="#3dc4ab" />
            <stop offset="0.45" stopColor="#14957f" />
            <stop offset="1" stopColor="#0f7e70" />
          </linearGradient>
          <radialGradient id={`${uid}-halo`}>
            <stop offset="0" stopColor="#72d9c3" stopOpacity="0.32" />
            <stop offset="0.55" stopColor="#72d9c3" stopOpacity="0.09" />
            <stop offset="1" stopColor="#72d9c3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${uid}-heart`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3b4a3" />
            <stop offset="1" stopColor="#cf725d" />
          </linearGradient>
          <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${uid}-soft`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <ellipse cx="260" cy="641" rx="137" ry="14" fill="#93c9bd" opacity="0.2" />
        <circle cx="260" cy="330" r="232" fill={`url(#${uid}-halo)`} opacity="0.65" />
        <circle cx="260" cy="330" r="204" fill="none" stroke="#84c9b9" strokeOpacity="0.22" strokeDasharray="1 9" />
        <circle cx="260" cy="330" r="236" fill="none" stroke="#84c9b9" strokeOpacity="0.12" />

        <g className="body-figure" fill={`url(#${uid}-body)`} stroke="#93caba" strokeWidth="1.25">
          <path className="body-shape" d="M226 368C218 411 213 461 212 510L210 560C209 580 203 594 190 604C178 614 182 627 200 630C220 634 236 621 240 599L247 544C252 496 256 432 260 388Z" />
          <path className="body-shape" d="M294 368C302 411 307 461 308 510L310 560C311 580 317 594 330 604C342 614 338 627 320 630C300 634 284 621 280 599L273 544C268 496 264 432 260 388Z" />
          <path className="body-foot" d="M196 603C183 606 172 614 169 624C167 633 177 639 190 636L234 628L233 607Z" />
          <path className="body-foot" d="M324 603C337 606 348 614 351 624C353 633 343 639 330 636L286 628L287 607Z" />
          <path className="body-shape" d="M198 190C178 203 167 233 159 268L147 327L136 386C133 402 136 417 147 421C158 425 166 413 168 399L180 343L192 286C200 257 208 229 217 208Z" />
          <path className="body-shape" d="M322 190C342 203 353 233 361 268L373 327L384 386C387 402 384 417 373 421C362 425 354 413 352 399L340 343L328 286C320 257 312 229 303 208Z" />
          <path className="body-shape" d="M260 170C230 170 204 178 192 197C181 216 177 252 174 287L168 341C166 363 176 379 196 384L324 384C344 379 354 363 352 341L346 287C343 252 339 216 328 197C316 178 290 170 260 170Z" />
          <path className="body-shape" d="M241 139L241 173C250 182 270 182 279 173L279 139Z" />
          <ellipse className="body-shape" cx="260" cy="96" rx="43" ry="51" />
          <ellipse className="body-shape body-ear" cx="216" cy="102" rx="7" ry="13" />
          <ellipse className="body-shape body-ear" cx="304" cy="102" rx="7" ry="13" />
          <ellipse className="body-hand" cx="143" cy="430" rx="10" ry="16" transform="rotate(22 143 430)" />
          <ellipse className="body-hand" cx="377" cy="430" rx="10" ry="16" transform="rotate(-22 377 430)" />
        </g>

        <g className={`brain-tissue ${byId.brain.tone}`} aria-hidden="true">
          <path d="M257 72C242 67 226 77 221 93C217 109 229 122 245 120C253 119 257 113 257 105Z" />
          <path d="M263 72C278 67 294 77 299 93C303 109 291 122 275 120C267 119 263 113 263 105Z" />
          <path d="M257 111C251 116 250 123 256 127C259 129 261 127 263 124C265 127 267 129 270 127C276 123 275 116 269 111Z" />
        </g>

        <g className="body-highlight">
          <path d="M210 211C194 246 184 288 174 330" stroke="white" strokeOpacity="0.4" strokeWidth="9" strokeLinecap="round" />
          <path d="M233 196C222 236 215 278 210 326" stroke="white" strokeOpacity="0.24" strokeWidth="7" strokeLinecap="round" />
          <ellipse cx="260" cy="78" rx="25" ry="12" fill="white" opacity="0.16" />
          <path d="M260 205C246 217 239 240 237 264" stroke="white" strokeOpacity="0.22" strokeWidth="6" strokeLinecap="round" />
        </g>

        <path
          className="heart-organ"
          d="M292 220C283 209 266 216 265 229C264 244 280 254 292 266C304 254 320 244 319 229C318 216 301 209 292 220Z"
          fill={`url(#${uid}-heart)`}
          stroke="#c96d58"
          strokeWidth="1.8"
        />

        <g className="arterial-system" fill="none" stroke={`url(#${uid}-vessel)`} strokeLinecap="round" strokeLinejoin="round" filter={`url(#${uid}-glow)`}>
          <g className="vessel-glow" aria-hidden="true">
            <path d="M292 220C291 211 287 204 281 201C275 198 268 200 266 207C263 216 266 232 268 250C271 282 268 320 265 350C263 369 262 380 260 390" />
            <path d="M278 201C264 195 253 194 247 187C242 180 242 162 240 144C239 130 238 118 236 107" />
            <path d="M284 202C289 195 291 184 291 172C291 156 289 145 288 132C287 120 285 112 283 104" />
            <path d="M254 195C240 198 224 199 210 203C201 206 195 214 192 224C184 249 176 278 169 309C162 340 155 372 150 402C148 413 146 422 146 429" />
            <path d="M286 203C301 197 316 199 330 206C342 212 351 220 357 232C362 253 367 283 371 313C376 344 380 376 382 405C383 415 383 422 382 429" />
            <path d="M260 390C250 397 245 411 242 429C237 460 232 493 229 522C226 550 223 572 220 591" />
            <path d="M260 390C270 397 275 411 278 429C283 460 288 493 291 522C294 550 297 572 300 591" />
          </g>

          <g className="arterial-tree">
            {/* Aorta: heart → arch → descending → bifurcation */}
            <path className="artery-main" d="M292 220C291 211 287 204 281 201C275 198 268 200 266 207C263 216 266 232 268 250C271 282 268 320 265 350C263 369 262 380 260 390" />

            {/* Right common carotid → brain (patient right = viewer left) */}
            <path className="artery-carotid" d="M278 201C264 195 253 194 247 187C242 180 242 162 240 144C239 130 238 118 236 107" />
            <path className="artery-brain" d="M236 107C244 99 252 96 260 96C268 96 276 99 283 104" />
            <path className="artery-brain" d="M236 107C230 100 225 93 221 85" />
            <path className="artery-brain" d="M236 107C241 98 247 92 253 88" />
            <path className="artery-brain" d="M221 85C227 77 236 77 242 84C247 90 244 97 236 100" />
            <path className="artery-brain" d="M253 88C259 82 267 83 272 89C276 95 273 101 265 102" />
            <path className="artery-brain" d="M260 96C258 88 257 80 258 72" />
            <path className="artery-brain" d="M260 96C262 87 264 80 266 73" />

            {/* Left common carotid → brain (patient left = viewer right) */}
            <path className="artery-carotid" d="M284 202C289 195 291 184 291 172C291 156 289 145 288 132C287 120 285 112 283 104" />
            <path className="artery-brain" d="M283 104C289 97 294 90 298 83" />
            <path className="artery-brain" d="M283 104C277 96 272 92 267 88" />
            <path className="artery-brain" d="M298 83C292 76 284 76 278 82C273 89 277 97 284 100" />
            <path className="artery-brain" d="M267 88C261 82 253 83 249 89C245 95 248 101 256 102" />
            <path className="artery-brain" d="M283 104C277 98 270 96 264 96" />

            {/* Right subclavian → arm → hand */}
            <path className="artery-subclavian" d="M254 195C240 198 224 199 210 203C201 206 195 214 192 224" />
            <path className="artery-arm" d="M192 224C184 249 176 278 169 309C162 340 155 372 150 402C148 413 146 422 146 429" />
            <path className="artery-arm-branch" d="M169 309C162 330 157 351 153 372" />
            <path className="artery-hand" d="M146 429C138 435 138 446 147 449C155 452 160 443 157 436C154 430 150 428 146 429Z" />

            {/* Left subclavian → arm → hand */}
            <path className="artery-subclavian" d="M286 203C301 197 316 199 330 206C342 212 351 220 357 232" />
            <path className="artery-arm" d="M357 232C362 253 367 283 371 313C376 344 380 376 382 405C383 415 383 422 382 429" />
            <path className="artery-arm-branch" d="M371 313C376 334 379 355 380 376" />
            <path className="artery-hand" d="M382 429C390 435 390 446 381 449C373 452 368 443 371 436C374 430 378 428 382 429Z" />

            {/* Abdominal aorta bifurcation → iliac / femoral → tibial → foot */}
            <path className="artery-leg" d="M260 390C250 397 245 411 242 429C237 460 232 493 229 522C226 550 223 572 220 591" />
            <path className="artery-leg" d="M260 390C270 397 275 411 278 429C283 460 288 493 291 522C294 550 297 572 300 591" />
            <path className="artery-leg-branch" d="M229 510C221 534 215 558 210 582" />
            <path className="artery-leg-branch" d="M229 510C236 532 240 555 242 579" />
            <path className="artery-leg-branch" d="M291 510C299 534 305 558 310 582" />
            <path className="artery-leg-branch" d="M291 510C284 532 280 555 278 579" />
            <path className="artery-foot" d="M210 582C200 591 194 601 194 611C194 619 203 622 209 614C215 606 217 596 215 588C214 584 212 582 210 582Z" />
            <path className="artery-foot" d="M242 579C246 590 244 601 238 610C233 617 226 613 229 605C233 596 236 588 237 581C238 578 240 577 242 579Z" />
            <path className="artery-foot" d="M310 582C320 591 326 601 326 611C326 619 317 622 311 614C305 606 303 596 305 588C306 584 308 582 310 582Z" />
            <path className="artery-foot" d="M278 579C274 590 276 601 282 610C287 617 294 613 291 605C287 596 284 588 283 581C282 578 280 577 278 579Z" />
          </g>
        </g>

        <g className="vessel-flow">
          <circle r="3.1">
            <animateMotion dur="6.2s" repeatCount="indefinite" path="M292 220C291 211 287 204 281 201C275 198 268 200 266 207C263 216 266 232 268 250C271 282 268 320 265 350C263 369 262 380 260 390" />
          </circle>
          <circle r="2.6">
            <animateMotion dur="5.6s" begin="1.2s" repeatCount="indefinite" path="M278 201C264 195 253 194 247 187C242 180 242 162 240 144C239 130 238 118 236 107C244 99 252 96 260 96" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="7.4s" begin="0.7s" repeatCount="indefinite" path="M254 195C240 198 224 199 210 203C201 206 195 214 192 224C184 249 176 278 169 309C162 340 155 372 150 402C148 413 146 422 146 429" />
          </circle>
          <circle r="2.6">
            <animateMotion dur="7.8s" begin="2.1s" repeatCount="indefinite" path="M260 390C250 397 245 411 242 429C237 460 232 493 229 522C226 550 223 572 220 591" />
          </circle>
        </g>

        <g className="body-auras">
          <circle cx="260" cy="96" r="60" className={`body-aura ${byId.brain.tone}`} />
          <circle cx="292" cy="234" r="41" className={`body-aura ${byId.heart.tone}`} />
          <circle cx="260" cy="320" r="47" className={`body-aura ${byId.blood.tone}`} />
          <circle cx="210" cy="608" r="34" className={`body-aura ${byId.foot.tone}`} />
        </g>
      </svg>

      {areas.map((area) => (
        <button
          type="button"
          key={area.id}
          className={`map-pin ${area.tone}`}
          style={pinPosition[area.id]}
          onClick={() => onSelect(area.id)}
          aria-label={`查看${area.title}：${area.headline}`}
        >
          <span className="pin-halo" />
          <span className="pin-core" />
        </button>
      ))}

      {areas.map((area) => (
        <button
          type="button"
          key={area.id}
          className={`hotspot-card ${area.tone}`}
          style={cardPosition[area.id]}
          onClick={() => onSelect(area.id)}
        >
          <span className="hotspot-icon"><Icon name={area.icon} size={19} /></span>
          <span className="hotspot-copy">
            <span className="hotspot-label">
              {area.shortTitle}
              <em>{toneShortLabel[area.tone]}</em>
            </span>
            <strong>{area.hotspotNote}</strong>
          </span>
          <Icon name="chevron-right" size={15} className="hotspot-arrow" />
        </button>
      ))}

      <div className="map-legend">
        <span><i className="legend-dot good" />良好</span>
        <span><i className="legend-dot watch" />需关注</span>
        <span><i className="legend-dot check" />建议评估</span>
      </div>

      <div className="map-mobile-areas">
        {areas.map((area) => (
          <button type="button" key={area.id} className={`mobile-area ${area.tone}`} onClick={() => onSelect(area.id)}>
            <span className="mobile-area-icon"><Icon name={area.icon} size={18} /></span>
            <span>
              <b>{area.shortTitle}</b>
              <small>{area.hotspotNote}</small>
            </span>
            <Icon name="chevron-right" size={15} />
          </button>
        ))}
      </div>
    </div>
  )
}
