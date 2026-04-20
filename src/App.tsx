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
  Globe,
  Github,
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

type View = "home" | "privacy" | "terms";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<View>("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when changing view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const whatsappLink = "https://wa.me/5359924051";
  const emailLink = "mailto:appscuba@gmail.com";

  if (view === "privacy" || view === "terms") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30">
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button onClick={() => setView("home")} className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-lg font-display font-bold text-white group-hover:text-sky-400 transition-colors">
                PedritoTech
              </span>
            </button>
            <button 
              onClick={() => setView("home")}
              className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
              Cerrar
            </button>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          {view === "privacy" ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-black mb-8">Política de Privacidad</h1>
              <div className="space-y-8 text-slate-400 leading-relaxed">
                <p className="text-lg">En <strong>PedritoTech Solutions</strong>, valoramos tu privacidad. Esta política describe cómo manejamos tu información.</p>
                
                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    1. Información que Recopilamos
                  </h2>
                  <p className="mb-4">Solo recopilamos la información necesaria para brindarte nuestros servicios de software, la cual incluye:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span>Nombre de contacto para identificación del servicio.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span>Número de WhatsApp o dirección de correo electrónico para comunicación.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span>Detalles técnicos del dispositivo (modelo, versión de software) necesarios para el proceso técnico.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    2. Uso de la Información
                  </h2>
                  <p className="mb-4">Tu información se utiliza exclusivamente para:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span>Comunicarnos contigo sobre el estado de tu servicio.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span>Realizar los procesos técnicos solicitados (FRP, SIM Unlock, etc.).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span>Brindar soporte post-venta y garantía.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    3. Protección de Datos
                  </h2>
                  <p>Implementamos medidas de seguridad técnicas para asegurar que tus datos y los de tu dispositivo no sean accedidos por terceros no autorizados. No vendemos ni compartimos tu información con empresas de marketing.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    4. Contacto
                  </h2>
                  <p>Si tienes dudas sobre tus datos, puedes contactarnos directamente en <strong>appscuba@gmail.com</strong>.</p>
                </section>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-black mb-8">Términos y Condiciones</h1>
              <div className="space-y-8 text-slate-400 leading-relaxed">
                <p className="text-lg">Al utilizar los servicios de <strong>PedritoTech Solutions</strong>, aceptas los siguientes términos:</p>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    1. Propiedad del Dispositivo
                  </h2>
                  <p>El cliente declara ser el propietario legal del dispositivo entregado para servicio. PedritoTech Solutions no se hace responsable por dispositivos de procedencia ilícita. Nos reservamos el derecho de rechazar servicios si sospechamos de la legalidad del equipo.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    2. Naturaleza del Servicio
                  </h2>
                  <p>Nuestros servicios son estrictamente de <strong>Software Informático</strong>. No realizamos reparaciones físicas de hardware (pantallas, baterías, etc.) a menos que se especifique explícitamente en un presupuesto personalizado.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    3. Garantía
                  </h2>
                  <p>Ofrecemos garantía sobre el trabajo de software realizado. La garantía queda anulada si el cliente manipula el software posteriormente (root, cambios de ROM no autorizados) o si el dispositivo presenta fallas físicas posteriores al servicio.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    4. Pagos
                  </h2>
                  <p>Los precios se acuerdan antes de iniciar el servicio. El pago se realiza una vez completado el trabajo satisfactoriamente, según los métodos de pago electrónicos o en efectivo acordados.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    5. Limitación de Responsabilidad
                  </h2>
                  <p>PedritoTech Solutions no se hace responsable por la pérdida de datos si el cliente no realizó una copia de seguridad previa. Aunque siempre intentamos preservar la información, ciertos procesos técnicos requieren el borrado completo del dispositivo.</p>
                </section>
              </div>
            </motion.div>
          )}
          
          <button 
            onClick={() => setView("home")}
            className="mt-12 px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Volver al Inicio
          </button>
        </main>

        <footer className="py-12 border-t border-slate-900 text-center text-sm text-slate-500">
          <p>© 2026 PedritoTech Solutions. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-sky-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => setView("home")} className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              PedritoTech
            </span>
          </button>

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
              Expertos en <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Soluciones de Software</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed px-4">
              En PedritoTech Solutions, nos especializamos exclusivamente en software informático. Brindamos servicios técnicos de élite, desde liberaciones hasta recuperación de datos, con estándares internacionales.
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

      {/* Payment Methods Section */}
      <section className="py-12 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Pagos Flexibles</h3>
              <p className="text-slate-400 text-sm">Aceptamos pagos nacionales e internacionales para tu comodidad.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl border border-slate-800">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">CUP (Pesos Cubanos)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">Transfermóvil</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">ENZONA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl border border-slate-800">
                <Globe className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">Pagos Internacionales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Soluciones de Software</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base italic">Especialización exclusiva en entornos digitales y sistemas operativos. No trabajamos hardware.</p>
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
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Expertos en Software</h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                Soy Pedro Martinez Figueredo, fundador de PedritoTech Solutions. Mi enfoque es 100% digital: resolver los desafíos de software más complejos con precisión técnica. Con años de especialización en sistemas operativos y seguridad móvil, garantizo que tu tecnología funcione de manera óptima y segura.
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
              No esperes más. Contáctame ahora mismo y obtén un diagnóstico rápido. Aceptamos CUP, Transfermóvil, ENZONA y pagos internacionales.
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
              <a href="https://x.com/pedritoTech" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/appscuba" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-lg" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs md:text-sm text-slate-500">
            <p>© 2026 PedritoTech Solutions. Todos los derechos reservados.</p>
            <div className="flex gap-6 md:gap-8">
              <button onClick={() => setView("privacy")} className="hover:text-white transition-colors">Privacidad</button>
              <button onClick={() => setView("terms")} className="hover:text-white transition-colors">Términos</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
