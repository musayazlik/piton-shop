import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Piton Shop Project - Musa Yazlık</title>
        <meta name='description' content='Piton Shop Project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

export const getServerSideProps = async (content: any) => {
  const token = content.req.cookies.token
  if (token) {
    return {
      redirect: {
        destination: '/products',
        permanent: false,
      },
    }
  } else {
    return {
      redirect: {
        destination: '/login-register',
        permanent: false,
      },
    }
  }
}
