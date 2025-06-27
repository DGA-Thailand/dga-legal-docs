import { getContentBySlug } from "@/lib/content"
import { NextResponse } from "next/server"

interface RouteParams {
  params: Promise<{ collection: string; slug: string }>
}

const ALLOWED_COLLECTIONS = ["privacy", "terms"]

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { collection, slug } = await params

    // Validate collection
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid collection. Allowed collections: " + ALLOWED_COLLECTIONS.join(", "),
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      )
    }

    const content = await getContentBySlug(collection, slug)

    if (!content) {
      return NextResponse.json(
        {
          success: false,
          error: `Content not found in ${collection} collection`,
          timestamp: new Date().toISOString(),
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: content,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch content",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
