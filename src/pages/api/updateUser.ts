// pages/api/updateUser.ts

import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'users.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const updatedUser = req.body

    try {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const users = JSON.parse(fileData)
      const updatedUsers = users.map((user: { ID: string }) =>
        user.ID === updatedUser.ID ? updatedUser : user,
      )

      fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2))
      res.status(200).json({ message: 'Usuário atualizado com sucesso!' })
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error)
      res.status(500).json({ message: 'Erro ao atualizar o usuário' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
