import Button from '@components/button'
import Input from '@components/input'
import { Icon } from '@iconify/react'

interface Props {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setLogin }: Props) => {
  return (
    <>
      <form action='' className='flex flex-col justify-start w-3/6 mx-auto'>
        <h2 className='font-black text-2xl ml-1 text-zinc-700'>Hello Again!</h2>
        <p className='font-normal text-md mb-4 ml-1'>Welcome Back</p>
        <Input
          type='mail'
          name='email'
          customClass=''
          placeholder='Email Address'>
          <Icon
            icon='ic:twotone-email'
            fontSize={24}
            className='text-gray-500'
          />
        </Input>
        <Input
          type='password'
          name='password'
          customClass=''
          placeholder='Password'>
          <Icon
            icon='ic:twotone-https'
            fontSize={24}
            className='text-gray-500'
          />
        </Input>
        <Button
          text='Login'
          customClass='bg-blue-700 rounded-full text-white hover:shadow-lg hover:shadow-blue-600/40  mb-5 '
        />
        <p className='text-sm text-gray-400 text-center w-full'>
          Forgot Password?
        </p>
        <p
          className='text-sm text-blue-500 text-center w-full mt-4 cursor-pointer'
          onClick={() => setLogin(false)}>
          Do not have an account yet?
        </p>
      </form>
    </>
  )
}

export default Login
