"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Tag } from "../../common/tag"

gsap.registerPlugin(ScrollTrigger)

const text = "You're racing to create excepcional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves."

export const IntroductionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current

    if (!el) {
      return
    }

    const words = el.querySelectorAll(".word")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
        }
      })

      words.forEach((word) => {
        tl.to(
          word,
          {
            color: "#ffffff",
            duration: 1,
            ease: "none",
          }, "+=0"
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="introduction" className="py-10 md:py-28 lg:py-40 px-5 mx-auto container">
      <div className="flex justify-center">
        <Tag>Introducing Layers</Tag>
      </div>
      <div
        ref={containerRef}
        className="mt-6 text-4xl md:text-6xl lg:text-7xl text-center leading-tight"
      >
        <span className="mr-1">
          Your creative process deserves better.
        </span>
        <span>
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className="word inline-block mr-3 text-white/15"
            >
              {word}
            </span>
          ))}
        </span>
        <span className="block text-lime-400 mt-4">
          That&apos;s why we built Layers.
        </span>
      </div>
    </section>
  )
}
