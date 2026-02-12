"use client"
import { twMerge } from "tailwind-merge"

interface PointerProps {
  width: string
  height: string
  stroke: string
  color?: "red" | "blue"
  name: string
}

export const Pointer = ({ width, height, stroke, name, color }: PointerProps) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
      <div className="absolute top-full left-full">
        <div className={twMerge(
          "px-2 inline-flex rounded-full rounded-tl-none text-sm font-bold",
          color === "red" && "bg-red-500",
          color === "blue" && "bg-blue-500"
        )}>
          {name}
        </div>
      </div>
    </div>
  )
}
