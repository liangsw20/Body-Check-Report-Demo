import { useId } from 'react'
import type { AreaId, AreaInfo } from './data'
import { toneShortLabel } from './data'
import { Icon } from './Icons'

interface BodyMapProps {
  areas: AreaInfo[]
  onSelect: (id: AreaId) => void
}

const pinPosition: Record<AreaId, { left: string; top: string }> = {
  brain: { left: '50%', top: '16%' },
  heart: { left: '53%', top: '32.5%' },
  blood: { left: '50%', top: '52.5%' },
  foot: { left: '40%', top: '89.5%' },
}

const cardPosition: Record<AreaId, { left: string; top: string }> = {
  brain: { left: '62%', top: '8%' },
  heart: { left: '1%', top: '30%' },
  blood: { left: '62%', top: '49%' },
  foot: { left: '1%', top: '77%' },
}

export function BodyMap({ areas, onSelect }: BodyMapProps) {
  const rawId = useId()
  const uid = rawId.replace(/:/g, '')
  const byId = Object.fromEntries(areas.map((area) => [area.id, area])) as Record<AreaId, AreaInfo>

  return (
    <div className="body-map body-map--anatomical">
      <div className="map-topline">
        <span className="map-title"><i className="live-dot" />全身风险地图</span>
        <span className="map-hint">点击身体部位查看风险详情</span>
      </div>

      <svg
        className="body-svg body-svg--anatomical"
        viewBox="0 0 640 1000"
        role="img"
        aria-label="人体正面解剖示意图，展示脑、肺、心脏、腹部器官及主要动静脉"
      >
        <defs>
          <linearGradient id={`${uid}-skin`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f7f8f7" />
          </linearGradient>
          <linearGradient id={`${uid}-artery`} x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#ed927f" />
            <stop offset="1" stopColor="#d86653" />
          </linearGradient>
          <linearGradient id={`${uid}-vein`} x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#527985" />
            <stop offset="1" stopColor="#385963" />
          </linearGradient>
          <linearGradient id={`${uid}-heart`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f28d79" />
            <stop offset="1" stopColor="#d95f50" />
          </linearGradient>
          <clipPath id={`${uid}-body-clip`}>
            <path d="M320 174 C283 174 245 183 220 205 C198 224 188 257 185 294 L178 390 C174 427 164 457 151 488 L128 555 C122 573 127 587 140 591 C151 594 161 583 168 565 L199 496 C214 464 225 432 231 399 L238 360 C244 393 249 424 250 458 C250 496 242 539 238 582 C232 641 237 704 245 761 C251 814 263 864 276 910 C280 925 269 942 251 956 L220 977 C205 989 214 1000 233 995 L283 979 C300 972 309 958 306 941 L294 870 C288 825 291 777 298 728 L309 572 L331 572 L342 728 C349 777 352 825 346 870 L334 941 C331 958 340 972 357 979 L407 995 C426 1000 435 989 420 977 L389 956 C371 942 360 925 364 910 C377 864 389 814 395 761 C403 704 408 641 402 582 C398 539 390 496 390 458 C391 424 396 393 402 360 L409 399 C415 432 426 464 441 496 L472 565 C479 583 489 594 500 591 C513 587 518 573 512 555 L489 488 C476 457 466 427 462 390 L455 294 C452 257 442 224 420 205 C395 183 357 174 320 174 Z" />
          </clipPath>
        </defs>

        {/* Grounding and subtle background accents */}
        <line x1="52" y1="950" x2="588" y2="950" stroke="#d9dfdc" strokeWidth="1" />
        <g fill="#f4f5f4">
          <circle cx="100" cy="160" r="30" />
          <circle cx="535" cy="320" r="22" />
          <circle cx="105" cy="700" r="34" />
          <circle cx="535" cy="810" r="28" />
        </g>

        {/* Outer silhouette: front-facing, neutral and deliberately unobtrusive */}
        <g transform="translate(320 500) scale(1.35 0.92) translate(-320 -500)">
        <g fill={`url(#${uid}-skin)`} stroke="#526168" strokeWidth="1.35" strokeLinejoin="round">
          {/* legs and feet */}
          <path d="M250 545 C244 604 239 674 245 741 C250 801 263 864 276 910 C280 925 269 942 251 956 L220 977 C205 989 214 1000 233 995 L283 979 C300 972 309 958 306 941 L294 870 C288 825 291 777 298 728 L309 572 Z" />
          <path d="M390 545 C396 604 401 674 395 741 C390 801 377 864 364 910 C360 925 371 942 389 956 L420 977 C435 989 426 1000 407 995 L357 979 C340 972 331 958 334 941 L346 870 C352 825 349 777 342 728 L331 572 Z" />
          {/* torso, shoulders and neck */}
          <path d="M291 130 L291 188 C279 196 259 199 238 206 C211 216 196 237 189 270 C183 303 181 351 178 390 C176 422 166 458 151 488 L128 555 C122 573 127 587 140 591 C151 594 161 583 168 565 L199 496 C214 464 225 432 231 399 L238 360 C244 393 249 424 250 458 C251 492 247 523 245 545 L395 545 C393 523 389 492 390 458 C391 424 396 393 402 360 L409 399 C415 432 426 464 441 496 L472 565 C479 583 489 594 500 591 C513 587 518 573 512 555 L489 488 C474 458 464 422 462 390 C459 351 457 303 451 270 C444 237 429 216 402 206 C381 199 361 196 349 188 L349 130 Z" />
          {/* head and ears */}
          <path d="M320 27 C288 27 269 49 269 84 C269 111 279 133 296 145 C303 150 312 153 320 153 C328 153 337 150 344 145 C361 133 371 111 371 84 C371 49 352 27 320 27 Z" />
          <path d="M270 78 C258 74 256 91 264 111 C268 120 275 122 280 115" />
          <path d="M370 78 C382 74 384 91 376 111 C372 120 365 122 360 115" />
          {/* hands and fingers */}
          <path d="M128 555 C116 562 108 574 105 588 C103 598 111 603 119 597 L142 578 Z" />
          <path d="M472 555 C484 562 492 574 495 588 C497 598 489 603 481 597 L458 578 Z" />
          <path d="M109 589 C106 610 107 632 111 646 C114 655 122 653 123 644 L122 608 M121 596 C119 620 121 646 126 659 C130 667 137 663 137 654 L134 608 M136 594 C136 620 140 645 146 655 C151 663 157 658 154 648 L148 600 M151 587 C154 609 160 629 168 638 C174 645 180 639 176 630 L163 590" />
          <path d="M491 589 C494 610 493 632 489 646 C486 655 478 653 477 644 L478 608 M479 596 C481 620 479 646 474 659 C470 667 463 663 463 654 L466 608 M464 594 C464 620 460 645 454 655 C449 663 443 658 446 648 L452 600 M449 587 C446 609 440 629 432 638 C426 645 420 639 424 630 L437 590" />
        </g>

        {/* Soft organ shapes sit behind the vascular tree */}
        <g className="organs" stroke="#b8c7c3" strokeWidth="1.15" strokeLinejoin="round">
          <g className="brain-organ" fill="#eef1ef">
            <path d="M319 47 C304 38 286 48 283 66 C271 76 278 96 290 101 C292 118 309 126 320 116 Z" />
            <path d="M321 47 C336 38 354 48 357 66 C369 76 362 96 350 101 C348 118 331 126 320 116 Z" />
            <g fill="none" stroke="#91a6a2" strokeWidth="1">
              <path d="M291 63 C301 54 309 62 306 73 C299 78 298 88 306 94 M345 63 C335 54 327 62 330 73 C337 78 338 88 330 94 M320 53 L320 111 M287 82 C297 79 301 86 298 96 M353 82 C343 79 339 86 342 96" />
            </g>
          </g>
          <g className="lung-organ" fill="#e8ecea">
            <path d="M305 218 C280 205 253 220 246 251 C237 289 246 333 269 354 C282 366 299 359 304 341 Z" />
            <path d="M335 218 C360 205 387 220 394 251 C403 289 394 333 371 354 C358 366 341 359 336 341 Z" />
            <g fill="none" stroke="#94aaa4" strokeWidth="1.4" strokeLinecap="round">
              <path d="M320 203 L320 258 M320 246 L293 264 L278 287 M320 246 L347 264 L362 287 M293 264 L278 250 M293 264 L269 276 M347 264 L362 250 M347 264 L371 276 M278 287 L265 311 M362 287 L375 311" />
            </g>
          </g>
          <g className="liver-organ" fill="#e7e9e6">
            <path d="M260 374 C278 357 304 360 317 375 C311 399 290 418 263 414 C251 405 250 388 260 374 Z" />
          </g>
          <g className="kidney-organ" fill="#e9ece9">
            <path d="M276 425 C259 414 249 431 253 451 C257 470 272 478 283 466 C289 454 286 436 276 425 Z" />
            <path d="M364 425 C381 414 391 431 387 451 C383 470 368 478 357 466 C351 454 354 436 364 425 Z" />
          </g>
          <g className="intestine-organ" fill="none" stroke="#d7a69a" strokeWidth="2" strokeLinecap="round">
            <path d="M287 477 C270 479 269 493 282 499 C296 506 342 506 356 499 C369 493 368 479 351 477 M283 511 C270 520 278 534 292 531 C306 528 307 514 320 514 C333 514 334 528 348 531 C362 534 370 520 357 511 M286 540 C299 548 306 539 320 539 C334 539 341 548 354 540" />
          </g>
        </g>

        {/* Major venous return: blue-grey */}
        <g clipPath={`url(#${uid}-body-clip)`} fill="none" stroke={`url(#${uid}-vein)`} strokeLinecap="round" strokeLinejoin="round">
          <g strokeWidth="5.4">
            <path d="M305 270 C304 237 302 208 300 178 C298 153 298 133 300 116" />
            <path d="M335 270 C336 235 338 205 340 177 C342 153 342 133 340 116" />
            <path d="M305 270 C309 301 312 333 313 366 C314 405 314 451 315 492 C316 520 315 543 313 568" />
            <path d="M335 270 C331 301 328 333 327 366 C326 405 326 451 325 492 C324 520 325 543 327 568" />
            <path d="M315 492 C295 516 278 545 270 579 C260 625 260 686 265 741 C269 797 276 860 282 922" />
            <path d="M325 492 C345 516 362 545 370 579 C380 625 380 686 375 741 C371 797 364 860 358 922" />
            <path d="M313 568 C286 579 267 596 250 624 C232 653 218 689 207 729" />
            <path d="M327 568 C354 579 373 596 390 624 C408 653 422 689 433 729" />
          </g>
          <g strokeWidth="2.2" opacity=".9">
            <path d="M300 116 C287 100 282 87 282 70 M300 116 C309 99 315 89 320 76 M340 116 C353 100 358 87 358 70 M340 116 C331 99 325 89 320 76" />
            <path d="M305 270 C283 260 265 261 249 275 C231 291 220 321 213 354 L193 451 L168 552" />
            <path d="M335 270 C357 260 375 261 391 275 C409 291 420 321 427 354 L447 451 L472 552" />
            <path d="M315 492 C298 480 284 463 278 445 M325 492 C342 480 356 463 362 445" />
            <path d="M270 579 C250 593 239 615 231 641 M370 579 C390 593 401 615 409 641" />
            <path d="M265 741 C250 768 246 798 250 829 M375 741 C390 768 394 798 390 829" />
          </g>
        </g>

        {/* Heart sits in the left chest; aortic root connects to the arterial tree */}
        <g>
          <path
            className="heart-organ"
            d="M331 276C322 262 302 267 300 285C298 304 315 317 331 334C347 317 364 304 362 285C360 267 340 262 331 276Z"
            fill="#d86653"
            stroke="#b95f4c"
            strokeWidth="1.4"
          />
          <path d="M331 276C326 269 318 270 314 276M331 298C340 304 347 313 348 321" fill="none" stroke="#a94f40" strokeWidth="1.1" strokeLinecap="round" opacity="0.75" />
        </g>

        {/* Arterial tree: warm coral */}
        <g clipPath={`url(#${uid}-body-clip)`} fill="none" stroke={`url(#${uid}-artery)`} strokeLinecap="round" strokeLinejoin="round">
          <g strokeWidth="6.2">
            <path d="M320 281 C314 268 312 252 320 239" />
            <path d="M320 281 C320 319 320 358 320 399 C320 445 320 494 320 542" />
            <path d="M320 399 C305 412 294 431 287 453 C280 475 275 505 271 535" />
            <path d="M320 399 C335 412 346 431 353 453 C360 475 365 505 369 535" />
            <path d="M320 542 C298 555 284 579 278 610 C270 653 271 701 275 744 C279 797 286 859 291 922" />
            <path d="M320 542 C342 555 356 579 362 610 C370 653 369 701 365 744 C361 797 354 859 349 922" />
            <path d="M320 239 C306 220 300 196 297 170 C294 147 294 127 296 107" />
            <path d="M333 239 C347 220 353 196 356 170 C359 147 359 127 357 107" />
          </g>
          <g strokeWidth="2.3">
            <path d="M296 107 C285 94 279 81 277 65 M296 107 C302 92 310 80 320 68 M357 107 C368 94 374 81 376 65 M357 107 C351 92 343 80 333 68" />
            <path d="M296 170 C277 160 256 163 240 177 C222 193 213 218 207 246" />
            <path d="M357 170 C376 160 397 163 413 177 C431 193 440 218 446 246" />
            <path d="M320 399 C300 390 282 388 264 395 M320 399 C340 390 358 388 376 395" />
            <path d="M287 453 C267 443 250 447 236 462 C220 479 212 507 204 535 L182 593" />
            <path d="M353 453 C373 443 390 447 404 462 C420 479 428 507 436 535 L458 593" />
            <path d="M271 535 C253 554 241 579 235 608 M369 535 C387 554 399 579 405 608" />
            <path d="M278 610 C258 637 250 672 252 706 M362 610 C382 637 390 672 388 706" />
            <path d="M275 744 C258 772 256 805 262 838 M365 744 C382 772 384 805 378 838" />
            <path d="M291 922 C279 940 267 950 248 963 M349 922 C361 940 373 950 392 963" />
            <path d="M320 542 C302 559 294 578 292 598 M320 542 C338 559 346 578 348 598" />
            <path d="M320 281 C302 291 286 306 276 325 M320 281 C338 291 354 306 364 325" />
            <path d="M276 325 C261 318 250 308 242 294 M364 325 C379 318 390 308 398 294" />
          </g>
        </g>

        {/* A few fine anatomical contour cues */}
        <g fill="none" stroke="#c5d0cc" strokeWidth="1" strokeLinecap="round" opacity=".85">
          <path d="M320 154 L320 190 M289 190 C300 197 309 200 320 200 C331 200 340 197 351 190" />
          <path d="M239 360 C258 370 278 374 296 370 M401 360 C382 370 362 374 344 370" />
          <path d="M250 545 C270 554 292 558 320 558 C348 558 370 554 390 545" />
          <path d="M279 910 C288 923 296 934 306 941 M361 910 C352 923 344 934 334 941" />
        </g>

        {/* Risk highlights */}
        <g className="body-auras">
          <circle cx="320" cy="91" r="55" className={`body-aura ${byId.brain?.tone ?? ''}`} />
          <circle cx="335" cy="300" r="47" className={`body-aura ${byId.heart?.tone ?? ''}`} />
          <circle cx="320" cy="520" r="54" className={`body-aura ${byId.blood?.tone ?? ''}`} />
          <circle cx="282" cy="922" r="37" className={`body-aura ${byId.foot?.tone ?? ''}`} />
        </g>
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
