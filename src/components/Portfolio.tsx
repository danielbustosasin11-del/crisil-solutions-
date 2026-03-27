'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { ERP_LINK } from '@/lib/data'

const projects = [
  {
    title: 'Crisil.OS',
    desc: 'Sistema operativo empresarial para PyMEs bolivianas. Ventas, inventario, producción y finanzas en una sola plataforma.',
    tags: ['ERP', 'SaaS', 'React', 'Supabase'],
    link: ERP_LINK,
    image: '/portfolio/crisil-os.png',
    gradient: 'from-brand-green to-brand-dark-3',
  },
  {
    title: 'INAGRO Bolivia',
    desc: 'Landing page de alta conversión para el distribuidor oficial de drones agrícolas GTEEX en Bolivia. Posicionamos su tecnología de precisión RTK y hasta 60 ha/h de productividad para conquistar el mercado agro boliviano.',
    tags: ['Landing', 'HTML/CSS', 'Conversión', 'AgriTech'],
    gradient: 'from-green-900/50 to-brand-dark-2',
    link: 'https://inagrobol.netlify.app',
    image: '/portfolio/inagro.png',
  },
  {
    title: 'Crisil Studio Shop',
    desc: 'Landing page y tienda online para una cristalería artesanal boliviana con 30+ años de historia. Catálogo de productos, checkout integrado y storytelling de marca para llevar sus piezas únicas de reciclado a clientes nacionales e internacionales.',
    tags: ['E-commerce', 'Tienda Online', 'Lovable', 'Landing'],
    gradient: 'from-amber-900/50 to-brand-dark-2',
    link: 'https://crisilstudio.lovable.app',
    image: '/portfolio/crisil-studio.png',
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="py-24 bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-brand-gold">
            ✦ Nuestro trabajo
          </span>
          <h2 className="font-black uppercase text-4xl md:text-6xl mt-3">
            PROYECTOS QUE
            <br />
            HABLAN POR SÍ SOLOS
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300"
            >
              {/* Preview image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`} />
              </div>

              {/* Content */}
              <div className="bg-brand-dark-2 p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors"
                  >
                    Ver proyecto <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-gold/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
