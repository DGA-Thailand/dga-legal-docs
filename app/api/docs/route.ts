import { NextResponse } from "next/server"

export async function GET() {
  const apiDocs = {
    title: "Legal Documents API",
    description: "API สำหรับเข้าถึงเอกสารทางกฎหมาย ประกาศความเป็นส่วนตัว และข้อกำหนดและเงื่อนไข",
    version: "1.0.0",
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    endpoints: {
      privacy: {
        "GET /api/privacy": {
          description: "ดึงประกาศความเป็นส่วนตัวทั้งหมด",
          response: "Array of privacy notices",
        },
        "GET /api/privacy/{slug}": {
          description: "ดึงประกาศความเป็นส่วนตัวตาม slug",
          parameters: {
            slug: "string - ตัวระบุเอกสาร",
          },
        },
      },
      terms: {
        "GET /api/terms": {
          description: "ดึงข้อกำหนดและเงื่อนไขทั้งหมด",
          response: "Array of terms and conditions",
        },
        "GET /api/terms/{slug}": {
          description: "ดึงข้อกำหนดและเงื่อนไขตาม slug",
          parameters: {
            slug: "string - ตัวระบุเอกสาร",
          },
        },
      },
      content: {
        "GET /api/content/{collection}": {
          description: "ดึงเนื้อหาจาก collection ที่ระบุ พร้อม pagination และ search",
          parameters: {
            collection: "string - privacy หรือ terms",
            page: "number - หน้าที่ต้องการ (default: 1)",
            limit: "number - จำนวนรายการต่อหน้า (default: 10)",
            search: "string - คำค้นหา",
          },
        },
        "GET /api/content/{collection}/{slug}": {
          description: "ดึงเนื้อหาเฉพาะจาก collection และ slug",
          parameters: {
            collection: "string - privacy หรือ terms",
            slug: "string - ตัวระบุเอกสาร",
          },
        },
      },
      search: {
        "GET /api/search": {
          description: "ค้นหาเนื้อหาทั่วทั้งเว็บไซต์",
          parameters: {
            q: "string - คำค้นหา (required)",
            collections: "string - collections ที่ต้องการค้นหา (comma-separated)",
          },
        },
      },
      stats: {
        "GET /api/stats": {
          description: "ดึงสstatisticsของเนื้อหาทั้งหมด",
          response: "Content statistics and counts",
        },
      },
    },
    responseFormat: {
      success: {
        success: true,
        data: "Content data",
        timestamp: "ISO timestamp",
      },
      error: {
        success: false,
        error: "Error message",
        timestamp: "ISO timestamp",
      },
    },
    examples: {
      "GET /api/privacy": {
        url: "/api/privacy",
        response: {
          success: true,
          data: [
            {
              slug: "general-privacy-policy",
              title: "นโยบายความเป็นส่วนตัวทั่วไป",
              description: "นโยบายความเป็นส่วนตัวที่ครอบคลุม...",
              version: "2.1",
              lastUpdated: "2024-01-15T00:00:00.000Z",
              effectiveDate: "2024-01-01T00:00:00.000Z",
              body: "# นโยบายความเป็นส่วนตัวทั่วไป...",
            },
          ],
          count: 1,
          timestamp: "2024-01-20T10:30:00.000Z",
        },
      },
    },
  }

  return NextResponse.json(apiDocs)
}
