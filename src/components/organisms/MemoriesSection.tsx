import { motion } from 'framer-motion'
import { MEMORY_PHOTOS } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'

export function MemoriesSection() {
  return (
    <section className="overflow-hidden py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="Trip memories"
          title="Relive the trip like a film strip."
          description="A living gallery of moments your crew captured — imperfect, honest, unforgettable."
        />
      </div>
      <div className="mx-auto mt-10 max-w-6xl columns-2 gap-3 px-4 sm:mt-14 sm:gap-4 sm:px-5 md:columns-3 md:px-8 lg:columns-4">
        {MEMORY_PHOTOS.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            initial={{ opacity: 0, y: 48, rotate: index % 2 === 0 ? -2.5 : 2.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (index % 4) * 0.06 }}
            className="mb-4 w-full break-inside-avoid rounded-2xl object-cover ring-1 ring-white/10"
          />
        ))}
      </div>
    </section>
  )
}
