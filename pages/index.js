import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beth’s Project Board</title>
        <meta name="description" content="Central hub for wedding planning, gardening journal, and crafts" />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7',
        backgroundImage: "url('/family.jpg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '2rem'
        }}>
          Beth’s Project Board
        </h1>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          margin: 0
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
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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

