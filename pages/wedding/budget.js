// pages/wedding/budget.js
import React from 'react'

export const budgetSheetId = '1yquyU9E7SFRW225g9T00WF8QLb9-6k9uGObsYJe-FQM'  // replace with your real ID

export default function WeddingBudget() {
  return (
    <div style={{ height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src={`https://docs.google.com/spreadsheets/d/${budgetSheetId}/edit?usp=sharing`}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}
