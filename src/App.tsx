/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  Unlock, 
  Cloud, 
  Database, 
  Monitor, 
  Cpu, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Liberación de FRP",
    description: "Eliminación de cuenta Google en dispositivos Android de todas las marcas y modelos.",
    icon: <ShieldCheck className="w-8 h-8 text-sky-400" />,
    color: "from-sky-500/20 to-sky-500/5"
  },
  {
    title: "Liberación SIM",
    description: "Desbloqueo de red para usar cualquier operador nacional o internacional sin restricciones.",
    icon: <Unlock className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-500/20 to-indigo-500/5"
  },
  {
    title: "Cuentas iCloud",
    description: "Creación y configuración segura de cuentas iCloud para dispositivos Apple.",
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    title: "Recuperación de Archivos",
    description: "Rescate de fotos, documentos y datos importantes de discos dañados o borrados.",
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    title: "Instalación de Sistemas",
    description: "Instalación y optimización de Windows, macOS y Linux con los últimos drivers.",
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    title: "Actualización de Software",
    description: "Mantenimiento preventivo y correctivo de software para máxima velocidad.",
    icon: <Cpu className="w-8 h-8 text-rose-400" />,
    color: "from-rose-500/20 to-rose-500/5"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5359924051";
  const emailLink = "mailto:appscuba@gmail.com";

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-sky-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              PedritoTech
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "Servicios", "Sobre Mí", "Contacto"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-sky-500/25 active:scale-95"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white touch-target p-2 hover:bg-slate-800 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden z-50 shadow-2xl"
          >
            {["Inicio", "Servicios", "Sobre Mí", "Contacto"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-medium text-slate-300 py-2 border-b border-slate-800 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappLink}
              className="w-full py-4 bg-sky-500 text-white text-center font-bold rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-transform"
            >
              Contactar por WhatsApp
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-sky-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Soluciones de Software Profesional
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Potencia tu <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Tecnología</span> al Máximo
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed px-4">
              En PedritoTech Solutions, transformamos problemas de software en soluciones rápidas. Liberación de dispositivos, recuperación de datos y mantenimiento experto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <a 
                href="#servicios"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
              >
                Ver Servicios
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={whatsappLink}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-sky-400" />
                Consulta Gratis
              </a>
            </div>
          </motion.div>

          {/* Stats/Trust */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-t border-slate-900 pt-12"
          >
            {[
              { label: "Años de Experiencia", val: "5+" },
              { label: "Clientes Felices", val: "1k+" },
              { label: "Tasa de Éxito", val: "99%" },
              { label: "Soporte 24/7", val: "Si" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-slate-900/20 border border-slate-800/50">
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.val}</div>
                <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">Ofrecemos soluciones integrales para tus dispositivos y sistemas informáticos con la mayor seguridad.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 md:p-8 rounded-3xl bg-gradient-to-br ${service.color} border border-slate-800 hover:border-slate-700 transition-all group flex flex-col`}
              >
                <div className="mb-6 p-3 bg-slate-950/50 rounded-2xl w-fit border border-slate-800 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-sky-400 uppercase tracking-widest mt-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  Garantizado
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-sky-500/20 blur-[100px] -z-10" />
              <div className="aspect-square rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-12 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>
                <div className="text-center z-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-sky-500/40">
                    <Smartphone className="text-white w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">Pedro Martinez Figueredo</h3>
                  <p className="text-sky-400 font-medium text-sm md:text-base">Especialista en Software</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Experiencia y Compromiso</h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                Soy Pedro Martinez Figueredo, fundador de PedritoTech Solutions. Mi pasión es resolver los desafíos tecnológicos más complejos. Con años de experiencia en el sector del software informático, me especializo en dar una segunda vida a tus dispositivos y asegurar que tu información esté siempre disponible y protegida.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Atención personalizada y directa",
                  "Precios competitivos y transparentes",
                  "Uso de herramientas de última generación",
                  "Resultados rápidos y garantizados"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                    <div className="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={emailLink}
                className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors group"
              >
                Escríbeme un correo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-16 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-sky-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-8 leading-tight">¿Listo para solucionar tu problema?</h2>
            <p className="text-sky-100 text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto opacity-90">
              No esperes más. Contáctame ahora mismo y obtén un diagnóstico rápido para tu dispositivo o sistema.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-sky-600 font-black rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                <MessageSquare className="w-6 h-6" />
                WhatsApp
              </a>
              <a 
                href={emailLink}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-sky-900/30 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-sky-900/40 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <Mail className="w-6 h-6" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Zap className="text-sky-500 w-6 h-6 fill-sky-500" />
              <span className="text-xl font-display font-bold text-white">PedritoTech</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs md:text-sm text-slate-500">
            <p>© 2026 PedritoTech Solutions. Todos los derechos reservados.</p>
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
