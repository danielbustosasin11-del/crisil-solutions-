'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, FileText, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Diagnóstico',
    desc: 'Llamada gratis de 30 min para entender tu negocio y necesidades reales.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Propuesta',
    desc: 'Alcance detallado, tiempo estimado y precio fijo. Sin sorpresas.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Desarrollo',
    desc: 'Iteraciones rápidas con acceso al progreso en tiempo real.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Lanzamiento',
    desc: 'Deploy, capacitación del equipo y soporte post-lanzamiento incluido.',
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-brand-dark-2" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-brand-gold">
            ✦ Cómo trabajamos
          </span>
          <h2 className="font-black uppercase text-4xl md:text-6xl mt-3 mb-4">
            DE LA IDEA AL LANZAMIENTO
          </h2>
          <p className="text-gray-400">Proceso simple. Sin sorpresas. Sin vueltas.</p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-12 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-brand-gold/10">
            <motion.div
              className="h-full bg-brand-gold/40 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-brand-dark border border-brand-gold/30 flex items-center justify-center">
                      <Icon size={32} className="text-brand-gold" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-gold text-brand-dark text-xs font-black flex items-center justify-center font-mono">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
