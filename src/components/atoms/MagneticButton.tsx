import { useRef, type MouseEvent, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'

type MagneticButtonProps = HTMLMotionProps<'button'> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

export function MagneticButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 20 })
  const springY = useSpring(y, { stiffness: 280, damping: 20 })

  const onMove = (event: MouseEvent<HTMLButtonElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    variant === 'primary'
      ? 'bg-accent text-accent-ink hover:opacity-90'
      : 'bg-transparent text-ink border border-line hover:bg-accent-soft'

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition ${base} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
