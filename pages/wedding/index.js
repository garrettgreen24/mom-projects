// pages/wedding/index.js
import Link from 'next/link'
import { getAllEntries } from '../../lib/content'

export async function getStaticProps() {
  const entries = getAllEntries('wedding')
  return { props: { entries } }
}

export default function WeddingList({ entries }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Wedding Plans</h1>
      <ul>
        {entries.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/wedding/${slug}`}>
              {title} — <small>{new Date(date).toLocaleDateString()}</small>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
