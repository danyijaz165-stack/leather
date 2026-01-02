'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'fade'
  delay?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const directionClass = {
    up: 'fade-in-up',
    left: 'fade-in-left',
    right: 'fade-in-right',
    fade: 'fade-in-up',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${directionClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

