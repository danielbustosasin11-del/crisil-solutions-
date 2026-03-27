'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ExternalLink } from 'lucide-react'
import { ERP_LINK } from '@/lib/data'

const features = [
  {
    title: 'Dashboard personalizable por rol',
    desc: 'Cada usuario ve lo que necesita',
  },
  {
    title: 'Ventas y cotizaciones en tiempo real',
    desc: 'De cotización a factura en 2 clicks',
  },
  {
    title: 'Control de inventario inteligente',
    desc: 'Alertas de stock bajo automáticas',
  },
  {
    title: 'Módulo de producción',
    desc: 'Órdenes, progreso y costos unificados',
  },
  {
    title: 'Finanzas y flujo de caja',
    desc: 'Sabé exactamente cuánto tenés',
  },
]

export function ERPShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="erp" className="py-24 bg-brand-dark-3" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-brand-gold mb-4 block">
              ✦ Producto propio
            </span>
            <h2 className="font-black uppercase text-4xl md:text-5xl leading-tight mb-4">
              EL SISTEMA
              <br />
              <span className="bg-brand-gold text-brand-dark px-2">OPERATIVO</span>
              <br />
              DE TU EMPRESA
            </h2>
            <p className="text-gray-400 mb-8">
              Crisil.OS — gestión completa sin Excel, sin papeles, sin perder el control.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {features.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{f.title}</span>
                    <br />
                    <span className="text-sm text-gray-400">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={ERP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-colors shadow-lg shadow-brand-gold/20"
            >
              Probar Demo Gratuita
              <ExternalLink size={16} />
            </a>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['Multi-empresa', 'Multi-usuario', 'Hecho para Bolivia'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-mono text-brand-gold border border-brand-gold/20 bg-brand-gold/5 px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column — Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl shadow-brand-gold/10">
              {/* Browser bar */}
              <div className="bg-[#1A1A1C] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 bg-brand-dark rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                  crisil-erp.vercel.app
                </div>
              </div>
              {/* iframe */}
              <iframe
                src={ERP_LINK}
                className="w-full h-[480px]"
                title="Demo Crisil.OS"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Demo button */}
      <motion.a
        href={ERP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-24 left-6 z-50 bg-brand-gold text-brand-dark
                   font-bold text-sm px-4 py-3 rounded-full shadow-lg
                   hover:bg-brand-gold-light transition-colors hidden md:flex items-center gap-1"
      >
        ✦ Demo Crisil.OS en vivo
      </motion.a>
    </section>
  )
}
