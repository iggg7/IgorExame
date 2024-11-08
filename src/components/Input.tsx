import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id: string
}

export default function Input({ id, ...props }: InputProps) {
  return (
    <div>
      <input
        id={id}
        {...props}
        className="h-11 w-full rounded border bg-secondary-default px-6 text-sm text-white placeholder-secondary-100 focus:outline-none"
        style={{
          borderColor: '#555555',
        }}
      />
    </div>
  )
}
