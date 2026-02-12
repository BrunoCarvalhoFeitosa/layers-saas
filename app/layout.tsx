import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "./components/common/navbar"
import { Footer } from "./components/common/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Layers - A simple and powerful design tool",
  description: "Design tools shouldn't slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow."
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
