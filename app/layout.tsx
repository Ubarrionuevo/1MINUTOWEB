import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "1minuto",
  description:
    "Catálogo Digital con Mercado Pago y Turnero Online Inteligente. Soluciones simples para hacer crecer tu negocio en 1 minuto.",
  keywords: "catálogo digital, turnero online, mercado pago, whatsapp, productos digitales",
  authors: [{ name: "1minuto" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
