import { motion } from 'framer-motion'
import { HOW_STEPS } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'

export function HowItWorksSection() {
  return (
    <section className="bg-bg-elevated py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Create. Invite. Travel."
          align="center"
        />
        <div className="relative mt-10 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3">
          <svg
            className="pointer-events-none absolute left-[16%] top-14 hidden h-8 w-[68%] md:block"
            viewBox="0 0 600 40"
            fill="none"
            aria-hidden
          >
            <motion.path
              d="M0 20 C150 0, 450 40, 600 20"
              stroke="var(--line)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>
          {HOW_STEPS.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="rounded-2xl border border-line bg-bg-surface p-6 sm:p-8"
            >
              <p className="text-sm font-medium text-subtle">{step.step}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 text-muted">{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
