// pages/wedding/index.js
import Link from 'next/link'
import { getAllEntries } from '../../lib/content'

export async function getStaticProps() {
  const budgetSheetId = 'YOUR_SHEET_ID'
  const vendorSheetId = 'YOUR_VENDOR_SHEET_ID'
  const timelineEntries = getAllEntries('wedding/timeline')
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  return {
    props: {
      budgetSheetId,
      vendorSheetId,
      timelineEntries
    }
  }
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
