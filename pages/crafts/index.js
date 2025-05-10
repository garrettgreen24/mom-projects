// pages/crafts/index.js
import React from 'react'

export default function CraftsHome() {
  return (
    <div style={styles.page}>
      {/* Header and Title */}
      <header style={styles.header} />
      <div style={styles.titleBubble}>
        <h1 style={styles.title}>Crafts & Gifts</h1>
      </div>

      {/* Placeholder nav under title */}
      <div style={styles.placeholderNav}>
        {[
          "Inspiration",
          "Project List",
          "Supplies & Materials",
          "Gift Ideas",
        ].map(label => (
          <div key={label} style={styles.placeholderItem}>
            {label}
          </div>
        ))}
      </div>

      {/* Main content: photo lowered and larger */}
      <div style={styles.main}>
        {/* Left nav (future embeds) */}
        <nav style={styles.sideNav} />

        {/* Center photo */}
        <div style={styles.photoContainer}>
          <img
            src="/crafts-placeholder.jpg"   /* put your image at public/crafts-placeholder.jpg */
            alt="Craft projects"
            style={styles.photo}
          />
        </div>

        {/* Right nav (future embeds) */}
        <aside style={styles.sideNav} />
      </div>
    </div>
  )
}

const BLUE = '#e0f0ff'  // light sky-blue

const styles = {
  page: {
    backgroundColor: BLUE,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    fontFamily: "'Playfair Display', serif",
  },
  header: {
    height: 100,
    backgroundColor: BLUE,
  },
  titleBubble: {
    position: 'absolute',
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '0.5rem 1rem',
    borderRadius: 6,
    zIndex: 1,
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    color: '#1a3d6d',
  },
  placeholderNav: {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',
    marginTop: '3rem',
    marginBottom: '2rem',
    padding: '0 2rem',
  },
  placeholderItem: {
    flex: 1,
    textAlign: 'center',
    padding: '0.75rem',
    backgroundColor: '#fff',
    borderRadius: 6,
    border: '1px solid #ccc',
    color: '#1a3d6d',
    fontWeight: 'bold',
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
  photoContainer: {
    width: '80%',
    height: 600,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },
}

