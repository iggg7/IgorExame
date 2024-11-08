'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'

import React, { useState } from 'react'

interface FormData {
  ID: string
  Name: string
  RM: string
  CPF: string
  RG: string
  Profession: string
  Image: string
}

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    ID: '',
    Name: '',
    RM: '',
    CPF: '',
    RG: '',
    Profession: '',
    Image: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleRegister = () => {
    console.log('Usuário registrado:', formData)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleRegister()
        }}
        className="bg-primary flex w-full max-w-md flex-col gap-2 rounded-md p-8 py-10 shadow-2xl shadow-black"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          User Registration
        </h1>
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <Label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1) + ':'}
            </Label>
            <Input
              id={field}
              name={field}
              type="text"
              placeholder={`Enter ${field}`}
              value={formData[field as keyof FormData]}
              onChange={handleChange}
            />
          </div>
        ))}
        <Button type="submit" className="w-full">
          Register
        </Button>
        <Link
          href="/user-registration-form"
          className="text-secondary-100 text-center text-sm"
        >
          Already have an account? Log In
        </Link>
      </form>
    </div>
  )
}
