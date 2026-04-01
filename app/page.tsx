"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Clock, Users, Heart, CheckCircle, X, ChevronDown, Scissors, Sparkles, Stethoscope, Briefcase, Calendar } from "lucide-react"
import { trackWhatsAppClick, trackDemoClick, trackReferralClick, trackEvent } from "@/lib/analytics"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
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
    <div className="min-h-screen bg-black text-white antialiased">
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

      {/* Fixed Header - Optimized for mobile touch targets */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Minuto%20%281%29-vgtWesMNDiu2R1ZAT4OmxitPpcSZJl.png"
              alt="1minuto - Sistema de turnos por WhatsApp"
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          {/* CTA visible y tactil - min 44px para touch */}
          <button
            onClick={() => handleWhatsAppClick("header")}
            className="bg-red-500 active:bg-red-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-2 min-h-[44px] touch-manipulation"
          >
            <MessageCircle size={18} />
            <span>Empezar</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Mobile First */}
      <main className="pt-14 sm:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4">
          <section className="py-6 sm:py-8 md:py-16">
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Mobile: Content first, then video */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                
                {/* Content Column - Always first on mobile for immediate CTA visibility */}
                <div className="order-1 text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
                    <span className="text-white">Turnos online que</span>
                    <span className="block text-red-500">llegan a tu WhatsApp</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    Tus clientes reservan en segundos. El turno te llega listo. Sin idas y vueltas.
                  </p>
                  
                  {/* Bullets - Compact for mobile */}
                  <ul className="text-left max-w-sm sm:max-w-md mx-auto lg:mx-0 mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span>Confirmacion automatica</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span>Menos mensajes manuales</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span>Todo en tu WhatsApp</span>
                    </li>
                  </ul>

                  {/* CTAs - Stack on mobile, side by side on larger screens */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 justify-center lg:justify-start items-stretch sm:items-center">
                    {/* Primary CTA - WhatsApp (direct conversion) */}
                    <button
                      onClick={() => handleWhatsAppClick("hero_primary")}
                      className="bg-red-500 active:bg-red-600 text-white px-6 py-4 sm:py-3.5 rounded-full text-base sm:text-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2 min-h-[52px] sm:min-h-[48px] touch-manipulation shadow-lg shadow-red-500/20"
                    >
                      <MessageCircle size={20} />
                      <span>Empezar gratis ahora</span>
                    </button>

                    {/* Secondary CTA - Demo */}
                    <a
                      href="https://turnopeluqueria-1minuto.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDemoClick}
                      className="bg-transparent border-2 border-white/30 active:bg-white/10 text-white px-6 py-3.5 sm:py-3 rounded-full text-base font-semibold transition-colors duration-200 flex items-center justify-center gap-2 min-h-[52px] sm:min-h-[48px] touch-manipulation"
                    >
                      <span>Ver demo</span>
                    </a>
                  </div>
                  
                  {/* Trust signals - Simplified for mobile */}
                  <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center lg:text-left">
                    Sin tarjeta • Configuras en 5 min
                  </p>
                </div>

                {/* Video Column - Below content on mobile */}
                <div className="order-2 w-full">
                  <div className="relative bg-gray-900/30 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-800/50">
                    <div className="aspect-video rounded-lg overflow-hidden">
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
              </div>
            </div>
          </section>

          {/* How it Works Section - Compact mobile steps */}
          <section className="py-8 sm:py-12 md:py-16">
            <div
              className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
                ¿Como <span className="text-red-500">funciona</span>?
              </h2>
              <p className="text-center text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 max-w-xl mx-auto">
                3 pasos simples para recibir turnos
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 bg-gray-900/30 sm:bg-transparent rounded-xl p-4 sm:p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center sm:mx-auto sm:mb-3 md:mb-4 text-xl sm:text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base md:text-lg">Elige dia y hora</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Tu cliente ve horarios y selecciona
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 bg-gray-900/30 sm:bg-transparent rounded-xl p-4 sm:p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center sm:mx-auto sm:mb-3 md:mb-4 text-xl sm:text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base md:text-lg">Completa datos</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Solo nombre y telefono
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 bg-gray-900/30 sm:bg-transparent rounded-xl p-4 sm:p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center sm:mx-auto sm:mb-3 md:mb-4 text-xl sm:text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base md:text-lg">Te llega por WhatsApp</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Recibis el turno al instante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section - Compact cards for mobile */}
          <section className="py-6 sm:py-8 md:py-12">
            <div
              className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
                ¿Por que <span className="text-red-500">1minuto</span>?
              </h2>
              <p className="text-center text-gray-400 text-sm sm:text-base mb-5 sm:mb-8 max-w-xl mx-auto">
                Soluciones reales para tu dia a dia
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
                <div className="bg-gray-900/40 rounded-xl p-4 sm:p-5 border border-gray-800/50 active:border-red-500/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Menos mensajes</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        Tus clientes ven todo y reservan solos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/40 rounded-xl p-4 sm:p-5 border border-gray-800/50 active:border-red-500/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Sin errores</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        Nada de turnos superpuestos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/40 rounded-xl p-4 sm:p-5 border border-gray-800/50 active:border-red-500/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Funciona 24/7</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        Reservas mientras dormis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-xl p-4 sm:p-5 border border-red-500/30 active:border-red-500 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Clientes felices</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        Reservan rapido y vuelven
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}

          {/* Use Cases Section - Horizontal scroll on mobile */}
          <section className="py-6 sm:py-8 md:py-12">
            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
                Ideal para <span className="text-red-500">tu negocio</span>
              </h2>
              <p className="text-center text-gray-400 text-sm sm:text-base mb-5 sm:mb-8 max-w-xl mx-auto">
                Si trabajas con turnos, es para vos
              </p>
              {/* Horizontal scroll on mobile */}
              <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 max-w-3xl mx-auto -mx-4 px-4 sm:mx-auto sm:px-0 scrollbar-hide">
                <div className="bg-gray-900/40 rounded-xl p-3 sm:p-4 border border-gray-800/50 text-center flex-shrink-0 w-[100px] sm:w-auto">
                  <Scissors className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-1.5 sm:mb-2" />
                  <span className="text-xs sm:text-sm text-gray-300">Peluquerias</span>
                </div>
                <div className="bg-gray-900/40 rounded-xl p-3 sm:p-4 border border-gray-800/50 text-center flex-shrink-0 w-[100px] sm:w-auto">
                  <Scissors className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-1.5 sm:mb-2" />
                  <span className="text-xs sm:text-sm text-gray-300">Barberias</span>
                </div>
                <div className="bg-gray-900/40 rounded-xl p-3 sm:p-4 border border-gray-800/50 text-center flex-shrink-0 w-[100px] sm:w-auto">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-1.5 sm:mb-2" />
                  <span className="text-xs sm:text-sm text-gray-300">Esteticas</span>
                </div>
                <div className="bg-gray-900/40 rounded-xl p-3 sm:p-4 border border-gray-800/50 text-center flex-shrink-0 w-[100px] sm:w-auto">
                  <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-1.5 sm:mb-2" />
                  <span className="text-xs sm:text-sm text-gray-300">Consultorios</span>
                </div>
                <div className="bg-gray-900/40 rounded-xl p-3 sm:p-4 border border-gray-800/50 text-center flex-shrink-0 w-[100px] sm:w-auto sm:col-span-3 lg:col-span-1">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-1.5 sm:mb-2" />
                  <span className="text-xs sm:text-sm text-gray-300">Profesionales</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing - Simplified for mobile */}
          <section className="py-8 sm:py-12 md:py-16">
            <div
              className={`transition-all duration-700 delay-250 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
                Un plan <span className="text-red-500">simple</span>
              </h2>
              <p className="text-center text-gray-400 text-sm sm:text-base mb-5 sm:mb-8 md:mb-12 max-w-xl mx-auto">
                Todo incluido para automatizar tu agenda
              </p>
              <div className="flex justify-center">
                <div className="max-w-sm sm:max-w-md w-full">
                  <div className="bg-gradient-to-br from-red-500/15 to-red-600/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-red-500/40">
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="font-bold text-white text-base sm:text-lg md:text-xl">Plan 1minuto</h3>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1 sm:mb-2">$20.000 ARS</div>
                      <p className="text-gray-400 text-sm">Por mes</p>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 md:mb-8 text-left">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Tus clientes reservan 24/7
                        </span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Cancelacion automatica</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Recordatorios por WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Soporte humano real</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => handleWhatsAppClick("pricing")}
                      className="w-full bg-red-500 active:bg-red-600 text-white py-4 sm:py-3.5 md:py-4 rounded-xl font-bold text-base sm:text-lg transition-colors duration-200 flex items-center justify-center gap-2 min-h-[52px] touch-manipulation"
                    >
                      <MessageCircle size={20} />
                      <span>Empezar 15 dias gratis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Referral Program - Compact mobile */}
          <section className="py-8 sm:py-12 md:py-16">
            <div
              className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-green-500/15 to-emerald-600/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-green-500/40 text-center">
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                    <span className="text-green-500">Gana dinero</span> recomendando
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-lg mx-auto">
                    Por cada amigo que se suscriba: <span className="text-green-500 font-semibold">$20.000 ARS para vos</span>
                  </p>
                  <button
                    onClick={() => handleWhatsAppClick("referral")}
                    className="bg-green-500 active:bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-3.5 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto mx-auto min-h-[52px] touch-manipulation"
                  >
                    <span>Quiero ganar dinero</span>
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section - Tap friendly */}
          <section className="py-8 sm:py-12 md:py-16">
            <div
              className={`transition-all duration-700 delay-350 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
                Preguntas <span className="text-red-500">frecuentes</span>
              </h2>
              <p className="text-center text-gray-400 text-sm sm:text-base mb-5 sm:mb-8 max-w-xl mx-auto">
                Resolvemos tus dudas
              </p>
              <div className="max-w-2xl mx-auto space-y-2 sm:space-y-3">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900/40 rounded-xl border border-gray-800/50 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 sm:px-5 py-4 sm:py-4 flex items-center justify-between text-left active:bg-gray-800/50 transition-colors min-h-[56px] touch-manipulation"
                    >
                      <span className="font-medium text-white text-sm sm:text-base pr-3">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-200 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}
                    >
                      <p className="px-4 sm:px-5 pb-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final - Single focused action */}
          <section className="py-8 sm:py-12 md:py-16 text-center">
            <div
              className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
                ¿Listo para <span className="text-red-500">empezar</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 sm:mb-6 md:mb-8 max-w-lg mx-auto">
                Configura en 5 minutos y olvida el estres
              </p>
              
              {/* Main CTA - Large tap target */}
              <button
                onClick={() => handleWhatsAppClick("final_cta")}
                className="bg-red-500 active:bg-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-colors duration-200 flex items-center justify-center gap-3 mx-auto min-h-[56px] min-w-[260px] sm:min-w-[300px] touch-manipulation shadow-lg shadow-red-500/20"
              >
                <MessageCircle size={22} />
                <span>Empezar gratis ahora</span>
              </button>

              {/* Trust signals - Compact */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center items-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-500" />
                  Sin tarjeta
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-500" />
                  Cancelas cuando quieras
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Minimal */}
      <footer className="border-t border-gray-800/50 py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-700 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">¿Dudas?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("footer")}
              className="inline-flex items-center gap-2 text-red-500 active:text-red-400 font-semibold text-sm sm:text-base transition-colors duration-200 min-h-[44px] touch-manipulation"
            >
              <MessageCircle size={18} />
              Escribinos por WhatsApp
            </a>
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-800/50">
              <p className="text-gray-600 text-xs">
                © 2025 1minuto
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
