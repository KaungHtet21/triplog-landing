type BrandMarkProps = {
  className?: string
  size?: number
  alt?: string
}

/** App icon used as the landing brand mark. */
export function BrandMark({
  className = '',
  size = 36,
  alt = 'Triplog',
}: BrandMarkProps) {
  return (
    <img
      src="/triplog-icon.png"
      alt={alt}
      width={size}
      height={size}
      className={`rounded-[22%] bg-black object-cover ring-1 ring-white/10 ${className}`}
      draggable={false}
    />
  )
}
