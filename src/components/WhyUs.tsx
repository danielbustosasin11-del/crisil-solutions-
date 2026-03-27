import { MapPin, Zap, Bot, Code2 } from 'lucide-react'
import { AnimatedSection } from './ui/AnimatedSection'

const reasons = [
  {
    icon: MapPin,
    title: 'Hecho en Bolivia para Bolivia',
    desc: 'Entendemos el contexto local. Precios en Bs., integración con pagos bolivianos, soporte en tu zona horaria.',
  },
  {
    icon: Zap,
    title: 'Velocidad real',
    desc: 'Primeras versiones funcionales en 1–3 semanas. Sin burocracia ni excusas.',
  },
  {
    icon: Bot,
    title: 'IA integrada en todo',
    desc: 'Usamos las últimas herramientas de IA (Claude, GitHub Copilot) para entregar más rápido y con mejor calidad.',
  },
  {
    icon: Code2,
    title: 'El código es tuyo',
    desc: 'Sin lock-in. Entregamos código fuente, documentación y capacitación. Podés tomar el control cuando quieras.',
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-brand-gold">
            ✦ Por qué nosotros
          </span>
          <h2 className="font-black uppercase text-4xl md:text-6xl mt-3">
            POR QUÉ ELEGIRNOS
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <AnimatedSection key={reason.title} delay={i * 0.1}>
                <div className="group bg-brand-dark-2 border border-brand-gold/20 rounded-2xl p-8 hover:border-brand-gold/60 hover:shadow-[0_0_30px_rgba(200,168,75,0.12)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-brand-gold" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
