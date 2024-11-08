'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useState } from 'react'

export default function UserLoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login realizado com:', { username, password })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}
        className="bg-primary flex w-full max-w-sm flex-col gap-1 rounded-md p-8 py-10 shadow-2xl shadow-black"
      >
        <h1 className="my-5 text-center text-3xl font-bold">User Login</h1>
        <div>
          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Login</Button>
        <Link
          href="/user-registration-form"
          className="text-secondary-100 text-center text-sm"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </form>
    </div>
  )
}