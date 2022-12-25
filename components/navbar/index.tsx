import Button from '@components/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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
            <div className='layout'>
              <Button
                text={'Layout'}
                customClass={
                  'bg-gray-400 px-8 rounded-full text-white shadow-lg shadow-gray-400/40 cursor-pointer'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
