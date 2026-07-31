import { motion } from 'framer-motion'

type BentoCardProps = {
  title: string
  copy: string
  span?: string
  index: number
}

export function BentoCard({ title, copy, span = '', index }: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.2)' }}
      className={`rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-transparent p-6 ${span}`}
    >
      <div className="mb-4 h-px w-8 bg-white/50" />
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
    </motion.article>
  )
}
