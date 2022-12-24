import React from 'react'

interface InputProps {
  type: string
  name: string
  placeholder: string
  customClass: string
  children?: React.ReactNode
}

const Input = ({
  type,
  name,
  placeholder,
  customClass,
  children,
}: InputProps) => {
  return (
    <>
      <div className='relative mb-5 '>
        <input
          type={type}
          name={name}
          className={`${customClass} rounded-full text-base py-3.5 pl-14 px-8 border-2 border-gray-300 focus:outline-none focus:border-blue-700 text-gray-500 w-full `}
          placeholder={placeholder}
        />
        <div className='absolute top-[50%] translate-y-[-50%] z-10 ml-6'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Input
