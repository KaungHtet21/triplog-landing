import type { ReactNode } from 'react'

type TextProps = {
  children: ReactNode
  className?: string
}

export function Text({ children, className = '' }: TextProps) {
  return (
    <p className={`text-base leading-relaxed text-muted md:text-lg ${className}`}>
      {children}
    </p>
  )
}
