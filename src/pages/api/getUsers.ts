import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'users.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const users = JSON.parse(fileData)
      res.status(200).json(users)
    } catch (error) {
      console.error('Erro ao ler o arquivo JSON:', error)
      res.status(500).json({ message: 'Erro ao obter dados dos usuários' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
