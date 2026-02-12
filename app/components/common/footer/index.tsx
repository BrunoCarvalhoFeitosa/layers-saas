"use client"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="py-10 px-5 mx-auto container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
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
        <div>
          <ul className="flex items-center gap-4">
            <li className="hover:text-white/15 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-white/15 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white/15 cursor-pointer">
              Terms e Conditions
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
