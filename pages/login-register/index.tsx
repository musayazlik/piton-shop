import Login from '@components/login'
import Register from '@components/register'
import LoginRegisterLayout from 'layout/loginRegisterLayout'
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
