import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Only read .md files
export function getAllEntries(section) {
  const dir = path.join(process.cwd(), 'content', section)
  return fs
    .readdirSync(dir)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(dir, filename)
      const file = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(file)
      return {
        slug: filename.replace(/\.md$/, ''),
        ...data
      }
    })
}

// Load a single .md entry
export async function getEntry(section, slug) {
  const fullPath = path.join(
    process.cwd(),
    'content',
    section,
    `${slug}.md`
  )
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)
  const processed = await remark().use(html).process(content)
  return { data, contentHtml: processed.toString() }
}
