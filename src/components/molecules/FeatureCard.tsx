import { motion } from 'framer-motion'

type FeatureCardProps = {
  title: string
  copy: string
  index: number
}

export function FeatureCard({ title, copy, index }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-line bg-bg-surface/60 p-6 transition hover:border-line hover:bg-bg-surface md:p-7"
    >
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
        {copy}
      </p>
    </motion.article>
  )
}
