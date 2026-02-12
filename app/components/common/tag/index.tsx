"use client"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={twMerge("py-1 px-3 inline-flex items-center gap-2 border border-lime-400 rounded-full uppercase", className)}
      {...otherProps}
    >
      <span className="text-lime-400">
        &#10038;
      </span>
      <span className="text-lime-400">
        {children}
      </span>
    </div>
  )
}
