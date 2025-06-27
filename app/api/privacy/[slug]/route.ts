import { getContentBySlug } from "@/lib/content"
import { NextResponse } from "next/server"

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params
    const notice = await getContentBySlug("privacy", slug)

    if (!notice) {
      return NextResponse.json(
        {
          success: false,
          error: "Privacy notice not found",
          timestamp: new Date().toISOString(),
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: notice,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch privacy notice",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
