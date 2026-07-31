import { motion } from 'framer-motion'
import { PLUS_GAMES } from '../../lib/content'
import { SectionHeading } from '../molecules/SectionHeading'
import { MagneticButton } from '../atoms/MagneticButton'

export function PremiumSection() {
  return (
    <section id="plus" className="relative overflow-hidden py-20 sm:py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_45%)]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          eyebrow="Triplog Plus"
          title="Premium games for the crew."
          description="Unlock playful challenges that turn transit, dinners, and downtime into shared lore."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="accent-border mt-10 rounded-2xl p-px sm:mt-14 sm:rounded-[1.75rem]"
        >
          <div className="rounded-2xl bg-bg-surface p-5 sm:rounded-[1.75rem] sm:p-8 md:p-12">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {PLUS_GAMES.map((game, index) => (
                <motion.article
                  key={game.title}
                  whileHover={{ y: -4 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/[0.08] bg-black/50 p-5 sm:p-6"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-subtle">
                    Plus
                  </p>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink sm:text-2xl">
                    {game.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{game.copy}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-8 sm:mt-10">
              <MagneticButton className="w-full sm:w-auto">
                Explore Triplog Plus
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
