import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mom’s Project Hub</title>
        <meta name="description" content="Central hub for wedding planning, gardening journal, and crafts" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Mom’s Project Hub</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '0.5rem 0' }}>
            <Link href="/wedding">Wedding Plans</Link>
          </li>
          <li style={{ margin: '0.5rem 0' }}>
            <Link href="/garden">Gardening Journal</Link>
          </li>
          <li style={{ margin: '0.5rem 0' }}>
            <Link href="/crafts">Crafts & Gifts</Link>
          </li>
        </ul>
      </main>
    </>
  )
}
