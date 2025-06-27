"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface ApiDocs {
  title: string
  description: string
  version: string
  baseUrl: string
  endpoints: any
  responseFormat: any
  examples: any
}

export default function ApiDocsPage() {
  const [docs, setDocs] = useState<ApiDocs | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/docs")
      .then((res) => res.json())
      .then((data) => {
        setDocs(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load API docs:", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดเอกสาร API...</p>
        </div>
      </div>
    )
  }

  if (!docs) {
    return (
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600">ไม่สามารถโหลดเอกสาร API ได้</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← กลับหน้าแรก
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{docs.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{docs.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>เวอร์ชัน {docs.version}</span>
            <span>
              Base URL: <code className="bg-gray-100 px-2 py-1 rounded">{docs.baseUrl}</code>
            </span>
          </div>
        </header>

        <div className="space-y-12">
          {/* Endpoints */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Endpoints</h2>

            {Object.entries(docs.endpoints).map(([category, endpoints]: [string, any]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{category}</h3>
                <div className="space-y-4">
                  {Object.entries(endpoints).map(([endpoint, details]: [string, any]) => (
                    <div key={endpoint} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                          {endpoint.split(" ")[0]}
                        </span>
                        <code className="text-gray-700">{endpoint.split(" ")[1]}</code>
                      </div>
                      <p className="text-gray-600 mb-2">{details.description}</p>
                      {details.parameters && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Parameters:</h4>
                          <ul className="space-y-1">
                            {Object.entries(details.parameters).map(([param, desc]: [string, any]) => (
                              <li key={param} className="text-sm">
                                <code className="bg-gray-100 px-1 rounded">{param}</code>: {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Response Format */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">รูปแบบการตอบกลับ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">Success Response</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{JSON.stringify(docs.responseFormat.success, null, 2)}</code>
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">Error Response</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{JSON.stringify(docs.responseFormat.error, null, 2)}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ตัวอย่าง</h2>
            {Object.entries(docs.examples).map(([title, example]: [string, any]) => (
              <div key={title} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Request:</p>
                  <code className="block bg-white p-2 rounded border text-sm mb-4">GET {example.url}</code>
                  <p className="text-sm text-gray-600 mb-2">Response:</p>
                  <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                    <code>{JSON.stringify(example.response, null, 2)}</code>
                  </pre>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
