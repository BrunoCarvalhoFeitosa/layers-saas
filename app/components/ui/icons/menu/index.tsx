"use client"

interface MenuIconProps {
  width: string
  height: string
  fill: string
}

export const MenuIcon = ({ width, height, fill }: MenuIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" fill={fill} />
      <line x1="3" y1="6" x2="21" y2="6" fill={fill} />
      <line x1="3" y1="18" x2="21" y2="18" fill={fill} />
    </svg>
  )
}
