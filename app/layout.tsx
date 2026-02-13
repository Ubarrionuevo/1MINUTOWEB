import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Script from 'next/script'
import MetaPixelTracker from "@/components/MetaPixelTracker"


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

<Script id="meta-pixel" strategy="afterInteractive">
{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1622275698960701');
fbq('track', 'PageView');
`}
</Script>
        
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
        <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=1622275698960701&ev=PageView&noscript=1"
    />
  </noscript>
        <MetaPixelTracker />
  {children}
      </body>
    </html>
  )
}
