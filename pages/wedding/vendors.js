// pages/wedding/vendors.js
import React from 'react'

export const vendorSheetId = '1RnyAFxuKmT1-7Uj7UDZJ9GZZ_k8dIC31qGav_kzENo8'  // replace with your real ID

export default function WeddingVendors() {
  return (
    <div style={{ height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src={`https://docs.google.com/spreadsheets/d/${vendorSheetId}/edit?usp=sharing`}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}
