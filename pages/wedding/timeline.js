// pages/wedding/timeline.js
import React from 'react'

export const timelineSheetId = '1ps28OCVPVchRGwoD5OO65q2LHM2hhM0ac-XuZznOYtc'  // replace with your real ID

export default function WeddingTimeline() {
  return (
    <div style={styles.container}>
      <iframe
        src={`https://docs.google.com/spreadsheets/d/${timelineSheetId}/edit?usp=sharing`}
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
