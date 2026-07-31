import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${alignClass}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-subtle sm:mb-4 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
