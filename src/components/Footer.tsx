import { EMAIL, WHATSAPP_LINK } from '@/lib/data'
import { CrisilLogo } from '@/components/ui/CrisilLogo'

const footerLinks = [
  { label: 'Crisil.OS', href: '#erp' },
  { label: 'Automatizaciones', href: '#servicios' },
  { label: 'Landing', href: '#servicios' },
  { label: 'Tiendas', href: '#servicios' },
  { label: 'IA', href: '#servicios' },
  { label: 'Asesoría', href: '#servicios' },
]

export function Footer() {
  return (
    <footer className="border-t border-brand-gold/10 bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <CrisilLogo size={28} className="mb-2" />
            <p className="text-gray-500 text-sm italic mb-3">
              &quot;Tecnología que mueve empresas.&quot;
            </p>
            <p className="text-xs text-gray-600">
              Bolivia — Cochabamba
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Servicios</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Contacto</p>
            <div className="space-y-2">
              <a
                href={`mailto:${EMAIL}`}
                className="block text-sm text-gray-400 hover:text-brand-gold transition-colors"
              >
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-[#25D366] transition-colors"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Crisil Solutions. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="text-xs text-gray-600 hover:text-brand-gold transition-colors">LinkedIn</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-[#25D366] transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
