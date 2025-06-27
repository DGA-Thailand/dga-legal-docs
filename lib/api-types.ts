export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
}

export interface PaginatedApiResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface SearchResult extends ContentItem {
  collection: string
  relevance: number
}

export interface ContentStats {
  collections: {
    privacy: {
      count: number
      lastUpdated: string | null
    }
    terms: {
      count: number
      lastUpdated: string | null
    }
  }
  total: number
  timestamp: string
}

export interface ContentItem {
  slug: string
  title: string
  description?: string
  version: string
  lastUpdated: string
  effectiveDate: string
  body: string
  [key: string]: any
}
