"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function MetaPixelTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq('track', 'PageView')
    }
  }, [pathname, searchParams])

  return null
}
