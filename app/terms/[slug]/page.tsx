import { getContent, getContentBySlug } from "@/lib/content"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"

interface TermsPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const terms = await getContent("terms")
  return terms.map((term) => ({
    slug: term.slug,
  }))
}

export default async function TermsDetailPage({ params }: TermsPageProps) {
  const { slug } = await params
  const term = await getContentBySlug("terms", slug)

  if (!term) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">{term.title}</h1>
        </header>
        <div className="prose prose-lg max-w-none [&_p]:mb-4">
          <Markdown rehypePlugins={[rehypeRaw]}>{term.body}</Markdown>
        </div>
        <div className="my-12">
          <hr className="border-t border-gray-300" />
        </div>
        <div className="flex items-center space-x-6 text-sm text-gray-600 border-b border-gray-200 pb-6 max-w-none mx-auto">
          <span>เวอร์ชัน {term.version}</span>
          <time dateTime={term.lastUpdated}>
            อัปเดตล่าสุด: {new Date(term.lastUpdated).toLocaleDateString("th-TH")}
          </time>
          <span>มีผลบังคับใช้: {new Date(term.effectiveDate).toLocaleDateString("th-TH")}</span>
        </div>
      </article>
    </div>
  )
}
