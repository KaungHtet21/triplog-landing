import { TESTIMONIALS } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'
import { TestimonialCard } from '../molecules/TestimonialCard'

export function TestimonialsSection() {
  return (
    <section className="bg-bg-elevated py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="Loved by crews"
          title="Stories from the road."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={item.name} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
