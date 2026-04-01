import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

// Next.js 14+ requires viewport to be exported separately
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Turnos por WhatsApp | Automatiza tu agenda facil - 1minuto",
  description:
    "Automatiza tus turnos y recibilos directo en WhatsApp. Ahorra tiempo y organiza tu agenda sin esfuerzo. Sistema de turnos online simple para negocios.",
  keywords: "turnos por whatsapp, reservas por whatsapp, sistema de turnos online, agenda automatica, turnero simple, turnos online, reservas online",
  authors: [{ name: "1minuto" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Turnos por WhatsApp | Automatiza tu agenda facil - 1minuto",
    description: "Automatiza tus turnos y recibilos directo en WhatsApp. Ahorra tiempo y organiza tu agenda sin esfuerzo.",
    type: "website",
    locale: "es_AR",
    siteName: "1minuto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnos por WhatsApp | 1minuto",
    description: "Automatiza tus turnos y recibilos directo en WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>


        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E71CRFH501"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E71CRFH501', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}
   
       

      </body>
    </html>
  )
}
