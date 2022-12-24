import React from 'react'

interface ButtonProps {
  text: string
  customClass: string
}

const Button = ({ text, customClass }: ButtonProps) => {
  return (
    <>
      <button
        type='submit'
        className={`${customClass} py-3.5 duration-300 hover:scale-105 `}>
        {text}
      </button>
    </>
  )
}

export default Button
