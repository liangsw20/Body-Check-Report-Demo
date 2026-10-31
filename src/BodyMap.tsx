import { useId } from 'react'
import type { AreaId, AreaInfo } from './data'
import { toneShortLabel } from './data'
import { Icon } from './Icons'

interface BodyMapProps {
  areas: AreaInfo[]
  onSelect: (id: AreaId) => void
}

const pinPosition: Record<AreaId, { left: string; top: string }> = {
  brain: { left: '50%', top: '11.5%' },
  heart: { left: '52.4%', top: '32.5%' },
  blood: { left: '50%', top: '44.5%' },
  foot: { left: '39.5%', top: '91%' },
}

const cardPosition: Record<AreaId, { left: string; top: string }> = {
  brain: { left: '61%', top: '5%' },
  heart: { left: '-1%', top: '29%' },
  blood: { left: '61%', top: '42%' },
  foot: { left: '-1%', top: '76%' },
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

      <svg className="body-svg" viewBox="0 0 640 900" role="img" aria-label="全身微循环风险地图，展示心脏、脑、肺、肾脏及全身动静脉循环">
        <defs>
          <linearGradient id={`${uid}-artery`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e08e78" />
            <stop offset="0.5" stopColor="#cf6d56" />
            <stop offset="1" stopColor="#b95542" />
          </linearGradient>
          <linearGradient id={`${uid}-vein`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8aaebe" />
            <stop offset="1" stopColor="#5f8499" />
          </linearGradient>
          <linearGradient id={`${uid}-heart`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ef9a86" />
            <stop offset="1" stopColor="#c85f4b" />
          </linearGradient>
          <radialGradient id={`${uid}-halo`}>
            <stop offset="0" stopColor="#74d8c3" stopOpacity="0.2" />
            <stop offset="0.6" stopColor="#74d8c3" stopOpacity="0.05" />
            <stop offset="1" stopColor="#74d8c3" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-outline`} x="-8%" y="-8%" width="116%" height="116%">
            <feMorphology in="SourceAlpha" operator="dilate" radius="1.15" result="outlineShape" />
            <feFlood floodColor="#7fa79c" floodOpacity="0.9" />
            <feComposite in2="outlineShape" operator="in" result="outline" />
            <feMerge>
              <feMergeNode in="outline" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${uid}-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <ellipse cx="320" cy="883" rx="150" ry="12" fill="#93c9bd" opacity="0.18" />
        <circle cx="320" cy="450" r="310" fill={`url(#${uid}-halo)`} />
        <circle cx="320" cy="450" r="278" fill="none" stroke="#91c9bc" strokeOpacity="0.2" strokeDasharray="1 10" />
        <circle cx="320" cy="450" r="322" fill="none" stroke="#91c9bc" strokeOpacity="0.1" />

        <g className="body-silhouette" fill="#fbfdfb" filter={`url(#${uid}-outline)`}>
          <path d="M247 446C241 496 237 556 235 616L233 695C232 735 229 775 223 805C219 825 209 840 196 847C184 853 186 865 200 867C220 870 236 855 240 833L248 775C252 735 256 675 260 615L266 535L270 455Z" />
          <path d="M393 446C399 496 403 556 405 616L407 695C408 735 411 775 417 805C421 825 431 840 444 847C456 853 454 865 440 867C420 870 404 855 400 833L392 775C388 735 384 675 380 615L374 535L370 455Z" />
          <path d="M196 845C179 849 161 859 158 871C156 881 170 888 188 884L247 871L245 845Z" />
          <path d="M444 845C461 849 479 859 482 871C484 881 470 888 452 884L393 871L395 845Z" />
          <path d="M237 190C217 200 201 221 193 250L178 310L164 370L152 430L144 484C141 500 143 515 151 520C160 526 167 512 170 498L184 444L197 386L210 328L224 270C230 244 240 220 251 204Z" />
          <path d="M403 190C423 200 439 221 447 250L462 310L476 370L488 430L496 484C499 500 497 515 489 520C480 526 473 512 470 498L456 444L443 386L430 328L416 270C410 244 400 220 389 204Z" />
          <path d="M320 165C288 165 256 174 237 192C221 207 214 232 211 262L206 330C204 354 212 375 231 383L242 390C247 407 248 430 247 452L393 452C392 430 393 407 398 390L409 383C428 375 436 354 434 330L429 262C426 232 419 207 403 192C384 174 352 165 320 165Z" />
          <path d="M292 139L292 178C302 190 338 190 348 178L348 139Z" />
          <path d="M320 38C292 38 273 58 273 88C273 108 281 124 293 134C300 140 310 144 320 144C330 144 340 140 347 134C359 124 367 108 367 88C367 58 348 38 320 38Z" />
          <ellipse cx="269" cy="92" rx="6" ry="12" />
          <ellipse cx="371" cy="92" rx="6" ry="12" />
          <path d="M151 512C141 518 137 532 141 545C145 558 157 563 167 555L174 536L173 520Z" />
          <path d="M146 548C141 558 140 570 144 578C147 583 153 581 154 575L158 553Z" />
          <path d="M157 553C153 564 153 577 157 585C160 590 166 587 166 581L168 555Z" />
          <path d="M168 552C166 564 167 576 172 583C175 587 180 583 180 577L178 553Z" />
          <path d="M178 546C178 557 181 567 186 573C190 577 194 572 192 566L187 544Z" />
          <path d="M142 528C134 536 133 546 138 551C142 555 147 550 147 544L150 532Z" />
          <path d="M489 512C499 518 503 532 499 545C495 558 483 563 473 555L466 536L467 520Z" />
          <path d="M494 548C499 558 500 570 496 578C493 583 487 581 486 575L482 553Z" />
          <path d="M483 553C487 564 487 577 483 585C480 590 474 587 474 581L472 555Z" />
          <path d="M472 552C474 564 473 576 468 583C465 587 460 583 460 577L462 553Z" />
          <path d="M462 546C462 557 459 567 454 573C450 577 446 572 448 566L453 544Z" />
          <path d="M498 528C506 536 507 546 502 551C498 555 493 550 493 544L490 532Z" />
        </g>

        <g className="body-creases" fill="none" stroke="#b5cbc3" strokeWidth="0.9" strokeLinecap="round" opacity="0.8">
          <path d="M153 530C150 539 149 548 150 555M160 528C159 538 159 547 160 554M170 526C171 536 172 545 173 552M181 522C183 532 185 541 186 548M144 536C140 542 139 547 141 551" />
          <path d="M487 530C490 539 491 548 490 555M480 528C481 538 481 547 480 554M470 526C469 536 468 545 467 552M459 522C457 532 455 541 454 548M496 536C500 542 501 547 499 551" />
          <path d="M166 869C173 873 181 874 188 872M474 869C467 873 459 874 452 872M193 874C201 878 210 878 218 875M447 874C439 878 430 878 422 875" />
          <path d="M257 260C270 253 282 251 294 254M383 260C370 253 358 251 346 254" opacity="0.55" />
          <path d="M244 452C256 458 270 461 284 459M396 452C384 458 370 461 356 459" opacity="0.5" />
        </g>

        <g className="organs">
          <g className="brain-organ">
            <path d="M318 70C296 60 275 72 271 94C268 114 282 132 303 133C311 133 318 126 318 117Z" />
            <path d="M322 70C344 60 365 72 369 94C372 114 358 132 337 133C329 133 322 126 322 117Z" />
            <path d="M311 124C305 132 306 142 314 146C320 149 323 143 322 137C321 143 324 149 330 146C338 142 339 132 333 124Z" />
            <g fill="none">
              <path d="M291 84C299 76 307 79 309 89M281 100C290 92 300 95 302 105M300 116C292 121 285 117 282 109" />
              <path d="M349 84C341 76 333 79 331 89M359 100C350 92 340 95 338 105M340 116C348 121 355 117 358 109" />
              <path d="M308 72C299 76 296 84 299 90M332 72C341 76 344 84 341 90" />
            </g>
          </g>

          <g className="lung-organ">
            <path d="M270 235C250 238 240 258 240 292C240 330 252 356 274 365C288 370 298 360 298 344L298 255C298 240 286 231 270 235Z" />
            <path d="M370 235C390 238 400 258 400 292C400 330 388 356 366 365C352 370 342 360 342 344L342 255C342 240 354 231 370 235Z" />
            <path d="M288 247C278 258 274 278 276 300M274 316C281 327 288 336 296 342" fill="none" />
            <path d="M352 247C362 258 366 278 364 300M366 316C359 327 352 336 344 342" fill="none" />
          </g>

          <g className="kidney-organ">
            <path d="M303 388C295 379 283 384 282 397C281 411 290 423 301 424C309 424 312 417 311 409C310 401 308 394 303 388Z" />
            <path d="M337 388C345 379 357 384 358 397C359 411 350 423 339 424C331 424 328 417 329 409C330 401 332 394 337 388Z" />
          </g>

          <path className="heart-organ" d="M335 268C326 254 306 258 302 276C298 294 315 307 335 326C355 307 373 292 368 274C363 257 344 254 335 268Z" fill={`url(#${uid}-heart)`} />
          <path className="heart-detail" d="M316 267C307 261 300 268 304 277C307 284 315 288 322 285M335 281C345 286 352 296 349 306" fill="none" />
          <path className="heart-detail" d="M326 262C328 253 333 248 340 246C348 244 355 249 357 255" fill="none" />
        </g>

        <g className="venous-system" fill="none" stroke={`url(#${uid}-vein)`} strokeLinecap="round" strokeLinejoin="round">
          <g className="vein-main">
            <path d="M344 272C343 252 343 232 345 214C347 195 350 178 352 160C354 148 355 138 354 128" />
            <path d="M345 214C332 190 322 166 315 145C311 134 309 130 307 126" />
            <path d="M344 272C346 300 345 330 343 360C341 395 340 430 339 460C338 480 336 492 334 505" />
            <path d="M345 272C320 280 295 290 278 305C258 326 238 380 225 430C214 472 205 505 198 532" />
            <path d="M345 272C370 280 395 290 412 305C432 326 452 380 465 430C476 472 485 505 492 532" />
          </g>
          <g className="vein-branch">
            <path d="M343 360C354 368 358 382 356 394M339 460C324 477 312 500 306 526C300 555 296 590 292 625C288 665 284 710 280 748C278 778 274 804 268 826" />
            <path d="M339 460C354 477 366 500 372 526C378 555 382 590 386 625C390 665 394 710 398 748C400 778 404 804 410 826" />
            <path d="M268 826C262 836 260 846 264 852C268 857 276 854 278 847M410 826C416 836 418 846 414 852C410 857 402 854 400 847" />
            <path d="M292 625C286 646 282 670 280 692M386 625C392 646 396 670 398 692" />
            <path d="M198 532C192 545 190 558 192 568M492 532C498 545 500 558 498 568" />
            <path d="M334 505C320 516 310 534 305 556C300 580 296 606 292 630" />
            <path d="M334 505C348 516 358 534 363 556C368 580 372 606 376 630" />
            <path d="M305 556C296 580 290 610 288 640M363 556C372 580 378 610 380 640" />
            <path d="M356 394C350 400 346 406 344 414M343 392C337 398 333 404 331 412" />
            <path d="M340 430C330 438 322 448 318 460M338 452C328 460 320 470 316 482" />
          </g>
          <g className="vein-small">
            <path d="M354 128C348 116 338 106 328 100M354 128C362 114 370 106 378 99" />
            <path d="M307 126C302 114 296 104 288 96M307 126C314 114 320 106 326 100" />
            <path d="M344 272C338 258 334 246 332 236M344 272C350 258 354 246 356 236" />
            <path d="M344 272C330 284 318 298 312 314M344 272C358 284 370 298 376 314" />
            <path d="M312 314C302 302 293 292 286 280M376 314C386 302 395 292 402 280" />
            <path d="M278 305C268 292 260 281 255 270M295 292C288 280 282 268 280 258" />
            <path d="M412 305C422 292 430 281 435 270M395 292C402 280 408 268 410 258" />
            <path d="M356 394C364 394 370 394 376 396M343 392C335 392 329 392 323 394" />
            <path d="M280 748C270 760 262 775 258 790M288 748C296 760 304 775 308 790" />
            <path d="M398 748C408 760 416 775 420 790M390 748C382 760 374 775 370 790" />
            <path d="M292 630C285 654 281 678 280 700M376 630C383 654 387 678 388 700" />
            <path d="M288 662C278 682 272 704 268 724M380 662C390 682 396 704 400 724" />
          </g>
        </g>

        <g className="arterial-system" fill="none" stroke={`url(#${uid}-artery)`} strokeLinecap="round" strokeLinejoin="round">
          <g className="artery-main-group">
            <path d="M335 268C335 255 330 247 321 246C313 245 307 252 307 262C307 276 315 292 320 308C325 327 327 351 328 380C329 410 329 440 327 468C326 485 323 496 320 505" />
            <path d="M315 247C303 237 299 220 297 200C295 180 294 160 293 143C292 135 292 130 292 124" />
            <path d="M331 246C340 234 345 218 348 198C351 178 352 158 354 141C355 133 354 129 354 123" />
            <path d="M312 250C292 243 270 240 250 243C235 246 223 256 217 270" />
            <path d="M332 247C354 240 378 240 397 244C414 248 425 258 431 273" />
          </g>
          <g className="artery-branch">
            <path d="M217 270C208 290 199 320 191 355C183 390 174 430 166 468C160 492 155 512 152 525" />
            <path d="M431 273C439 293 447 323 455 358C463 393 472 433 480 471C486 495 491 514 494 527" />
            <path d="M191 355C184 375 178 398 173 420" />
            <path d="M455 358C462 378 468 401 473 423" />
            <path d="M328 392C318 392 311 392 303 393" />
            <path d="M329 392C337 392 345 392 352 393" />
            <path d="M320 505C303 512 292 530 286 554C280 584 276 618 272 652C268 688 264 728 260 766C258 788 254 806 250 821" />
            <path d="M320 505C337 512 348 530 354 554C360 584 364 618 368 652C372 688 376 728 380 766C382 788 386 806 390 821" />
            <path d="M272 700C263 724 256 750 250 778M272 700C280 724 284 750 286 780" />
            <path d="M368 700C377 724 384 750 390 778M368 700C360 724 356 750 354 780" />
            <path d="M250 778C242 792 236 808 236 820C236 830 246 832 252 824C258 816 260 800 258 788" />
            <path d="M286 780C290 792 292 806 290 818C288 828 280 830 276 822C272 814 272 798 274 788" />
            <path d="M390 778C398 792 404 808 404 820C404 830 394 832 388 824C382 816 380 800 382 788" />
            <path d="M354 780C350 792 348 806 350 818C352 828 360 830 364 822C368 814 368 798 366 788" />
          </g>
          <g className="artery-small">
            <path d="M152 525C143 530 140 544 144 552M152 525C149 539 148 553 147 560M152 525C155 539 157 553 158 559M152 525C161 536 165 546 167 553M152 525C141 532 136 540 135 546" />
            <path d="M494 527C501 532 504 544 502 552M494 527C497 541 498 554 498 560M494 527C491 541 489 554 488 560M494 527C485 538 481 548 479 555M494 527C503 534 508 542 509 548" />
            <path d="M292 124C286 114 282 104 278 94M292 124C298 112 304 103 310 96M292 124C300 115 308 112 320 112C332 112 342 116 354 123" />
            <path d="M354 123C360 113 364 104 368 94M354 123C348 112 342 104 336 97M320 112C318 102 318 92 320 82" />
            <path d="M310 96C305 88 302 80 302 72M336 97C341 89 344 81 344 73" />
            <path d="M278 94C272 88 268 82 266 76M368 94C374 88 378 82 380 76" />
            <path d="M320 112C314 104 310 96 308 88M320 112C326 104 330 96 332 88" />
            <path d="M293 124C287 116 282 110 276 105M354 123C360 116 365 110 370 104" />
            <path d="M286 554C280 576 276 598 273 620M354 554C360 576 364 598 367 620" />
            <path d="M273 652C267 676 263 700 261 724M367 652C373 676 377 700 379 724" />
            <path d="M191 355C198 372 202 390 204 408M455 358C448 375 444 393 442 411" />
          </g>
          <g className="artery-organ">
            <path d="M318 280C306 268 294 258 280 252M310 292C298 284 286 280 274 279M302 306C292 302 282 302 274 305" />
            <path d="M314 314C304 306 294 300 284 296M306 324C296 318 286 316 278 318" />
            <path d="M352 280C364 268 376 258 390 252M360 292C372 284 384 280 396 279M368 306C378 302 388 302 396 305" />
            <path d="M356 314C366 306 376 300 386 296M364 324C374 318 384 316 392 318" />
            <path d="M335 326C345 318 352 310 356 302" />
          </g>
        </g>

        <g className="vessel-flow">
          <circle r="3">
            <animateMotion dur="6.4s" repeatCount="indefinite" path="M335 268C335 255 330 247 321 246C313 245 307 252 307 262C307 276 315 292 320 308C325 327 327 351 328 380C329 410 329 440 327 468C326 485 323 496 320 505" />
          </circle>
          <circle r="2.4">
            <animateMotion dur="5.5s" begin="1.1s" repeatCount="indefinite" path="M315 247C303 237 299 220 297 200C295 180 294 160 293 143C292 135 292 130 292 124C300 115 308 112 320 112" />
          </circle>
          <circle r="2.4">
            <animateMotion dur="7.2s" begin="0.6s" repeatCount="indefinite" path="M312 250C292 243 270 240 250 243C235 246 223 256 217 270C208 290 199 320 191 355C183 390 174 430 166 468C160 492 155 512 152 525" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="7.8s" begin="2s" repeatCount="indefinite" path="M320 505C303 512 292 530 286 554C280 584 276 618 272 652C268 688 264 728 260 766C258 788 254 806 250 821" />
          </circle>
        </g>

        <g className="body-auras">
          <circle cx="320" cy="100" r="66" className={`body-aura ${byId.brain.tone}`} />
          <circle cx="335" cy="292" r="46" className={`body-aura ${byId.heart.tone}`} />
          <circle cx="320" cy="400" r="48" className={`body-aura ${byId.blood.tone}`} />
          <circle cx="250" cy="826" r="34" className={`body-aura ${byId.foot.tone}`} />
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
