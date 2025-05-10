// pages/wedding/index.js
import Link from 'next/link'
import React from 'react'
import { getAllEntries } from '../../lib/content'

export async function getStaticProps() {
  const timelineEntries = getAllEntries('wedding/timeline')
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  return {
    props: {
      timelineEntries,
    },
  }
}

export default function WeddingHome({ timelineEntries = [] }) {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Wedding Plans</h1>

      {/* Budget & Expenses */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Budget & Expenses</h2>
        <Link href="/wedding/budget">
          <button style={buttonStyle}>Open Full Budget Sheet</button>
        </Link>
      </section>

      {/* Vendor Directory */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Vendor Directory</h2>
        <Link href="/wedding/vendors">
          <button style={buttonStyle}>Open Full Vendor Sheet</button>
        </Link>
      </section>

      {/* Notes & Timeline */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Notes & Timeline</h2>
        {timelineEntries.length === 0 ? (
          <p>No timeline notes yet. Add one via the CMS!</p>
        ) : (
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {timelineEntries.map(({ slug, title, date }) => (
              <li key={slug} style={{ marginBottom: '1rem' }}>
                <strong>{new Date(date).toLocaleDateString()}:</strong> {title}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Inspiration & Mood Boards */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Inspiration & Mood Boards</h2>
        <p>Coming soon: image gallery or embedded mood boards!</p>
      </section>
    </main>
  )
}

// simple, reusable button style
const buttonStyle = {
  padding: '0.5rem 1rem',
  background: '#fff',
  border: '1px solid #ccc',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: '1rem',
}
