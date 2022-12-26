import React, { Children } from 'react'

interface Props {
  children: React.ReactNode
}

const LoginRegisterLayout = ({ children }: Props) => {
  return (
    <>
      <div className='grid grid-cols-12 overflow-hidden h-screen'>
        <div className='relative bg-gradient-to-t to-blue-700 from-blue-900 md:h-screen col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-center items-center'>
          <div className='w-5/6 lg:w-3/6 text-center md:text-start'>
            <h1 className='text-white font-black text-4xl mb-2'>PitonShop</h1>
            <p className='text-white font-base text-lg'>
              The most popular book shop for IT
            </p>
          </div>
          <span className='absolute hidden lg:flex w-[500px] h-[500px] rounded-full bg-transparent border-2 border-blue-500/80 bottom-0 left-0 translate-y-[270px] -translate-x-[180px]'></span>
          <span className='absolute hidden lg:flex w-[500px] h-[500px] rounded-full bg-transparent border-2 border-blue-500/80 bottom-0 left-0 translate-y-[300px] -translate-x-[80px]'></span>
        </div>
        <div className='bg-zinc-50 h-[100%] md:h-screen col-span-12 md:col-span-6  lg:col-span-5 flex flex-col justify-center  '>
          {children}
        </div>
      </div>
    </>
  )
}

export default LoginRegisterLayout
