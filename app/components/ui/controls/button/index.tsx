"use client"
import { ButtonHTMLAttributes } from "react"
import { cva } from "class-variance-authority"

const classes = cva("px-6 h-12 border rounded-full font-bold transition-all durantion-500 cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400 hover:bg-lime-600",
      secondary: "bg-transparent text-white border-white hover:bg-white hover:text-black",
    },
    size: {
      sm: "h-10"
    }
  }
})

export const Button = (
  props: {
    variant: "primary" | "secondary",
    size?: "sm"
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, size, ...otherProps } = props

  return (
    <button
      className={classes({
        variant: props.variant,
        className: props.className,
        size: props.size
      })}
      {...otherProps}
    />
  )
}
