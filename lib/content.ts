import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content")

export interface ContentItem {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string
  [key: string]: any
}

export async function getContent(collection: string): Promise<ContentItem[]> {
  const collectionPath = path.join(contentDirectory, collection)

  if (!fs.existsSync(collectionPath)) {
    return []
  }

  const fileNames = fs.readdirSync(collectionPath)
  const allContent = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const slug = name.replace(/\.md$/, "")
      const fullPath = path.join(collectionPath, name)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        body: content,
        ...data,
      } as ContentItem
    })

  return allContent.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getContentBySlug(collection: string, slug: string): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(contentDirectory, collection, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      body: content,
      ...data,
    } as ContentItem
  } catch (error) {
    return null
  }
}
