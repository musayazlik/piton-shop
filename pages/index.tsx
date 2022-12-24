import Head from 'next/head'
import Image from 'next/image'
import Products from './products'

export default function Home() {
  return (
    <>
      <Head>
        <title>Piton Shop Project - Musa Yazlık</title>
        <meta name='description' content='Piton Shop Project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Products />
      </main>
    </>
  )
}
