import Button from '@components/button'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const Navbar = () => {
  const router = useRouter()
  const logout = () => {
    Swal.fire({
      icon: 'success',
      title: 'Logged out',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      router.push('/login-register')
    })
  }
  return (
    <>
      <div className='bg-gray-200 shadow-md shadow-gray-400/30 py-5 z-30 relative mb-8 px-4'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='logo bg-blue-600 rounded-full'>
              <Link href='/'>
                <h1 className='text-white font-medium text-3xl px-5 py-1.5'>
                  <span className='text-white'>Piton</span>
                  <span className='text-white/50'>Shop</span>
                </h1>
              </Link>
            </div>
            <div className='logout'>
              <Button
                text={'logout'}
                customClass={
                  'bg-gray-400 px-8 rounded-full text-white shadow-lg shadow-gray-400/40 cursor-pointer'
                }
                onClick={() => logout()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
