'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { AnimatedSection } from './ui/AnimatedSection'
import { WHATSAPP_LINK } from '@/lib/data'

const plans = [
  {
    name: 'Starter',
    monthly: 800,
    annual: 640,
    users: 'Hasta 3',
    modules: 'Ventas + Inventario',
    support: 'Email',
    customDashboard: false,
    onboarding: false,
    cta: 'Empezar',
    popular: false,
    ctaLabel: undefined as string | undefined,
  },
  {
    name: 'Profesional',
    monthly: 1500,
    annual: 1200,
    users: 'Hasta 15',
    modules: 'Todos los módulos',
    support: 'Email + WhatsApp',
    customDashboard: true,
    onboarding: true,
    cta: 'Empezar Ahora',
    popular: true,
    ctaLabel: undefined as string | undefined,
  },
  {
    name: 'Enterprise',
    monthly: null as number | null,
    annual: null as number | null,
    users: 'Ilimitado',
    modules: 'Todos + custom',
    support: 'Dedicado',
    customDashboard: true,
    onboarding: true,
    ctaLabel: 'Premium' as string | undefined,
    cta: 'Hablar con ventas',
    popular: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="precios" className="py-24 bg-brand-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-brand-gold">
            ✦ Precios
          </span>
          <h2 className="font-black uppercase text-4xl md:text-6xl mt-3 mb-4">
            INVERSIÓN QUE SE
            <br />
            RECUPERA SOLA
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-brand-dark border border-brand-gold/20 rounded-full p-1 mt-4">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual ? 'bg-brand-gold text-brand-dark' : 'text-gray-400'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                annual ? 'bg-brand-gold text-brand-dark' : 'text-gray-400'
              }`}
            >
              Anual
              <span className="ml-1 text-xs text-green-400">−20%</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 border h-full flex flex-col ${
                  plan.popular
                    ? 'border-brand-gold ring-2 ring-brand-gold/50 bg-brand-dark-3'
                    : 'border-brand-gold/20 bg-brand-dark'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="flex items-center gap-1 text-xs font-mono font-bold text-brand-dark bg-brand-gold px-3 py-1 rounded-full self-start mb-4">
                    <Star size={10} fill="currentColor" />
                    MÁS POPULAR
                  </div>
                )}

                <h3 className="font-black text-2xl mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  {plan.monthly ? (
                    <motion.div key={annual ? 'annual' : 'monthly'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <span className="font-black text-4xl text-brand-gold">
                        Bs. {annual ? plan.annual : plan.monthly}
                      </span>
                      <span className="text-gray-400 text-sm">/mes</span>
                    </motion.div>
                  ) : (
                    <span className="font-black text-3xl text-brand-gold">A medida</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    `Usuarios: ${plan.users}`,
                    `Módulos: ${plan.modules}`,
                    `Soporte: ${plan.support}`,
                    plan.customDashboard ? 'Dashboard custom ✓' : 'Dashboard custom ✗',
                    plan.onboarding
                      ? `Onboarding${plan.ctaLabel === 'Premium' ? ' Premium' : ''} ✓`
                      : 'Onboarding ✗',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check size={14} className="text-brand-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.name === 'Enterprise' ? WHATSAPP_LINK : '#contacto'}
                  target={plan.name === 'Enterprise' ? '_blank' : undefined}
                  rel={plan.name === 'Enterprise' ? 'noopener noreferrer' : undefined}
                  className={`w-full text-center font-bold py-3 rounded-full transition-colors block ${
                    plan.popular
                      ? 'bg-brand-gold text-brand-dark hover:bg-brand-gold-light'
                      : 'border border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Custom project CTA */}
        <AnimatedSection className="text-center border border-brand-gold/20 rounded-2xl p-8 bg-brand-dark">
          <p className="text-gray-400 mb-4">
            ¿Necesitás una landing, tienda online o automatización?
          </p>
          <h3 className="font-bold text-xl mb-2">
            Trabajamos por proyecto con presupuesto fijo y tiempo estimado.
          </h3>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 mt-4 border border-brand-gold text-brand-gold font-bold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all"
          >
            Cotizá tu proyecto →
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
