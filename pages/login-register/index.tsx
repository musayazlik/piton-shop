import Login from '@components/login'
import Register from '@components/register'
import LoginRegisterLayout from '@components/layouts/loginRegisterLayout'
import React from 'react'
import Head from 'next/head'

const LoginRegister = () => {
  const [login, setLogin] = React.useState(true)
  return (
    <>
      <Head>
        <title>PitonShop - Login Register</title>
        <meta name='description' content='PitonShop Login Register Page' />
        <meta name='author' content='Musa Yazlık' />
      </Head>
      <LoginRegisterLayout>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </LoginRegisterLayout>
    </>
  )
}

export default LoginRegister

export const getServerSideProps = async (content: any) => {
  const token = content.req.cookies.token
  if (token) {
    return {
      redirect: {
        destination: '/products',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
