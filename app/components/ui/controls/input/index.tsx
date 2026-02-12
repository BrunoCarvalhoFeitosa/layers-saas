"use client"
import { InputHTMLAttributes } from "react"
import { cva } from "class-variance-authority"

const classes = cva("px-6 h-12 border-0 outline-none", {
  variants: {
    variant: {
      primary: "bg-transparent",
      secondary: "bg-white",
    },
    size: {
      sm: "h-10"
    }
  }
})

export const Input = (
    props: {
        variant: "primary" | "secondary"
        size?: "sm"
    } & InputHTMLAttributes<HTMLInputElement>
) => {
  const { variant, className, size, ...otherProps } = props

  return (
    <input
      className={classes({
        variant: props.variant,
        className: props.className,
        size: props.size
      })}
      {...otherProps}
    />
  )
}
