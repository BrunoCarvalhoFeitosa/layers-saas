"use client"
import { gsap } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { ScrollToPlugin } from "gsap/all"
import { Button } from "../../ui/controls/button"
import { MenuIcon } from "../../ui/icons/menu"
import { navLinksData } from "@/app/constants"

gsap.registerPlugin(ScrollToPlugin)

export const Navbar = () => {
  const handleScrollTo = (scrollToId: string) => {
    const element = document.querySelector(scrollToId)

    if (!element) {
      return
    }

    gsap.to(window, {
      scrollTo: { y: element, offsetY: 30 },
      duration: 6,
      ease: "power2.inOut"
    })
  }

  return (
    <div className="sticky top-0 bg-neutral-950 z-99999">
      <div className="py-5 px-5 mx-auto container">
        <div className="py-2 pl-5 pr-4 lg:pr-2 flex justify-between items-center border border-white/15 rounded-full">
          <div className="overflow-hidden">
            <Link href="/">
              <Image
                src="/svgs/logo.svg"
                width={130}
                height={35}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex lg:mr-18">
              <nav>
                <ul className="flex items-center gap-6 font-bold text-white">
                  {navLinksData.map((link) => (
                    <li
                      key={link.label}
                      className="hover:text-lime-400 cursor-pointer"
                      onClick={() => handleScrollTo(link.href)}
                    >
                      {link.label}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <div className="md:hidden">
                <MenuIcon width="28" height="28" fill="#fff" />
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Button variant="secondary">
                  Entrar
                </Button>
                <Button variant="primary">
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
