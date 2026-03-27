'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  LayoutDashboard,
  Zap,
  Globe,
  ShoppingCart,
  Bot,
  Lightbulb,
  Check,
} from 'lucide-react'
import { ERP_LINK, WHATSAPP_LINK } from '@/lib/data'

const services = [
  {
    id: 'erp',
    icon: LayoutDashboard,
    badge: '⭐ PRODUCTO PROPIO',
    title: 'Crisil.OS',
    description:
      'Sistema operativo de tu empresa. Vendé, controlá stock, gestioná producción y finanzas desde una sola plataforma.',
    features: [
      'Ventas & Cotizaciones',
      'Inventario & Stock',
      'Producción',
      'Finanzas & Caja',
      'Dashboard por Rol',
    ],
    cta: 'Ver Demo',
    ctaLink: ERP_LINK,
    highlight: true,
  },
  {
    id: 'automatizaciones',
    icon: Zap,
    badge: null,
    title: 'Automatizaciones',
    description:
      'Flujos automáticos que trabajan mientras dormís. N8N, Make, Zapier, o integración custom con APIs.',
    features: [
      'N8N / Make / Zapier',
      'APIs personalizadas',
      'WhatsApp Business API',
      'Reportes automáticos',
    ],
    cta: 'Consultanos',
    ctaLink: WHATSAPP_LINK,
    highlight: false,
  },
  {
    id: 'landing',
    icon: Globe,
    badge: null,
    title: 'Landing Pages',
    description:
      'Páginas que convierten visitantes en clientes. Diseño + desarrollo + deploy incluido.',
    features: [
      'Diseño custom',
      'Optimizadas para SEO',
      'Integración WhatsApp',
      'Analítica incluida',
    ],
    cta: 'Ver ejemplos',
    ctaLink: '#portfolio',
    highlight: false,
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    badge: null,
    title: 'Tiendas Online',
    description:
      'E-commerce listo para vender en Bolivia. Con pasarelas de pago locales e internacionales.',
    features: [
      'Catálogo ilimitado',
      'Pagos QR / Tigo',
      'Panel de gestión',
      'Multi-vendedor opcional',
    ],
    cta: 'Cotizar',
    ctaLink: '#contacto',
    highlight: false,
  },
  {
    id: 'claude-code',
    icon: Bot,
    badge: '🆕 NUEVO',
    title: 'Claude Code Setup',
    description:
      'Instalamos y configuramos IA en tu equipo de desarrollo. Multiplicá la velocidad de tu equipo.',
    features: [
      'Instalación completa',
      'MCP servers custom',
      'Capacitación del equipo',
      'Soporte mensual',
    ],
    cta: 'Saber más',
    ctaLink: WHATSAPP_LINK,
    highlight: false,
  },
  {
    id: 'asesoria',
    icon: Lightbulb,
    badge: null,
    title: 'Asesoría Tech',
    description:
      'Estrategia tecnológica para escalar tu empresa. Por hora o paquetes mensuales.',
    features: [
      'Diagnóstico gratuito',
      'Roadmap digital',
      'Stack recomendado',
      'Acompañamiento continuo',
    ],
    cta: 'Agendar llamada',
    ctaLink: '#contacto',
    highlight: false,
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="py-24 bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-brand-gold">
            ✦ Lo que hacemos
          </span>
          <h2 className="font-black uppercase text-4xl md:text-6xl mt-3 mb-4">
            UNA SOLUCIÓN PARA
            <br />
            CADA NECESIDAD
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            const isHighlight = service.highlight
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  isHighlight
                    ? 'bg-brand-dark-3 border-brand-green-light/40 lg:col-span-1 hover:border-brand-gold/60 hover:shadow-[0_0_30px_rgba(200,168,75,0.12)]'
                    : 'bg-brand-dark-2 border-brand-gold/20 hover:border-brand-gold/60 hover:shadow-[0_0_30px_rgba(200,168,75,0.12)]'
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <span className="inline-block text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2 py-1 rounded-full mb-4">
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check size={14} className="text-brand-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.ctaLink}
                  target={service.ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={service.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  {service.cta} →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
