"use client"
import { useState } from "react"
import { Tag } from "../../common/tag"
import { faqData } from "@/app/constants"

export const FaqSection = () => {
  const [active, setActive] = useState<number | null>(0)

  const handleActive = (index: number) => {
    setActive(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-24 px-5 mx-auto container">
      <div className="mx-auto flex flex-col max-w-xl">
        <div className="flex justify-center">
          <Tag>FAQ</Tag>
        </div>
        <div className="my-8">
          <h4 className="text-3xl md:text-6xl text-center text-white">
            Questions? We&apos;ve got <span className="text-lime-400">answers</span>
          </h4>
        </div>
        <div className="flex flex-col gap-y-5">
          {faqData.map((faq, index) => {
            const isOpen = active === index

            return (
              <div
                key={index}
                className="px-5 py-4 bg-neutral-900 rounded-lg border border-neutral-800 cursor-pointer transition-all duration-300"
                onClick={() => handleActive(index)}
              >
                <div className="flex justify-between items-center">
                  <h6 className="text-lg font-bold">
                    {faq.question}
                  </h6>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-lime-400 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "mt-4 h-full" : "h-0"}`}>
                  <p className={`text-white/25`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
