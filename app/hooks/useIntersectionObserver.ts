// hooks/useIntersectionObserver.ts
import { useEffect, useState } from 'react'

export function useIntersectionObserver(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        },
        {
          threshold: 0.5
        }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref])

  return isIntersecting
}