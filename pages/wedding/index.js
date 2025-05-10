// pages/wedding/index.js
import Link from 'next/link'
import React from 'react'

export default function WeddingHome() {
  return (
    <div style={styles.page}>
      {/* Header with title */}
      <header style={styles.header} />
      <div style={styles.titleBubble}>
        <h1 style={styles.title}>Wedding Plans</h1>
      </div>

      {/* Main layout */}
      <div style={styles.main}>
        {/* Left links */}
        <nav style={styles.sideNav}>
          <h2 style={styles.sectionHeading}>Sheets</h2>
          <Link href="/wedding/budget">
            <button style={styles.button}>Budget & Expenses</button>
          </Link>
          <Link href="/wedding/vendors">
            <button style={styles.button}>Vendor Directory</button>
          </Link>
        </nav>

        {/* Center photo, now in a shorter frame */}
        <div style={styles.photoContainer}>
          <img
            src="/gabmomphoto.jpg"
            alt="Wedding inspiration"
            style={styles.photo}
          />
        </div>

        {/* Right links */}
        <aside style={styles.sideNav}>
          <h2 style={styles.sectionHeading}>Timeline</h2>
          <Link href="/wedding/timeline">
            <button style={styles.button}>Open Timeline Notes</button>
          </Link>
          <h2 style={styles.sectionHeading}>Guest List</h2>
          <Link href="/wedding/guests">
            <button style={styles.button}>Open Guest List</button>
          </Link>
          <h2 style={styles.sectionHeading}>Inspiration</h2>
          <p style={styles.noteText}>Coming soon</p>
        </aside>
      </div>
    </div>
  )
}

const PINK = '#ffe4e1'

const styles = {
  page: {
    backgroundColor: PINK,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  header: {
    height: 50,
    backgroundColor: PINK,
  },
  titleBubble: {
    position: 'absolute',
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffb6c1',
    padding: '0.5rem 1rem',
    borderRadius: 6,
  },
  title: {
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    color: '#222',
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    padding: '2rem',
  },
  sideNav: {
    width: '20%',
    padding: '1rem',
  },
  sectionHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#222',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    background: '#fff',
    color: '#222',
    border: '1px solid #ccc',
    borderRadius: 4,
    fontFamily: "'Playfair Display', serif",
    cursor: 'pointer',
    textAlign: 'left',
  },
  photoContainer: {
    width: '60%',
    height: 800,             // fixed height to prevent scroll
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',      // crops to fill container
    borderRadius: 8,
  },
  noteText: {
    fontStyle: 'italic',
    color: '#666',
  },
}
