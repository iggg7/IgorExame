import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  type = 'button',
  onClick,
  children,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`my-2 h-11 w-full rounded bg-blue-300 px-4 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-400 ${className}`}
    >
      {children}
    </button>
  )
}
