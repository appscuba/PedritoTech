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
  Twitter,
  Search,
  ThumbsUp,
  ThumbsDown,
  Share2,
  MessageCircle
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
      <div className="min-h-screen bg-ed-navy text-slate-100 font-sans selection:bg-ed-blue/30">
        <nav className="fixed top-0 w-full z-50 bg-ed-navy/80 backdrop-blur-md border-b border-slate-800 py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button onClick={() => setView("home")} className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-ed-blue rounded-lg flex items-center justify-center shadow-lg shadow-ed-blue/20">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-lg font-display font-bold text-white group-hover:text-ed-blue transition-colors">
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

        <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
          {view === "privacy" ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-black mb-8">Política de Privacidad</h1>
              <div className="ed-card p-10 md:p-12 space-y-8 text-slate-400 leading-relaxed shadow-2xl">
                <p className="text-lg text-slate-300 font-medium">En <strong>PedritoTech Solutions</strong>, valoramos tu privacidad. Esta política describe cómo manejamos tu información.</p>
                
                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    1. Información que Recopilamos
                  </h2>
                  <p className="mb-4 text-slate-400">Solo recopilamos la información necesaria para brindarte nuestros servicios de software, la cual incluye:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ed-blue shrink-0 mt-0.5" />
                      <span>Nombre de contacto para identificación del servicio.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ed-blue shrink-0 mt-0.5" />
                      <span>Número de WhatsApp o dirección de correo electrónico para comunicación.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ed-blue shrink-0 mt-0.5" />
                      <span>Detalles técnicos del dispositivo (modelo, versión de software) necesarios para el proceso técnico.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    2. Uso de la Información
                  </h2>
                  <p className="mb-4">Tu información se utiliza exclusivamente para:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ed-blue shrink-0 mt-0.5" />
                      <span>Comunicarnos contigo sobre el estado de tu servicio.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ed-blue shrink-0 mt-0.5" />
                      <span>Realizar los procesos técnicos solicitados (FRP, SIM Unlock, etc.).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ed-blue shrink-0 mt-0.5" />
                      <span>Brindar soporte post-venta y garantía.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    3. Protección de Datos
                  </h2>
                  <p>Implementamos medidas de seguridad técnicas para asegurar que tus datos y los de tu dispositivo no sean accedidos por terceros no autorizados.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    4. Contacto
                  </h2>
                  <p>Si tienes dudas sobre tus datos, puedes contactarnos directamente en <strong className="text-ed-blue">appscuba@gmail.com</strong>.</p>
                </section>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-display font-black mb-8">Términos y Condiciones</h1>
              <div className="ed-card p-10 md:p-12 space-y-8 text-slate-400 leading-relaxed shadow-2xl">
                <p className="text-lg text-slate-300 font-medium">Al utilizar los servicios de <strong>PedritoTech Solutions</strong>, aceptas los siguientes términos:</p>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    1. Propiedad del Dispositivo
                  </h2>
                  <p>El cliente declara ser el propietario legal del dispositivo entregado para servicio. PedritoTech Solutions no se hace responsable por dispositivos de procedencia ilícita.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    2. Naturaleza del Servicio
                  </h2>
                  <p>Nuestros servicios son estrictamente de <strong>Software Informático</strong>. No realizamos reparaciones físicas de hardware.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    3. Garantía
                  </h2>
                  <p>Ofrecemos garantía sobre el trabajo de software realizado. La garantía queda anulada si el cliente manipula el software posteriormente.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    4. Pagos
                  </h2>
                  <p>El pago se realiza una vez completado el trabajo satisfactoriamente, según los métodos acordados (CUP, Transfermóvil, ENZONA o Internacional).</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-ed-blue rounded-full" />
                    5. Limitación de Responsabilidad
                  </h2>
                  <p>PedritoTech Solutions no se hace responsable por la pérdida de datos si el cliente no realizó una copia de seguridad previa.</p>
                </section>
              </div>
            </motion.div>
          )}
          
          <button 
            onClick={() => setView("home")}
            className="mt-12 px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-800 shadow-xl transition-all cursor-pointer flex items-center gap-2 group"
          >
            <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </button>
        </main>

        <footer className="py-12 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© 2026 PedritoTech Solutions. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ed-navy text-slate-100 font-sans selection:bg-ed-blue/30">
      {/* Floating WhatsApp */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:w-16 md:h-16"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white w-8 h-8 fill-white" />
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-ed-navy border-b border-slate-800/50 py-2" : "bg-ed-navy/50 backdrop-blur-sm py-4"}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-8">
          <button onClick={() => setView("home")} className="flex items-center gap-2 border-none bg-transparent cursor-pointer shrink-0">
            <Zap className="text-ed-blue w-8 h-8 fill-ed-blue" />
            <span className="text-xl font-display font-black text-white hidden sm:block tracking-tighter uppercase italic">
              PedritoTech
            </span>
          </button>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input 
              type="text" 
              placeholder="¿Qué servicio buscas hoy?" 
              className="w-full bg-slate-900/50 border border-slate-800 rounded-lg py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ed-blue transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-slate-300">
               <a href="#inicio" className="hover:text-ed-blue transition-colors">Cursos</a>
               <a href="#servicios" className="hover:text-ed-blue transition-colors">Servicios</a>
               <a href="#sobre-mí" className="hover:text-ed-blue transition-colors">Empresa</a>
            </div>

            <div className="h-6 w-px bg-slate-800 hidden md:block" />

            <div className="flex items-center gap-4">
               <a href={whatsappLink} className="text-sm font-bold text-white hover:text-ed-blue transition-colors shrink-0">Inicia sesión</a>
               <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block px-5 py-2.5 bg-transparent border border-ed-blue text-ed-blue text-xs font-black rounded-lg hover:bg-ed-blue hover:text-white transition-all uppercase tracking-wider"
              >
                Comienza gratis
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-52 md:pb-32 bg-ed-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-ed-blue/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black mb-8 leading-[1.1] tracking-tight text-white">
              ¡Aquí puede estar la solución a tus <span className="text-ed-blue">problemas digitales!</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed font-medium">
              Solucionamos bloqueos, recuperamos datos y optimizamos tus sistemas con los más altos estándares.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#servicios"
                className="w-full sm:w-auto px-10 py-4 ed-gradient text-white font-black rounded-lg hover:shadow-2xl hover:shadow-ed-blue/30 transition-all uppercase tracking-widest text-sm"
              >
                Ver servicios de software
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (Feed style) */}
      <section id="servicios" className="py-20 md:py-32 bg-ed-navy relative">
        <div className="max-w-2xl mx-auto px-6 flex flex-col gap-10">
          <div className="border-b border-slate-800 pb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase text-white tracking-widest italic">Servicios Populares</h2>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-ed-blue" />
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>
          </div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111b2d] border border-slate-800 rounded-xl overflow-hidden shadow-xl"
            >
              {/* Card Header */}
              <div className="p-5 flex items-center justify-between border-b border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ed-navy border border-slate-800 flex items-center justify-center text-ed-blue">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">PedritoTech Specialist</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-ed-blue" />
                      <span className="text-xs text-slate-500 font-medium tracking-tighter">@pedritoTech</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-0.5 flex items-center gap-1">
                      Hace 2 días • <Globe className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-ed-blue/10 border border-ed-blue/20 rounded text-[10px] font-black text-ed-blue uppercase tracking-widest">
                  Staff
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed font-bold mb-6">
                  {service.description}
                </p>
                <button className="text-ed-blue text-sm font-black uppercase tracking-widest hover:underline">
                  Ver más
                </button>
              </div>

              {/* Card Footer Interaction */}
              <div className="px-5 py-4 border-t border-slate-800/50 bg-slate-900/20 flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-6">
                   <button className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors cursor-pointer">
                      <ThumbsUp className="w-4 h-4" /> 4 Me gusta
                   </button>
                   <button className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors cursor-pointer">
                      <ThumbsDown className="w-4 h-4" /> No me gusta
                   </button>
                </div>
                <div className="flex gap-4">
                   <button className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors cursor-pointer">
                      <MessageSquare className="w-4 h-4" /> 12
                   </button>
                   <button className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="text-center pt-8">
             <button className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-lg text-sm font-black uppercase tracking-widest text-white hover:bg-slate-800 transition-all">
                Ver todos los procesos
             </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-24 md:py-40 overflow-hidden bg-ed-dark relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ed-blue/20 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="ed-card p-1 aspect-square rounded-[2rem] transform -rotate-3">
                 <div className="w-full h-full bg-ed-navy rounded-[1.8rem] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-ed-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center z-10">
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-ed-blue/10 rounded-full mx-auto mb-8 flex items-center justify-center border border-ed-blue/20">
                        <Smartphone className="text-ed-blue w-16 h-16 md:w-20 md:h-20" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase italic tracking-tighter">Pedro Martinez</h3>
                      <p className="text-ed-blue font-bold text-base uppercase tracking-[.2em] mt-2">Elite Code Specialist</p>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter">Experiencia <span className="text-ed-blue">Real</span></h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                Soy Pedro Martinez Figueredo, fundador de PedritoTech Solutions. Mi compromiso es la excelencia técnica en software. Con años enfrentando los retos más complejos de la seguridad móvil y sistemas operativos, he convertido esta pasión en una plataforma de soluciones ágiles y robustas.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Atención directa",
                  "Transparencia total",
                  "Tecnología de punta",
                  "Garantía oficial"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-100 font-black uppercase text-xs tracking-widest bg-ed-navy p-4 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-ed-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={emailLink}
                className="inline-flex items-center gap-3 text-ed-blue font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform group"
              >
                Enviar correo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 md:py-40 bg-ed-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-ed-dark border border-slate-800 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight uppercase italic tracking-tighter">¿Problemas con tu <span className="text-ed-blue underline decoration-slate-700 underline-offset-8">Software</span>?</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              No esperes más. Obtén un diagnóstico profesional y soluciones seguras. Aceptamos CUP, Transfermóvil, ENZONA y pagos internacionales.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-ed-blue text-white font-black rounded-lg hover:shadow-2xl hover:shadow-ed-blue/30 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 uppercase tracking-widest text-sm"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
              <a 
                href={emailLink}
                className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-slate-700 text-white font-black rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest text-sm"
              >
                <Mail className="w-5 h-5 text-ed-blue font-black" />
                E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-ed-navy border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-slate-800/50">
            <div className="flex items-center gap-3">
              <Zap className="text-ed-blue w-10 h-10 fill-ed-blue" />
              <span className="text-3xl font-display font-black text-white uppercase italic tracking-tighter">PedritoTech</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Soporte</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black text-xs uppercase tracking-widest">Acerca de</h4>
              <nav className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <a href="#" className="hover:text-ed-blue transition-colors">Nuestra Historia</a>
                <a href="#" className="hover:text-ed-blue transition-colors">Misión y Visión</a>
                <a href="#" className="hover:text-ed-blue transition-colors">Soporte Técnico</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black text-xs uppercase tracking-widest">Servicios</h4>
              <nav className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <a href="#" className="hover:text-ed-blue transition-colors">Liberación FRP</a>
                <a href="#" className="hover:text-ed-blue transition-colors">SIM Unlock</a>
                <a href="#" className="hover:text-ed-blue transition-colors">iOS Bypass</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black text-xs uppercase tracking-widest">Comunidad</h4>
              <nav className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <a href="#" className="hover:text-ed-blue transition-colors">X (Twitter)</a>
                <a href="#" className="hover:text-ed-blue transition-colors">Telegram Channel</a>
                <a href="#" className="hover:text-ed-blue transition-colors">GitHub</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black text-xs uppercase tracking-widest">Contacto</h4>
              <nav className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <a href="mailto:appscuba@gmail.com" className="hover:text-ed-blue transition-colors">appscuba@gmail.com</a>
                <span className="text-slate-500 italic">+53 59924051</span>
              </nav>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 font-black text-[10px] uppercase tracking-[0.4em]">
            <p>© 2026 PedritoTech Solutions. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-slate-900 rounded-lg hover:text-ed-blue transition-colors border border-slate-800"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-3 bg-slate-900 rounded-lg hover:text-ed-blue transition-colors border border-slate-800"><Github className="w-4 h-4" /></a>
              <a href="#" className="p-3 bg-slate-900 rounded-lg hover:text-ed-blue transition-colors border border-slate-800"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
