import { getContent } from "@/lib/content"
import { NextResponse } from "next/server"

interface RouteParams {
  params: Promise<{ collection: string }>
}

const ALLOWED_COLLECTIONS = ["privacy", "terms"]

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { collection } = await params
    const { searchParams } = new URL(request.url)

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

    const content = await getContent(collection)

    // Handle pagination
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    const paginatedContent = content.slice(offset, offset + limit)

    // Handle search
    const search = searchParams.get("search")
    let filteredContent = paginatedContent

    if (search) {
      const searchTerm = search.toLowerCase()
      filteredContent = paginatedContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm) ||
          item.description?.toLowerCase().includes(searchTerm) ||
          item.body.toLowerCase().includes(searchTerm),
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredContent,
      pagination: {
        page,
        limit,
        total: content.length,
        totalPages: Math.ceil(content.length / limit),
        hasNext: offset + limit < content.length,
        hasPrev: page > 1,
      },
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
