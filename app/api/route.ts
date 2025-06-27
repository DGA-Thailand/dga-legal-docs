import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "Legal Documents API",
    description: "API สำหรับเข้าถึงเอกสารทางกฎหมาย",
    version: "1.0.0",
    endpoints: {
      docs: "/api/docs",
      privacy: "/api/privacy",
      terms: "/api/terms",
      content: "/api/content/{collection}",
      search: "/api/search",
      stats: "/api/stats",
    },
    timestamp: new Date().toISOString(),
  })
}
