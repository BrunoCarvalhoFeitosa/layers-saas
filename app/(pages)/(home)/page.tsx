import { HeroSection } from "@/app/components/home/hero-section"
import { PartnersSection } from "@/app/components/home/partners-section"
import { IntroductionSection } from "@/app/components/home/introduction-section"
import { ServicesSection } from "@/app/components/home/services-section"
import { IntegrationsSection } from "@/app/components/home/integrations-section"
import { FaqSection } from "@/app/components/home/faq-section"
import { MarqueeSection } from "@/app/components/home/marquee-section"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <IntroductionSection />
      <ServicesSection />
      <IntegrationsSection />
      <FaqSection />
      <MarqueeSection />
    </main>
  )
}

export default HomePage
