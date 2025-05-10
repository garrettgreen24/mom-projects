// pages/garden/index.js
import Link from 'next/link'
import { getAllEntries } from '../../lib/content'

export async function getStaticProps() {
  const entries = getAllEntries('garden')
  return { props: { entries } }
}

export default function GardenList({ entries }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Gardening Journal</h1>
      <ul>
        {entries.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/garden/${slug}`}>
              {title} — <small>{new Date(date).toLocaleDateString()}</small>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
