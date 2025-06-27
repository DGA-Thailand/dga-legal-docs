import Link from "next/link"
import { getContent } from "@/lib/content"

export default async function PrivacyPage() {
  const notices = await getContent("privacy")

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">ประกาศความเป็นส่วนตัว</h1>
        <div className="space-y-8">
          {notices.map((notice) => (
            <article key={notice.slug} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                <Link href={`/privacy/${notice.slug}`} className="hover:text-gray-600">
                  {notice.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{notice.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>เวอร์ชัน {notice.version}</span>
                  <time dateTime={notice.lastUpdated}>
                    อัปเดตล่าสุด: {new Date(notice.lastUpdated).toLocaleDateString("th-TH")}
                  </time>
                </div>
                <Link href={`/privacy/${notice.slug}`} className="text-gray-900 hover:text-gray-600 font-medium">
                  อ่านประกาศฉบับเต็ม →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
