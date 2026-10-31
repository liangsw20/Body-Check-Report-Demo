import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-down'
  | 'chevron-right'
  | 'close'
  | 'check'
  | 'spark'
  | 'shield'
  | 'clock'
  | 'printer'
  | 'rotate'
  | 'info'
  | 'alert'
  | 'brain'
  | 'heart'
  | 'drop'
  | 'foot'
  | 'activity'
  | 'calendar'
  | 'walk'
  | 'lock'
  | 'file'
  | 'download'
  | 'doctor'
  | 'sun'
  | 'wave'

const iconPaths: Record<IconName, ReactNode> = {
  'arrow-right': <><path d="M4.5 12h15m0 0-6-6m6 6-6 6" /></>,
  'arrow-left': <><path d="M19.5 12h-15m0 0 6-6m-6 6 6 6" /></>,
  'chevron-down': <><path d="m6 9 6 6 6-6" /></>,
  'chevron-right': <><path d="m9 6 6 6-6 6" /></>,
  close: <><path d="m5 5 14 14M19 5 5 19" /></>,
  check: <><path d="m5 12.5 4.4 4.3L19 6.7" /></>,
  spark: (
    <>
      <path d="m12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" />
      <path d="m18.7 15 .8 2.4 2.5.9-2.5.9-.8 2.4-.8-2.4-2.5-.9 2.5-.9.8-2.4Z" />
    </>
  ),
  shield: <><path d="M12 3.2 20 6v5.7c0 4.6-3.2 7.7-8 9.1-4.8-1.4-8-4.5-8-9.1V6l8-2.8Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5.3l3.2 2" /></>,
  printer: (
    <>
      <path d="M7 8V3.5h10V8M7 17H4.5A1.5 1.5 0 0 1 3 15.5v-6A1.5 1.5 0 0 1 4.5 8h15A1.5 1.5 0 0 1 21 9.5v6a1.5 1.5 0 0 1-1.5 1.5H17" />
      <rect x="7" y="14" width="10" height="6.5" rx="1" />
    </>
  ),
  rotate: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M18.3 12A6.5 6.5 0 0 0 6.2 7.5L4 12m16 0-2.2 4.5A6.5 6.5 0 0 1 5.7 12" /></>,
  info: <><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5.5M12 7.5v.2" /></>,
  alert: <><path d="M12 3.8 21 20H3L12 3.8Z" /><path d="M12 9v5M12 17.2v.2" /></>,
  brain: (
    <>
      <path d="M9.5 4.2a3 3 0 0 0-5 2.2c0 .5.1 1 .4 1.4A3.3 3.3 0 0 0 4 10.6c0 1 .4 1.8 1 2.4a3 3 0 0 0 1.8 5.3c.7 1.3 2.4 1.9 4.2.9V4.9c-.5-.4-1-.6-1.5-.7Z" />
      <path d="M14.5 4.2a3 3 0 0 1 5 2.2c0 .5-.1 1-.4 1.4a3.3 3.3 0 0 1 .9 2.8c0 1-.4 1.8-1 2.4a3 3 0 0 1-1.8 5.3c-.7 1.3-2.4 1.9-4.2.9V4.9c.5-.4 1-.6 1.5-.7Z" />
      <path d="M9.2 8.2c-1 .3-1.9 1-1.9 2.1M14.8 8.2c1 .3 1.9 1 1.9 2.1M9.2 15.8c-.9-.2-1.7-.9-1.7-1.9M14.8 15.8c.9-.2 1.7-.9 1.7-1.9" />
    </>
  ),
  heart: <><path d="M20.4 5.7a5 5 0 0 0-7.1 0L12 7l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21l8.4-8.2a5 5 0 0 0 0-7.1Z" /><path d="M7.2 12.5h2.3l1.2-2.2 1.7 4.3 1.3-2.1h2.6" /></>,
  drop: (
    <>
      <path d="M12 3.2c3.4 4.2 6.3 7.2 6.3 10.6a6.3 6.3 0 0 1-12.6 0C5.7 10.4 8.6 7.4 12 3.2Z" />
      <path d="M9.3 14.2a3 3 0 0 0 3 2.3" />
    </>
  ),
  foot: (
    <>
      <path d="M9.8 3.5c1.7 0 2.2 1.5 2.2 3.7 0 2 .3 3.1 1.2 4.7.9 1.5 1.8 2.4 1.8 4.2 0 2.5-1.8 4.4-4.5 4.4-2.3 0-3.6-1.1-4.2-2.6-.5-1.2-.1-2.6.3-4 .4-1.4.7-2.1.7-3.8C7.3 7 7.6 3.5 9.8 3.5Z" />
      <path d="M16.8 7.2c1.2.6 1.4 2.5.7 3.4" />
    </>
  ),
  activity: <><path d="M3 12h4l2.2-6.5 4.2 13 2.3-6.5H21" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="16" rx="3" /><path d="M7.5 3v4M16.5 3v4M3.5 10h17" /><path d="M8 14h.2M12 14h.2M16 14h.2M8 17.5h.2M12 17.5h.2" /></>,
  walk: (
    <>
      <circle cx="13.2" cy="4.2" r="2" />
      <path d="m10.7 8.3 3.2-.9 2.4 3.3 2.3 1.7M13.4 8.3l-1.2 5.2-3.5 2.4M12.2 13.5l2.6 2.2 1.2 4.6M9.2 20.4l1.5-5" />
    </>
  ),
  lock: <><rect x="4" y="10" width="16" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  file: <><path d="M14 3.5H6.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9Z" /><path d="M14 3.5V9h5.5M8.5 13h7M8.5 16.5h5" /></>,
  download: <><path d="M12 3.5v11m0 0 4-4m-4 4-4-4M4 17.5v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" /></>,
  doctor: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21c.4-4.1 3.2-6.4 7.5-6.4s7.1 2.3 7.5 6.4M17.5 3.5v4M15.5 5.5h4" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" /></>,
  wave: <><path d="M2.5 12h3l2.1-6 3.1 12 2.5-7 1.7 4h6.6" /></>,
}

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 24, strokeWidth = 1.8, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {iconPaths[name]}
    </svg>
  )
}
