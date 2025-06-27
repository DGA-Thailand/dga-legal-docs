import { getContent } from "@/lib/content"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const privacyNotices = await getContent("privacy")

    return NextResponse.json({
      success: true,
      data: privacyNotices,
      count: privacyNotices.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch privacy notices",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
