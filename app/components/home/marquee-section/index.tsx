"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const MarqueeSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current

    if (!el) {
      return
    }

    const ctx = gsap.context(() => {
      const totalWidth = el.scrollWidth / 2

      let direction = -1
      let speed = 1

      const tween = gsap.to(el, {
        x: `+=${totalWidth}`,
        duration: 12,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x)
            return `${gsap.utils.wrap(-totalWidth, 0, value)}px`
          },
        },
      })

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          direction = self.direction === 1 ? 1 : -1

          gsap.to(tween, {
            timeScale: direction * speed,
            duration: 0.2,
            ease: "power2.out",
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-16 lg:py-24 mx-auto container [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden">
      <div ref={marqueeRef} className="flex justify-between gap-20 w-max">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6"
          >
            <span className="lg:text-5xl text-lime-400">
              &#10038;
            </span>
            <h6 className="text-3xl md:text-5xl lg:text-7xl text-white">
              Try it for free
            </h6>
          </div>
        ))}
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6"
          >
            <span className="lg:text-5xl text-lime-400">
              &#10038;
            </span>
            <h6 className="text-3xl md:text-5xl lg:text-7xl text-white">
              Try it for free
            </h6>
          </div>
        ))}
      </div>
    </section>
  )
}
