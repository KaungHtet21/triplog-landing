import type { ReactNode } from 'react'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  children: ReactNode
  className?: string
}

export function Heading({
  as: Tag = 'h2',
  children,
  className = '',
}: HeadingProps) {
  return (
    <Tag className={`font-semibold tracking-[-0.03em] text-ink ${className}`}>
      {children}
    </Tag>
  )
}
