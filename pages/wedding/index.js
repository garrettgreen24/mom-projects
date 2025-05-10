// pages/wedding/index.js
import React from 'react'
import { getAllEntries } from '../../lib/content'

export async function getStaticProps() {
  // Replace these with your actual Google Sheet IDs
  const budgetSheetId = '1yquyU9E7SFRW225g9T00WF8QLb9-6k9uGObsYJe-FQM'
  const vendorSheetId = '1RnyAFxuKmT1-7Uj7UDZJ9GZZ_k8dIC31qGav_kzENo8'
  
  // Load and sort timeline notes
  const timelineEntries = getAllEntries('wedding/timeline')
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  return {
    props: {
      budgetSheetId,
      vendorSheetId,
      timelineEntries,
    },
  }
}

export default function WeddingHome({
  budgetSheetId,
  vendorSheetId,
  timelineEntries = [],
}) {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Wedding Plans</h1>

      {/* Budget & Expenses */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Budget & Expenses</h2>
        <iframe
          src={`https://docs.google.com/spreadsheets/d/${budgetSheetId}/edit?usp=sharing&amp;rm=demo`}
          style={{ width: '100%', height: 400, border: '1px solid #ccc' }}
        ></iframe>
      </section>

      {/* Vendor Directory */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Vendor Directory</h2>
        <p>
          <a
            href={`https://docs.google.com/spreadsheets/d/${vendorSheetId}/edit?usp=sharing`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#fff',
              border: '1px solid #ccc',
              textDecoration: 'none',
            }}
          >
            Open Vendor Spreadsheet
          </a>
        </p>
      </section>

      {/* Task & Timeline Checklist */}
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

      {/* Inspiration Boards */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Inspiration & Mood Boards</h2>
        <p>Coming soon: image gallery or embedded mood boards!</p>
      </section>
    </main>
  )
}
