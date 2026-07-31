import { Navbar } from '../components/organisms/Navbar'
import { HeroSection } from '../components/organisms/HeroSection'
import { BeforeTripSection } from '../components/organisms/BeforeTripSection'
import { TravelTogetherSection } from '../components/organisms/TravelTogetherSection'
import { DisposableCameraSection } from '../components/organisms/DisposableCameraSection'
import { BentoSection } from '../components/organisms/BentoSection'
import { HowItWorksSection } from '../components/organisms/HowItWorksSection'
import { MemoriesSection } from '../components/organisms/MemoriesSection'
import { PremiumSection } from '../components/organisms/PremiumSection'
import { TestimonialsSection } from '../components/organisms/TestimonialsSection'
import { FinalCtaSection } from '../components/organisms/FinalCtaSection'
import { Footer } from '../components/organisms/Footer'

export function LandingPage() {
  return (
    <main className="bg-bg text-ink">
      <Navbar />
      <HeroSection />
      <BeforeTripSection />
      <TravelTogetherSection />
      <DisposableCameraSection />
      <BentoSection />
      <HowItWorksSection />
      <MemoriesSection />
      <PremiumSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
