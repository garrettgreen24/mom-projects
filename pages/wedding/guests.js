// pages/wedding/guests.js
import React from 'react'

export const guestSheetId = '1TwSCelxQQS0xiJG8thNBbd5dkiyGkIZ0SZhzzuREVhk'  // ← replace this

export default function WeddingGuests() {
  return (
    <div style={styles.container}>
      <iframe
        src={`https://docs.google.com/spreadsheets/d/${guestSheetId}/edit?usp=sharing`}
        style={styles.iframe}
      />
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
}
