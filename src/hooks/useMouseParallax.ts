import { useEffect, useState } from 'react'

export function useMouseParallax(strength = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const onMove = (event: MouseEvent) => {
      if (!finePointer.matches || reduceMotion.matches) return
      const x = (event.clientX / window.innerWidth - 0.5) * strength
      const y = (event.clientY / window.innerHeight - 0.5) * strength
      setOffset({ x, y })
    }

    const reset = () => setOffset({ x: 0, y: 0 })

    window.addEventListener('mousemove', onMove, { passive: true })
    finePointer.addEventListener('change', reset)
    reduceMotion.addEventListener('change', reset)

    return () => {
      window.removeEventListener('mousemove', onMove)
      finePointer.removeEventListener('change', reset)
      reduceMotion.removeEventListener('change', reset)
    }
  }, [strength])

  return offset
}
