import { motion } from 'framer-motion'
import { MagneticButton } from '../atoms/MagneticButton'

export function FinalCtaSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32 md:py-40"
    >
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl md:text-6xl"
        >
          Ready for your next adventure?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-5 max-w-xl text-muted"
        >
          Download Triplog and give your crew a home for the trip — before,
          during, and long after.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="mt-8 sm:mt-10"
        >
          <MagneticButton className="w-full sm:w-auto">
            Download Triplog
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
