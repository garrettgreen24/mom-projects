import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export function getAllEntries(section) {
  const dir = path.join(process.cwd(), 'content', section)
  return fs.readdirSync(dir).map(filename => {
    const filePath = path.join(dir, filename)
    const file = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(file)
    return { slug: filename.replace(/\.md$/, ''), ...data }
  })
}

export async function getEntry(section, slug) {
  const fullPath = path.join(process.cwd(), 'content', section, slug + '.md')
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)
  const processed = await remark().use(html).process(content)
  return { data, contentHtml: processed.toString() }
}
