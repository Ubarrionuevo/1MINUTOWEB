"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Clock, Smartphone, Moon, Settings, Users, Heart, CheckCircle } from "lucide-react"
import { trackWhatsAppClick, trackDemoClick, trackReferralClick, trackEvent } from "@/lib/analytics"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

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
    // Track page load
    trackEvent("page_load", {
      event_category: "engagement",
      event_label: "landing_page",
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Minuto%20%281%29-vgtWesMNDiu2R1ZAT4OmxitPpcSZJl.png"
              alt="1minuto logo"
              className="h-10 w-auto"
            />
          </div>
          <button
            onClick={() => handleWhatsAppClick("header")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">{"Empeza gratis"}</span>
            <span className="sm:hidden">Lo quiero</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <section className="text-center py-8 md:py-16">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-white">Dejá de vivir</span>
                <span className="block text-red-500">pegado al celular</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-2">
                Tus clientes toman turnos solos. Vos recuperás tu tiempo libre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <div className="relative group">
                  {/* Animated background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-white to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>

                  <a
                    href="https://turnopeluqueria-1minuto.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDemoClick}
                    className="relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 flex items-center gap-3 w-full sm:w-auto justify-center border-2 border-white shadow-lg shadow-white/30"
                  >
                    <span className="text-2xl animate-pulse">🔥</span>
                    <span className="font-black">PROBA LA DEMO    </span>
                    <span className="text-2xl animate-bounce">👆</span>
                    <div className="absolute -top-2 -right-2 bg-white text-red-500 text-xs font-black px-2 py-1 rounded-full animate-pulse">
                      GRATIS
                    </div>
                  </a>
                </div>
                <p className="text-gray-400 text-sm">Sin tarjeta de crédito</p>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-12 md:py-16">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                    Mirá cómo funciona <span className="text-red-500">1minuto</span>
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    En este video te mostramos paso a paso cómo funciona 1minuto del lado del cliente      
                  </p>
                </div>

                <div className="relative bg-gray-900/50 rounded-2xl p-4 md:p-6 border border-gray-700">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/QR07EEGK7p0"
                      title="Cómo funciona 1minuto"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mercado Pago Badge */}
          

          {/* Demo Image */}
          

          {/* Benefits Section */}
          <section className="py-8 md:py-12">
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 px-4">
                ¿Por qué elegir <span className="text-red-500">1minuto</span>?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Ahorrás tiempo real</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    No más mensajes de "¿tenés lugar el martes?". Tus clientes ven disponibilidad y eligen solos.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Funciona 24/7</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Incluso cuando dormís, tus clientes pueden sacar turnos. Despertás con la agenda llena.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Moon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Menos estrés</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Se acabó el caos de coordinar horarios. Todo organizado automáticamente.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Súper fácil de usar</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Lo configurás una vez y se maneja solo. No necesitás ser experto en tecnología.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Mejor experiencia</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Tus clientes aman la comodidad. Pueden elegir horario cuando quieren, sin esperar.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl p-4 md:p-6 border border-red-500/50 hover:border-red-500 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Tus clientes se autogestionan</h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    <strong className="text-red-400">Lo más importante:</strong> Pueden cancelar, reprogramar y
                    confirmar solos. Vos solo trabajás, no coordinás.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          

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
                      <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">$9.000 ARS</div>
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
                        <span className="flex items-center gap-2 text-sm md:text-base">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercadop%C3%A1go-B1pZpzWnTI9D5Mgxvkip4xQXtUF8v4.png"
                            alt="MP"
                            className="w-3 h-3 md:w-4 md:h-4"
                          />
                          Cobro de señas con Mercado Pago
                        </span>
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
                      <span className="text-sm sm:text-base md:text-lg">Empezar a ahorrar tiempo</span>
                      <div className="bg-white/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold">
                        GRATIS
                      </div>
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
                    <span className="text-green-500 font-semibold">te abonamos $9.000 ARS</span>
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
                      Quiero referir amigos
                      <MessageCircle size={18} />
                    </button>
                    <p className="text-gray-400 text-sm">Sin límite de referidos</p>
                  </div>
                </div>
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
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Empeza gratis 
                  <MessageCircle size={18} />
                </button>
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

      <div className="fixed bottom-6 right-6 z-40"></div>
    </div>
  )
}
