/** 自绘的小图标。官方 primitives 的图标不跨包稳定导出，这里只用 12–14px 的
 * 线性路径；尺寸与 `stroke-width` 对齐原生轨迹工具栏的紧凑控件。 */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Svg({ size = 14, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconSearch(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="7" cy="7" r="4.2" />
      <path d="M10.2 10.2 13 13" />
    </Svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4 4 8 8M12 4l-8 8" />
    </Svg>
  )
}

export function IconChevron(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4 6 4 4 4-4" />
    </Svg>
  )
}

export function IconArrowDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" />
    </Svg>
  )
}

export function IconCopy(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5.5" y="5.5" width="7" height="7" rx="1.5" />
      <path d="M10.5 5.5v-1a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 4.5V9a1.5 1.5 0 0 0 1.5 1.5h1" />
    </Svg>
  )
}

export function IconDownload(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 2.5v7.5M5 7.5 8 10.5 11 7.5M3 12.5h10" />
    </Svg>
  )
}

export function IconFilter(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2.5 3.5h11L9.5 8v4l-3 1V8L2.5 3.5Z" />
    </Svg>
  )
}

export function IconTool(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9.6 3.2a2.7 2.7 0 0 0-3.3 3.3l-3.5 3.5a1.4 1.4 0 0 0 2 2l3.5-3.5a2.7 2.7 0 0 0 3.3-3.3L9.9 6.3 8.7 5.1l1.9-1.9Z" />
    </Svg>
  )
}

export function IconMessage(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 8.2a4.5 4.5 0 0 1-4.5 4.5H5.2L3 14.5v-2.6A4.5 4.5 0 0 1 2.5 8a4.5 4.5 0 0 1 4.5-4.5h1.5A4.5 4.5 0 0 1 13 8.2Z" />
    </Svg>
  )
}

export function IconError(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="8" cy="8" r="5.6" />
      <path d="M8 4.8v3.8M8 11.1v.1" />
    </Svg>
  )
}

export function IconTerminal(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.2" y="3.2" width="11.6" height="9.6" rx="1.5" />
      <path d="m4.8 6.2 2 1.8-2 1.8M8.6 10h2.7" />
    </Svg>
  )
}

export function IconArchive(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.2" y="3" width="11.6" height="3" rx="1" />
      <path d="M3.2 6v5.5A1.5 1.5 0 0 0 4.7 13h6.6a1.5 1.5 0 0 0 1.5-1.5V6M6.4 8.5h3.2" />
    </Svg>
  )
}

export function IconRetry(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12.8 6.2A5 5 0 1 0 13 9.4" />
      <path d="M12.8 2.8v3.4H9.4" />
    </Svg>
  )
}

export function IconSpark(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 2.2 9.4 6l3.8 1.4-3.8 1.4L8 12.6 6.6 8.8 2.8 7.4 6.6 6 8 2.2Z" />
    </Svg>
  )
}

export function IconContext(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m8 2 5.5 3L8 8 2.5 5 8 2Z" />
      <path d="m2.5 8.2 5.5 3 5.5-3M2.5 11.2l5.5 3 5.5-3" />
    </Svg>
  )
}

export function IconSpinner(props: IconProps) {
  return (
    <Svg {...props} className={`bt-spin ${props.className ?? ''}`}>
      <path d="M8 2.2a5.8 5.8 0 1 1-5.5 4" />
    </Svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m3.2 8.4 3.1 3.1 6.5-6.9" />
    </Svg>
  )
}