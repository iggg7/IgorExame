// src/components/Label.tsx

import React from 'react'

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block font-medium text-white">
      {children}
    </label>
  )
}
