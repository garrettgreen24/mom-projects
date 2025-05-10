import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beth’s Project Board</title>
        <meta name="description" content="Central hub for wedding planning, gardening journal, and crafts" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '2rem',
        paddingTop: '4rem',
        minHeight: '100vh',
        backgroundColor: '#ffe4e1',
        backgroundImage: "url('/family.jpg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          color: '#222',
          marginBottom: '2rem',
          fontFamily: 'Playfair Display, serif',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '0.5rem 1rem',
          borderRadius: '8px'
        }}>
          Beth’s Project Board
        </h1>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          marginTop: 'auto',
          marginBottom: '4rem'
        }}>
          <li>
            <Link href="/wedding">
              <a style={{
                padding: '1rem 2rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Wedding Plans
              </a>
            </Link>
          </li>
          <li>
            <Link href="/garden">
              <a style={{
                padding: '1rem 2rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Gardening Journal
              </a>
            </Link>
          </li>
          <li>
            <Link href="/crafts">
              <a style={{
                padding: '1rem 2rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: 'Playfair Display, serif'
              }}>
                Crafts & Gifts
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}
