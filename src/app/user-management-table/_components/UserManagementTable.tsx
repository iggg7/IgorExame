'use client'

import { FilePenLine, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface User {
  ID: string
  Name: string
  RM: string
  CPF: string
  RG: string
  Profession: string
}

export default function UserTablePage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/getUsers')
        if (response.ok) {
          const data = await response.json()
          setUsers(data)
        } else {
          console.error('Erro ao buscar dados dos usuários')
        }
      } catch (error) {
        console.error('Erro na requisição:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (userId: string) => {
    try {
      const response = await fetch(`/api/deleteUser?id=${userId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setUsers(users.filter((user) => user.ID !== userId))
      } else {
        console.error('Erro ao excluir o usuário')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  const handleEditRedirect = (userId: string) => {
    router.push(`/user-management/${userId}`)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="w-full max-w-4xl bg-primary p-10 shadow-2xl">
          <h1 className="my-6 text-center text-3xl font-bold">
            User Management
          </h1>
          <table className="llapse min-w-full">
            <thead>
              <tr className="bg-secondary-default text-gray-200">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">RM</th>
                <th className="p-3">CPF</th>
                <th className="p-3">RG</th>
                <th className="p-3">Profession</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.ID}
                  className="bg-secondary-200 text-center hover:bg-secondary-100"
                >
                  <td className="p-3">{user.ID}</td>
                  <td className="p-3">{user.Name}</td>
                  <td className="p-3">{user.RM}</td>
                  <td className="p-3">{user.CPF}</td>
                  <td className="p-3">{user.RG}</td>
                  <td className="p-3">{user.Profession}</td>
                  <td className="space-x-2 p-3">
                    <button
                      onClick={() => handleEditRedirect(user.ID)}
                      className="rounded py-1 text-white"
                    >
                      <FilePenLine className="transition-colors duration-300 hover:text-primary" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.ID)}
                      className="rounded py-1 text-white"
                    >
                      <Trash className="transition-colors duration-300 hover:text-primary" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
