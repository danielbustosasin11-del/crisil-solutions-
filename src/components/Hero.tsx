'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_LINK, ERP_LINK } from '@/lib/data'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-dark via-brand-dark-3 to-brand-dark">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Gradient blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-brand-green/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-6">
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-brand-gold border border-brand-gold/30 bg-brand-gold/5 px-4 py-2 rounded-full">
              ✦ SOLUCIONES TECH PARA EMPRESAS BOLIVIANAS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-black uppercase leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          >
            DIGITALIZA
            <br />
            TU{' '}
            <span className="bg-brand-gold text-brand-dark px-2 inline-block">
              EMPRESA.
            </span>
            <br />
            ESCALA MÁS RÁPIDO.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-400 max-w-2xl"
          >
            ERPs, automatizaciones y presencia digital que transforman cómo
            operan las empresas en Bolivia.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
            <motion.a
              href={ERP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-8 py-4 rounded-full text-base hover:bg-brand-gold-light transition-colors shadow-lg shadow-brand-gold/20"
            >
              Ver Demo del ERP
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-base hover:border-white/40 hover:bg-white/5 transition-all"
            >
              💬 WhatsApp
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.p variants={item} className="text-xs text-gray-600 mt-2">
            ✦ Empresas bolivianas ya digitalizan con nosotros
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
