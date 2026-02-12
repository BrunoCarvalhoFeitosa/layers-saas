"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/all"
import Image from "next/image"
import { Button } from "../../ui/controls/button"
import { Input } from "../../ui/controls/input"
import { Pointer } from "../../common/pointer"

gsap.registerPlugin(Draggable)

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const left = leftCardRef.current
    const right = rightCardRef.current

    if (!section || !left || !right) {
      return
    }

    const ctx = gsap.context(() => {

      Draggable.create(left, {
        type: "x,y",
        // bounds: section,
        edgeResistance: 0.8,
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
      })

      Draggable.create(right, {
        type: "x,y",
        // bounds: section,
        edgeResistance: 0.8,
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing"
      })

    })

    return () => ctx.revert()
  }, [])
  
  return (
    <section ref={sectionRef} id="hero" className="relative">
      <div ref={leftCardRef} className="hidden lg:block absolute top-16 -left-32">
        <Image
          src="/images/hero/design-layer-1.png"
          width={315}
          height={420}
          alt="Layer 1"
        />
      </div>
      <div ref={rightCardRef} className="hidden lg:block absolute top-16 -right-8">
        <Image
          src="/images/hero/design-layer-2.png"
          width={315}
          height={420}
          alt="Layer 2"
        />
      </div>
      <div className="hidden lg:block absolute top-96 left-56">
        <Pointer
          width="30"
          height="30"
          stroke="#fff"
          color="blue"
          name="Andrea"
        />
      </div>
      <div className="hidden lg:block absolute top-12 right-96">
        <Pointer
          width="30"
          height="30"
          stroke="#fff"
          color="red"
          name="Bryan"
        />
      </div>
      <div className="py-12 px-5 mx-auto container">
        <div className="flex justify-center">
          <div className="py-2 px-6 inline-flex bg-linear-to-r from-lime-400 to-green-400 rounded-full text-xl font-semibold text-neutral-950">
            🔥 Over 100 active clients
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <h1 className="mx-auto md:max-w-2xl lg:max-w-3xl text-3xl md:text-6xl lg:text-7xl font-bold text-center text-white">
            Impactful design, created effortlessly
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-center text-white/50">
            Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
          </p>
        </div>
        <div className="mx-auto max-w-lg mt-6 p-2 border border-white/15 rounded-full">
          <form className="flex items-center">
            <Input
              type="email"
              variant="primary"
              placeholder="Enter your email"
              className="flex-1 max-w-46 md:max-w-max"  
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="flex-1"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
