import Login from '@components/login'
import Register from '@components/register'
import LoginRegisterLayout from '@components/layouts/loginRegisterLayout'
import React from 'react'

const LoginRegister = () => {
  const [login, setLogin] = React.useState(true)
  return (
    <>
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
