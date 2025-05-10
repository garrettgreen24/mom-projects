// pages/wedding/[slug].js
import { getAllEntries, getEntry } from '../../lib/content'
import Head from 'next/head'

export async function getStaticPaths() {
  const entries = getAllEntries('wedding')
  return {
    paths: entries.map(e => ({ params: { slug: e.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { data, contentHtml } = await getEntry('wedding', params.slug)
  return { props: { frontMatter: data, contentHtml } }
}

export default function WeddingEntry({ frontMatter, contentHtml }) {
  return (
    <article style={{ padding: '2rem' }}>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <h1>{frontMatter.title}</h1>
      <p><em>{new Date(frontMatter.date).toLocaleDateString()}</em></p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}
