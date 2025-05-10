// pages/crafts/index.js
import Link from 'next/link'
import { getAllEntries } from '../../lib/content'

export async function getStaticProps() {
  const entries = getAllEntries('crafts')
  return { props: { entries } }
}

export default function CraftsList({ entries }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Crafts & Gifts</h1>
      <ul>
        {entries.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/crafts/${slug}`}>
              {title} — <small>{new Date(date).toLocaleDateString()}</small>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
