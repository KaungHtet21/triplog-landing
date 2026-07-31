import { motion } from 'framer-motion'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  index: number
}

export function TestimonialCard({
  quote,
  name,
  role,
  index,
}: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl border border-white/8 bg-bg-surface p-5 sm:rounded-3xl sm:p-7 md:p-8"
    >
      <p className="text-base leading-relaxed text-ink/90 sm:text-lg md:text-xl">
        “{quote}”
      </p>
      <footer className="mt-6">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </footer>
    </motion.blockquote>
  )
}
