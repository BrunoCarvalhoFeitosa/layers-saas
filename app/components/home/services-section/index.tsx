"use client"
import Image from "next/image"
import { Tag } from "../../common/tag"
import { servicesData } from "@/app/constants"

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-5 mx-auto container">
      <div className="flex justify-center">
        <Tag>
          Services
        </Tag>
      </div>
      <div className="my-6 flex justify-center">
        <h2 className="text-3xl md:text-6xl text-center text-white">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
      </div>
      <div className="md:px-30 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="pt-14 px-5 md:px-8 pb-6 flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <div className="min-h-40 flex justify-center items-center">
              <div className="translate-x-6 rounded-full overflow-hidden border-6 transition-transform duration-500 hover:-translate-y-3 border-green-500 z-2 cursor-pointer">
                <div className="p-1 bg-neutral-950">
                  <Image
                    src="/images/services/avatar-ashwin-santiago.jpg"
                    width={72}
                    height={72}
                    alt="Ashwin Santiago"
                    className="size-11 md:size-16 lg:size-12 xl:size-16 rounded-full grayscale-100"
                  />
                </div>
              </div>
              <div className="translate-x-4 rounded-full overflow-hidden border-6 transition-transform duration-500 hover:-translate-y-3 border-purple-500 z-1 cursor-pointer">
                <div className="p-1 bg-neutral-950">
                  <Image
                    src="/images/services/avatar-lula-meyers.jpg"
                    width={72}
                    height={72}
                    alt="Lula Meyers"
                    className="size-11 md:size-16 lg:size-12 xl:size-16 rounded-full grayscale-100"
                  />
                </div>
              </div>
              <div className="translate-x-0 rounded-full overflow-hidden border-6 transition-transform duration-500 hover:-translate-y-3 border-green-500 z-1 cursor-pointer">
                <div className="p-1 bg-neutral-950">
                  <Image
                    src="/images/services/avatar-owen-garcia.jpg"
                    width={72}
                    height={72}
                    alt="Owen Garcia"
                    className="size-11 md:size-16 lg:size-12 xl:size-16 rounded-full grayscale-100"
                  />
                </div>
              </div>
              <div className="-translate-x-4 size-16 md:size-20 lg:size-16 xl:size-20 flex justify-center items-center bg-neutral-600 rounded-full gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className="size-1.5 rounded-full bg-white" />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-white">
                Real-time Collaboration
              </h3>
              <p className="mt-2 text-lg text-white/25">
                Work together seamlessly with conflict-free team editing.
              </p>
            </div>
          </div>
          <div className="pt-14 px-5 md:px-8 pb-6 flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <div className="min-h-40 flex justify-center items-center">
              <p className="text-3xl font-bold text-center text-neutral-500">
                We&apos;ve achivied <span className="block bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">incredible</span> growth this year
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-white">
                Interative Prototyping
              </h3>
              <p className="mt-2 text-base md:text-lg text-white/25">
                Engage your clients with prototypes that react to user actions.
              </p>
            </div>
          </div>
          <div className="pt-14 px-5 md:px-8 pb-6 flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <div className="min-h-40 flex justify-center items-center gap-3">
                <div className="px-8 py-3 rounded-md flex items-center bg-white font-bold text-neutral-950">
                  shift
                </div>
                <div className="px-3 py-3 w-12 rounded-md flex justify-center items-center bg-white font-bold text-neutral-950">
                  alt
                </div>
                <div className="px-3 py-3 w-12 rounded-md flex justify-center items-center bg-white font-bold text-neutral-950">
                  C
                </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-white">
                Keyboard Quick Actions
              </h3>
              <p className="mt-2 text-base md:text-lg text-white/25">
                Powerful commands to help you create designs more quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 mx-auto md:max-w-2xl lg:max-w-4xl">
        <ul className="flex flex-wrap justify-center items-center gap-3">
          {servicesData.map((service, index) => (
            <li
              key={index}
              className="py-2 px-4 flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg"
            >
              <span className="w-5 h-5 flex justify-center items-center bg-lime-400 rounded-full text-neutral-950">
                &#10038;
              </span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
