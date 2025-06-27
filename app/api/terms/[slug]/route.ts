import { getContentBySlug } from "@/lib/content"
import { NextResponse } from "next/server"

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params
    const term = await getContentBySlug("terms", slug)

    if (!term) {
      return NextResponse.json(
        {
          success: false,
          error: "Terms and conditions not found",
          timestamp: new Date().toISOString(),
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: term,
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
