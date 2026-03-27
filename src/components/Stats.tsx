'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 5, suffix: '+', label: 'Proyectos entregados' },
  { value: 5, suffix: '', label: 'Módulos en el ERP' },
  { value: 24, suffix: 'h', label: 'Tiempo de respuesta' },
  { value: 100, suffix: '%', label: 'Satisfacción clientes' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-black text-4xl md:text-5xl text-brand-gold">
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="bg-brand-gold/5 border-y border-brand-gold/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <Counter target={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
