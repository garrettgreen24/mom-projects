// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beth’s Project Board</title>
        <meta
          name="description"
          content="Central hub for wedding planning, gardening journal, and crafts"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Beth’s Project Board</h1>

        <div style={styles.buttons}>
          <Link href="/wedding" style={styles.linkButton}>
            Wedding Plans
          </Link>
          <Link href="/garden" style={styles.linkButton}>
            Gardening Journal
          </Link>
          <Link href="/crafts" style={styles.linkButton}>
            Crafts & Gifts
          </Link>
        </div>
      </main>
    </>
  )
}

const PINK = '#ffe4e1'

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4rem 2rem 2rem',
    minHeight: '100vh',
    backgroundColor: PINK,
    backgroundImage: "url('/family.jpg')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    fontFamily: 'Playfair Display, serif',
  },
  title: {
    fontSize: '3.5rem',
    color: '#222',
    marginBottom: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
  buttons: {
    display: 'flex',
    gap: '2rem',
    marginTop: 'auto',
    marginBottom: '4rem',
  },
  linkButton: {
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: 'Playfair Display, serif',
  },
}
