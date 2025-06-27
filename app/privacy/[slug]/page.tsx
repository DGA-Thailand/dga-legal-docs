import { getContent, getContentBySlug } from "@/lib/content"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

interface PrivacyNoticePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const notices = await getContent("privacy")
  return notices.map((notice) => ({
    slug: notice.slug,
  }))
}

export default async function PrivacyNoticePage({ params }: PrivacyNoticePageProps) {
  const { slug } = await params
  const notice = await getContentBySlug("privacy", slug)

  if (!notice) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{notice.title}</h1>
          <div className="flex items-center space-x-6 text-sm text-gray-600 border-b border-gray-200 pb-6">
            <span>เวอร์ชัน {notice.version}</span>
            <time dateTime={notice.lastUpdated}>
              อัปเดตล่าสุด: {new Date(notice.lastUpdated).toLocaleDateString("th-TH")}
            </time>
            <span>มีผลบังคับใช้: {new Date(notice.effectiveDate).toLocaleDateString("th-TH")}</span>
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{notice.body}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
