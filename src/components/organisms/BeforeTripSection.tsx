import { BEFORE_TRIP_CARDS } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'
import { FeatureCard } from '../molecules/FeatureCard'

export function BeforeTripSection() {
  return (
    <section id="before" className="relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="Before the trip"
          title="The excitement starts long before the journey."
          description="Countdown, save, note, and collect inspiration — get the whole crew synced before anyone boards."
        />
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4">
          {BEFORE_TRIP_CARDS.map((card, index) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              copy={card.copy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
