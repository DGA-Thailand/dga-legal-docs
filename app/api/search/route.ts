import { getContent } from "@/lib/content"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const collections = searchParams.get("collections")?.split(",") || ["privacy", "terms"]

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          error: "Search query is required",
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      )
    }

    const searchTerm = query.toLowerCase()
    const results = []

    // Search across specified collections
    for (const collection of collections) {
      if (!["privacy", "terms"].includes(collection)) continue

      const content = await getContent(collection)
      const matches = content
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.description?.toLowerCase().includes(searchTerm) ||
            item.body.toLowerCase().includes(searchTerm),
        )
        .map((item) => ({
          ...item,
          collection,
          relevance: calculateRelevance(item, searchTerm),
        }))

      results.push(...matches)
    }

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance)

    return NextResponse.json({
      success: true,
      data: results,
      query,
      count: results.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Search failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

function calculateRelevance(item: any, searchTerm: string): number {
  let score = 0
  const term = searchTerm.toLowerCase()

  // Title matches are most important
  if (item.title.toLowerCase().includes(term)) {
    score += 10
  }

  // Description matches
  if (item.description?.toLowerCase().includes(term)) {
    score += 5
  }

  // Body matches
  const bodyMatches = (item.body.toLowerCase().match(new RegExp(term, "g")) || []).length
  score += bodyMatches

  return score
}
