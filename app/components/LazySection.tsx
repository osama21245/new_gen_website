'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
  className?: string
}

export function LazySection({ 
  children, 
  fallback, 
  rootMargin = '100px',
  threshold = 0.1,
  className = ''
}: LazySectionProps) {
  const [isInView, setIsInView] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsInView(true)
            setHasLoaded(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin,
        threshold
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [rootMargin, threshold, hasLoaded])

  const defaultFallback = (
    <div className="min-h-[400px] flex items-center justify-center">
      <motion.div
        className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  )
} 