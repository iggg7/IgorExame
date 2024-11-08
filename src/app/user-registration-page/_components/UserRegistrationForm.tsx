'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface FormData {
  ID: string
  Name: string
  RM: string
  CPF: string
  RG: string
  Profession: string
  Image: File | null
}

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    ID: '',
    Name: '',
    RM: '',
    CPF: '',
    RG: '',
    Profession: '',
    Image: null,
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target

    if (type === 'file' && files) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }))
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
  }

  const handleRegister = async () => {
    const formDataToSend = {
      ...formData,
      Image: formData.Image ? formData.Image.name : null,
    }

    try {
      const response = await fetch('/api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      })

      if (response.ok) {
        console.log('Usuário registrado com sucesso!')
        router.push('/')
      } else {
        console.error('Falha ao registrar usuário')
      }
    } catch (error) {
      console.error('Erro:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleRegister()
        }}
        className="my-10 flex w-full max-w-md flex-col gap-2 rounded-md bg-primary p-8 py-10 shadow-2xl shadow-black"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          User Registration
        </h1>
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <Label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1) + ':'}
            </Label>
            {field === 'Image' ? (
              <input
                id={field}
                name={field}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full rounded border border-gray-600 bg-[#444444] text-sm text-white placeholder-white file:m-3 file:ml-5 file:mr-1 file:rounded file:border-0"
              />
            ) : (
              <Input
                id={field}
                name={field}
                type="text"
                placeholder={`Enter ${field}`}
                value={formData[field as keyof FormData] as string}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <Button type="submit" className="w-full">
          Register
        </Button>
        <Link href="/" className="text-center text-sm text-secondary-100">
          Already have an account? Log In
        </Link>
      </form>
    </div>
  )
}
