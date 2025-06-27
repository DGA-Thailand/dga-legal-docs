import { getContent } from "@/lib/content"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const terms = await getContent("terms")

    return NextResponse.json({
      success: true,
      data: terms,
      count: terms.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch terms and conditions",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
