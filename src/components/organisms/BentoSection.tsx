import { BENTO_ITEMS } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'
import { BentoCard } from '../molecules/BentoCard'

export function BentoSection() {
  return (
    <section className="py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="Everything your crew needs"
          title="Built for the full journey."
          description="From the first invite to the last memory — tools that stay out of the way until you need them."
        />
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {BENTO_ITEMS.map((item, index) => (
            <BentoCard
              key={item.title}
              title={item.title}
              copy={item.copy}
              span={item.span}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
