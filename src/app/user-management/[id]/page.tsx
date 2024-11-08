'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface User {
  ID: string
  Name: string
  RM: string
  CPF: string
  RG: string
  Profession: string
}

export default function EditUserPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const params = useParams() as Record<string, string | undefined>
  const id = params.id || ''
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/getUser?id=${id}`)
        if (response.ok) {
          const data = await response.json()
          setUser(data)
        } else {
          console.error('Erro ao buscar dados do usuário')
        }
      } catch (error) {
        console.error('Erro na requisição:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchUser()
    }
  }, [id])

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      if (response.ok) {
        router.push('/user-management-table')
      } else {
        console.error('Erro ao atualizar o usuário')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Carregando...</p>
      </div>
    )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-md rounded bg-primary p-4 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleUpdate()
          }}
        >
          <div className="mb-2">
            <Label htmlFor="ID">ID (Read-Only)</Label>
            <input
              id="ID"
              type="text"
              value={user?.ID || ''}
              readOnly
              className="h-11 w-full rounded bg-secondary-100 px-6 text-sm text-white placeholder-secondary-100"
            />
          </div>
          {['Name', 'RM', 'CPF', 'RG', 'Profession'].map((field) => (
            <div key={field} className="mb-2">
              <Label htmlFor={field}>{field}</Label>
              <Input
                id={field}
                type="text"
                value={user?.[field as keyof User] || ''}
                onChange={(e) =>
                  setUser({ ...user, [field]: e.target.value } as User)
                }
              />
            </div>
          ))}
          <button
            type="submit"
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => router.push('/user-management-table')}
            className="ml-2 rounded bg-gray-500 px-4 py-2 text-white"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}
