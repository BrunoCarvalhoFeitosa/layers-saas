"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { partnersData } from "@/app/constants"

gsap.registerPlugin(ScrollTrigger)

export const PartnersSection = () => {
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
        duration: 40,
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
    <section id="partners" className="py-24 mx-auto container overflow-x-clip">
      <div className="text-xl text-center text-white/50">
        <h3>Already chosen by these market leaders</h3>
      </div>
      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex items-center gap-6 md:gap-24 w-max"
        >
          {partnersData.map((partner) => (
            <Image
              key={`first-${partner.name}`}
              src={partner.image}
              width={150}
              height={50}
              alt={partner.name}
            />
          ))}
          {partnersData.map((partner) => (
            <Image
              key={`second-${partner.name}`}
              src={partner.image}
              width={150}
              height={50}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
