import Link from "next/link"
import { getContent } from "@/lib/content"

export default async function HomePage() {
  const privacyNotices = await getContent("privacy")
  const termsConditions = await getContent("terms")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">เอกสารทางกฎหมาย</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            เข้าถึงประกาศความเป็นส่วนตัว และข้อกำหนดและเงื่อนไขของบริการต่าง ๆ ของสำนักงานพัฒนารัฐบาลดิจิทัล
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Privacy Notices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">ประกาศความเป็นส่วนตัว</h2>
              <div className="space-y-4">
                {privacyNotices.slice(0, 5).map((notice) => (
                  <div key={notice.slug} className="border-l-4 border-gray-200 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      <Link href={`/privacy/${notice.slug}`} className="hover:text-gray-600">
                        {notice.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{notice.description}</p>
                    <time className="text-xs text-gray-500">
                      อัปเดตล่าสุด: {new Date(notice.lastUpdated).toLocaleDateString("th-TH")}
                    </time>
                  </div>
                ))}
              </div>
              <Link href="/privacy" className="inline-block mt-6 text-gray-900 hover:text-gray-600 font-medium">
                ดูประกาศความเป็นส่วนตัวทั้งหมด →
              </Link>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">ข้อกำหนดและเงื่อนไข</h2>
              <div className="space-y-4">
                {termsConditions.slice(0, 5).map((term) => (
                  <div key={term.slug} className="border-l-4 border-gray-200 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      <Link href={`/terms/${term.slug}`} className="hover:text-gray-600">
                        {term.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{term.description}</p>
                    <time className="text-xs text-gray-500">
                      อัปเดตล่าสุด: {new Date(term.lastUpdated).toLocaleDateString("th-TH")}
                    </time>
                  </div>
                ))}
              </div>
              <Link href="/terms" className="inline-block mt-6 text-gray-900 hover:text-gray-600 font-medium">
                ดูข้อกำหนดและเงื่อนไขทั้งหมด →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
