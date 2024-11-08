import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'users.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query

    try {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const users = JSON.parse(fileData)
      const user = users.find((user: { ID: string }) => user.ID === id)

      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (error) {
      console.error('Erro ao buscar o usuário:', error)
      res.status(500).json({ message: 'Erro ao buscar o usuário' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
