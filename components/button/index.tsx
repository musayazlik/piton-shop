import React from 'react'

interface ButtonProps {
  text: string
  customClass: string
  onClick?: () => void
}

const Button = ({ text, customClass, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type='submit'
        className={`${customClass} py-3.5 duration-300 hover:scale-105 `}>
        {text}
      </button>
    </>
  )
}

export default Button
