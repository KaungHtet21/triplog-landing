import { motion } from 'framer-motion'

type GlowOrbProps = {
  className?: string
  delay?: number
}

/** Soft white ambient — matches black accent palette (no purple). */
export function GlowOrb({ className = '', delay = 0 }: GlowOrbProps) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-accent-soft blur-3xl ${className}`}
      animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.06, 1] }}
      transition={{ duration: 10, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}
