"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Clock, Smartphone, Moon, Settings, Users, Heart, CheckCircle, X, ChevronDown, Scissors, Sparkles, Stethoscope, Briefcase, Calendar } from "lucide-react"
import { trackWhatsAppClick, trackDemoClick, trackReferralClick, trackEvent } from "@/lib/analytics"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const whatsappLink = "https://wa.me/5493834035119?text=Hola%2C%20quiero%20probar%201minuto"

  const handleWhatsAppClick = (location: string) => {
    trackWhatsAppClick(location)
    window.open(whatsappLink, "_blank")
  }

  const handleDemoClick = () => {
    trackDemoClick()
  }

  const handleReferralClick = () => {
    trackReferralClick()
  }

  useEffect(() => {
    setIsVisible(true)
    trackEvent("page_load", {
      event_category: "engagement",
      event_label: "landing_page",
    })
  }, [])

  const faqs = [
    {
      question: "¿Como funcionan los turnos por WhatsApp?",
      answer: "Tu cliente entra al link de tu agenda, elige dia y horario, completa sus datos y automaticamente se abre WhatsApp con el turno listo para enviar. Vos recibis el mensaje y listo."
    },
    {
      question: "¿Necesito instalar algo?",
      answer: "No. 1minuto funciona 100% online. Solo necesitas compartir el link de tu agenda con tus clientes. Ellos tampoco necesitan instalar nada."
    },
    {
      question: "¿Sirve para mi negocio?",
      answer: "Si trabajas con turnos o reservas, si. Funciona perfecto para peluquerias, barberias, esteticas, consultorios, profesionales independientes y cualquier servicio que necesite agendar citas."
    },
    {
      question: "¿Como recibe el turno el cliente?",
      answer: "Cuando tu cliente reserva, se abre WhatsApp automaticamente con todos los datos del turno. Solo tiene que enviarlo y vos lo recibis al instante."
    },
    {
      question: "¿Se puede personalizar?",
      answer: "Si. Podes configurar tus servicios, precios, horarios disponibles, duracion de cada turno y mas. Todo se adapta a como trabajas vos."
    },
    {
      question: "¿Cuanto tiempo tarda configurarlo?",
      answer: "Menos de 5 minutos. Completas los datos de tu negocio, configuras tus servicios y horarios, y ya tenes tu agenda lista para compartir."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "1minuto",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Sistema de turnos online que envia las reservas directo a WhatsApp. Automatiza tu agenda y ahorra tiempo.",
            "offers": {
              "@type": "Offer",
              "price": "20000",
              "priceCurrency": "ARS"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "150"
            }
          })
        }}
      />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Minuto%20%281%29-vgtWesMNDiu2R1ZAT4OmxitPpcSZJl.png"
              alt="1minuto - Sistema de turnos por WhatsApp"
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleWhatsAppClick("header")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>Empezar gratis</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <section className="py-8 md:py-16">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Video Column - Left side on desktop, top on mobile */}
                <div className="order-2 lg:order-1">
                  <div className="relative bg-gray-900/50 rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 border border-gray-700">
                    <div className="aspect-video rounded-lg lg:rounded-xl overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/QR07EEGK7p0"
                        title="Como funciona 1minuto - Sistema de turnos por WhatsApp"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Content Column - Right side on desktop, bottom on mobile */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    <span className="text-white">Turnos online que</span>
                    <span className="block text-red-500">terminan en WhatsApp</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4 md:mb-6 px-2 lg:px-0">
                    Tus clientes reservan en segundos y el turno te llega listo por WhatsApp. Sin idas y vueltas.
                  </p>
                  
                  {/* Bullets */}
                  <ul className="text-left max-w-md mx-auto lg:mx-0 mb-6 space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Confirmacion automatica de turnos</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Menos mensajes manuales</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Todo organizado en tu WhatsApp</span>
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center px-4 lg:px-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-white to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
                      <a
                        href="https://turnopeluqueria-1minuto.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleDemoClick}
                        className="relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 flex items-center gap-2 w-full sm:w-auto justify-center border-2 border-white shadow-lg shadow-white/30"
                      >
                        <span className="font-black">Ver demo en 1 minuto</span>
                        <div className="absolute -top-1.5 -right-1.5 bg-white text-red-500 text-xs font-black px-1.5 py-0.5 rounded-full animate-pulse">
                          GRATIS
                        </div>
                      </a>
                    </div>

                    <button
                      onClick={() => handleWhatsAppClick("hero_trial")}
                      className="bg-white hover:bg-gray-100 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center border border-gray-300"
                    >
                      <MessageCircle size={16} />
                      <span>Empezar gratis</span>
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start text-gray-400 text-sm mt-4">
                    <span>Sin tarjeta de credito</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Configuracion en menos de 5 minutos</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="py-12 md:py-16">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 px-4">
                ¿Como <span className="text-red-500">funciona</span>?
              </h2>
              <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                Asi de simple es recibir turnos por WhatsApp
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">El cliente elige dia y horario</h3>
                  <p className="text-gray-400 text-sm">
                    Entra a tu link, ve tus servicios y horarios disponibles, y selecciona cuando quiere venir.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Completa sus datos en segundos</h3>
                  <p className="text-gray-400 text-sm">
                    Nombre y telefono. Nada mas. Sin registros complicados ni formularios largos.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Se abre WhatsApp con el turno listo</h3>
                  <p className="text-gray-400 text-sm">
                    Automaticamente se abre WhatsApp con todos los datos. Solo envia y listo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section - Pain Points */}
          <section className="py-8 md:py-12">
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 px-4">
                ¿Por que elegir <span className="text-red-500">1minuto</span>?
              </h2>
              <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto px-4">
                Resolvemos los problemas reales de agendar turnos
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Dejas de responder mensajes todo el dia</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    No mas "¿tenes lugar?", "¿a que hora?", "¿cuanto sale?". Tus clientes ven todo y reservan solos.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Evitas errores en turnos</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Nada de confusiones de horarios ni turnos superpuestos. El sistema maneja todo automatico.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Aumentas la cantidad de reservas</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Funciona 24/7. Mientras dormis, tus clientes siguen sacando turnos. Despertas con la agenda llena.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl p-4 md:p-6 border border-red-500/50 hover:border-red-500 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Mejor experiencia para tus clientes</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Reservan cuando quieren, sin esperar respuesta. Les encanta la comodidad y vuelven.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}

          {/* Use Cases Section */}
          <section className="py-8 md:py-12">
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 px-4">
                Ideal para <span className="text-red-500">tu negocio</span>
              </h2>
              <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto px-4">
                Si trabajas con turnos o reservas, 1minuto es para vos
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto px-4">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all text-center">
                  <Scissors className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Peluquerias</span>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all text-center">
                  <Scissors className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Barberias</span>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all text-center">
                  <Sparkles className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Esteticas</span>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all text-center">
                  <Stethoscope className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Consultorios</span>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all text-center col-span-2 sm:col-span-1">
                  <Briefcase className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Profesionales</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 md:py-16">
            <div
              className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 px-4">
                Un plan <span className="text-red-500">que funciona</span>
              </h2>
              <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto px-4 text-sm md:text-base">
                Todo lo que necesitás para automatizar tu agenda y recuperar tu tiempo
              </p>
              <div className="flex justify-center px-4">
                <div className="max-w-md w-full">
                  <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl p-6 md:p-8 border border-red-500/50 text-center">
                    <div className="text-center mb-4 md:mb-6">
                      <h3 className="font-bold text-white text-lg md:text-xl">Plan 1minuto</h3>
                      <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">$20.000 ARS</div>
                      <p className="text-gray-400">Por mes</p>
                    </div>
                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Tus clientes se autogestionan 24/7 (incluso mientras dormís)
                        </span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">Ahorra horas de mensajes y coordinaciones</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">Cancelación y reprogramación automática</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">Recordatorios automáticos por WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">Soporte humano real, sin bots</span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base">Estadísticas simples para entender tu negocio</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => handleWhatsAppClick("pricing")}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-1 sm:gap-2 md:gap-3"
                    >
                      <MessageCircle size={18} />
                      <span className="text-sm sm:text-base md:text-lg">15 días gratis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Referral Program */}
          <section className="py-12 md:py-16">
            <div
              className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/10 rounded-2xl p-6 md:p-8 border border-green-500/50 text-center">
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                    <span className="text-green-500">¡Ganá dinero</span> recomendando!
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
                    Por cada amigo que se suscriba con tu recomendación,{" "}
                    <span className="text-green-500 font-semibold">te abonamos $20.000 ARS</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="bg-black/20 rounded-xl p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-green-500 mb-2">1</div>
                      <p className="text-sm text-gray-300">Recomendás 1minuto a un amigo</p>
                    </div>
                    <div className="bg-black/20 rounded-xl p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-green-500 mb-2">2</div>
                      <p className="text-sm text-gray-300">Tu amigo se suscribe mencionándote</p>
                    </div>
                    <div className="bg-black/20 rounded-xl p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-green-500 mb-2">3</div>
                      <p className="text-sm text-gray-300">Te abonamos $9.000 a tu cuenta</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => handleWhatsAppClick("referral")}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 w-full sm:w-auto justify-center"
                    >
                      15 días gratis
                      <MessageCircle size={18} />
                    </button>
                    <p className="text-gray-400 text-sm">Sin límite de referidos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-16">
            <div
              className={`transition-all duration-1000 delay-850 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 px-4">
                Preguntas <span className="text-red-500">frecuentes</span>
              </h2>
              <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto px-4">
                Todo lo que necesitas saber sobre turnos por WhatsApp
              </p>
              <div className="max-w-3xl mx-auto px-4 space-y-3">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="font-medium text-white text-sm md:text-base pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}
                    >
                      <p className="px-4 md:px-6 pb-4 text-gray-400 text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-12 md:py-16 text-center">
            <div
              className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4">
                ¿Listo para recuperar <span className="text-red-500">tu tiempo</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Configurá tu agenda en 5 minutos y empezá a vivir sin estrés
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 px-4">
                <button
                  onClick={() => handleWhatsAppClick("final_cta")}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl min-w-[280px] sm:min-w-[320px]"
                >
                  <MessageCircle size={20} />
                  <span>15 días gratis</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center text-sm text-gray-400 mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Cancelás cuando quieras</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Configuración en 5 minutos</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">¿Tenés dudas? Te ayudamos</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("footer")}
              className="inline-flex items-center gap-2 md:gap-3 text-red-500 hover:text-red-400 font-semibold text-base md:text-lg transition-colors duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              Escribinos por WhatsApp
            </a>
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-xs md:text-sm px-4">
                © 2025 1minuto. Hecho con ❤️ para profesionales que valoran su tiempo.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Bienvenido nuevamente</h3>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal de login"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Ingresá con tus credenciales para acceder al panel de 1minuto.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="nombre@clinica.com"
                  className="w-full rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                />
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-red-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600">
              Ingresar
            </button>
            <p className="mt-4 text-center text-xs text-gray-500">
              *Este es un mockup estático para validar cambios de despliegue.
            </p>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40"></div>
    </div>
  )
}
