import Button from '@components/button'
import Input from '@components/input'
import { Icon } from '@iconify/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

interface Props {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Register = ({ setLogin }: Props) => {
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data: any = new FormData(e.currentTarget)
    const dataObj = Object.fromEntries(data.entries())
    const validatePassword =
      dataObj.password.match(/[^a-z0-9]+/i) === null ? true : false

    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    if (
      dataObj.email === '' ||
      dataObj.password === '' ||
      dataObj.name === ''
    ) {
      Swal.fire({
        position: 'top-start',
        icon: 'error',
        html: '<b>Email</b>, <b>password</b> , and <b>username</b> cannot be empty ',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      if (dataObj.password.length < 6 || dataObj.password.length > 20) {
        Swal.fire({
          position: 'top-start',
          icon: 'error',
          html: '<b>Password</b> must be at least <b>6-20</b> characters ',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        if (validatePassword === false) {
          Swal.fire({
            position: 'top-start',
            icon: 'error',
            html: '<b>Password</b> must contain only <b>letters</b> and <b>numbers</b>.',
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          if (validateEmail(dataObj.email) === null) {
            Swal.fire({
              position: 'top-start',
              icon: 'error',
              html: '<b>Email</b> is not valid. Please enter a valid email...',
              showConfirmButton: false,
              timer: 1500,
            })
          } else {
            axios({
              method: 'POST',
              url: 'https://assignment-api.piton.com.tr/api/v1/user/register',
              data: dataObj,
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((res) => {
                if (res.status === 200) {
                  Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Success',
                    html: 'You have successfully registered. You were being redirected to the products page.',
                    showConfirmButton: false,
                    timer: 2000,
                  }).then(() => {
                    document.cookie = `token=${res.data.token}`
                    router.push('/products')
                  })
                }
              })
              .catch((err) => {
                console.log(err)
              })
          }
        }
      }
    }
  }

  return (
    <>
      <form
        action=''
        className='flex flex-col justify-start w-3/6 mx-auto'
        onSubmit={(e) => {
          handleSubmit(e)
        }}>
        <h2 className='font-black text-2xl ml-1 text-zinc-700'>Hello!</h2>
        <p className='font-normal text-md mb-4 ml-1'>Sign Up to Get Started</p>
        <Input type='text' name='name' customClass='' placeholder='Full Name'>
          <Icon
            icon='icon-park-twotone:user'
            fontSize={24}
            className='text-gray-500'
          />
        </Input>
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
          text='Register'
          customClass='bg-blue-700 rounded-full text-white hover:shadow-lg hover:shadow-blue-600/40  mb-5 '
        />
        <p className='text-sm text-gray-400 text-center w-full'>
          Forgot Password?
        </p>
        <p
          className='text-sm text-blue-500 text-center w-full mt-4 cursor-pointer'
          onClick={() => setLogin(true)}>
          Login
        </p>
      </form>
    </>
  )
}

export default Register
