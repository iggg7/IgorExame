'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import { FilePenLine, Trash } from 'lucide-react'
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
  const [editingUser, setEditingUser] = useState<User | null>(null)

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

  const handleEdit = (user: User) => {
    setEditingUser(user)
  }

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

  const handleUpdate = async (updatedUser: User) => {
    try {
      const response = await fetch('/api/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      })
      if (response.ok) {
        setUsers(
          users.map((user) =>
            user.ID === updatedUser.ID ? updatedUser : user,
          ),
        )
        setEditingUser(null)
      } else {
        console.error('Erro ao atualizar o usuário')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="w-full max-w-4xl overflow-x-auto rounded bg-primary p-10">
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
                      onClick={() => handleEdit(user)}
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
      {editingUser && (
        <div className="mt-4 w-full max-w-md rounded bg-primary p-4 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Edit User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleUpdate(editingUser)
            }}
          >
            <div className="mb-2">
              <Label htmlFor="ID">ID (Read-Only)</Label>
              <input
                id="ID"
                type="text"
                value={editingUser.ID}
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
                  value={editingUser[field as keyof User] || ''}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, [field]: e.target.value })
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
              onClick={() => setEditingUser(null)}
              className="ml-2 rounded bg-gray-500 px-4 py-2 text-white"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
