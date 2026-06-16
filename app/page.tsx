import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import CaseStudiesSection from "@/components/case-studies-section"
import ApproachSection from "@/components/approach-section"
import InsightsSection from "@/components/insights-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <CaseStudiesSection />
      {/* <ApproachSection /> */}
      <InsightsSection />
    </div>
  )
}
