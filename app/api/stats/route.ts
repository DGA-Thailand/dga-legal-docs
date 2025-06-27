import { getContent } from "@/lib/content"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const [privacyNotices, terms] = await Promise.all([getContent("privacy"), getContent("terms")])

    const stats = {
      collections: {
        privacy: {
          count: privacyNotices.length,
          lastUpdated:
            privacyNotices.length > 0
              ? privacyNotices.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())[0]
                  .lastUpdated
              : null,
        },
        terms: {
          count: terms.length,
          lastUpdated:
            terms.length > 0
              ? terms.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())[0]
                  .lastUpdated
              : null,
        },
      },
      total: privacyNotices.length + terms.length,
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: stats,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch statistics",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
