import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, phoneNumber, timestamp, source } = body

    const FORMSPREE_URL = "https://formspree.io/f/xdkdbwbo"

    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        businessName,
        phoneNumber,
        timestamp,
        source,
        status: "Pending Payment",
        _subject: `Nuevo lead de 1minuto: ${businessName}`,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to save to Formspree")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving lead:", error)
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
  }
}
