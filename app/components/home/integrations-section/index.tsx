"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Tag } from "../../common/tag"
import { integrationsData } from "@/app/constants"

gsap.registerPlugin(ScrollTrigger)

interface CardProps {
  integration: {
    image: any
    title: string
    description: string
  }
}

export const IntegrationsSection = () => {
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftItems = integrationsData.filter((_, i) => i % 2 === 0)
  const rightItems = integrationsData.filter((_, i) => i % 2 !== 0)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    if (window.innerWidth < 1024) {
      return
    }

    const left = leftColRef.current
    const right = rightColRef.current
    const section = sectionRef.current

    if (!left || !right || !section) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.to(left, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(right, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const Card = ({ integration }: CardProps) => (
    <div className="py-6 px-5 lg:px-6 xl:px-8 bg-neutral-900 border border-neutral-800 rounded-3xl">
      <div className="mb-3 flex justify-center">
        <Image
          src={integration.image}
          width={80}
          height={80}
          alt={integration.title}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h4 className="text-2xl text-white">
          {integration.title}
        </h4>
        <p className="mt-2 max-w-sm text-white/30">
          {integration.description}
        </p>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} id="integrations" className="px-5 mx-auto container">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[45%]">
          <div className="flex justify-center lg:justify-start">
            <Tag>Integrations</Tag>
          </div>

          <div className="mt-6 flex flex-col">
            <h3 className="text-3xl md:text-6xl text-center lg:text-left text-white">
              Plays well with <span className="text-lime-400">others</span>
            </h3>
            <p className="mt-2 lg:max-w-sm text-center lg:text-left text-white/50">
              Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-[55%]">
          <div className="h-auto lg:h-200 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div ref={leftColRef} className="flex flex-col gap-4">
                {leftItems.map((integration, index) => (
                  <Card key={index} integration={integration} />
                ))}
              </div>
              <div ref={rightColRef} className="flex flex-col gap-4">
                {rightItems.map((integration, index) => (
                  <Card key={index} integration={integration} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
