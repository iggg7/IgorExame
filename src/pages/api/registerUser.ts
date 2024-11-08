import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

interface User {
  ID: string
  Name: string
  RM: string
  CPF: string
  RG: string
  Profession: string
  Image: string | null
}

const filePath = path.join(process.cwd(), 'data', 'users.json')

// Garante que o diretório e o arquivo existam
const initializeDataFile = () => {
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]))
  }
}

const readData = (): User[] => {
  try {
    initializeDataFile()
    const fileData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileData) as User[]
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error)
    return []
  }
}

const writeData = (data: User[]) => {
  try {
    initializeDataFile()
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    console.log('Dados salvos com sucesso em users.json')
  } catch (error) {
    console.error('Erro ao escrever no arquivo JSON:', error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const newUser: User = req.body

      const users = readData()
      users.push(newUser)
      writeData(users)

      res.status(201).json({ message: 'User registered successfully!' })
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
