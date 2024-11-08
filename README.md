# Exame Responsive Web Development

Este projeto é uma aplicação de gerenciamento de usuários construída com Next.js e TypeScript. O objetivo é permitir o registro, edição e visualização de usuários, com funcionalidades para manipulação de dados e uma interface de usuário utilizando Tailwind CSS.

## Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```bash
📁igorexame
├── 📁public
│   └── favicon.ico                 # Ícone do site
├── 📁src
│   ├── 📁app                       # Páginas da aplicação 
│   ├── 📁components                
│   ├── 📁data                      
│   │   └── users.json              
│   └── 📁pages/api                 # Endpoints da API para manipulação de usuários
├── .eslintrc.json                  # Configurações do ESLint
├── .gitignore                      # Arquivo para ignorar arquivos no Git
├── .prettierrc                     # Configurações do Prettier para formatação de código
├── next-env.d.ts                   # Definições de tipos para o Next.js
├── next.config.mjs                 # Configurações específicas do Next.js
├── package.json                    # Dependências e scripts do projeto
├── postcss.config.mjs              # Configurações do PostCSS
├── tailwind.config.ts              # Configurações do Tailwind CSS
└── tsconfig.json                   # Configurações do TypeScript
```

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 14 ou superior)
- npm (ou yarn, conforme preferir)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/iggg7/IgorExame.git
cd igorexame
```
   
2. Instale as dependências:

```bash
npm install
```

ou, se estiver usando yarn:
```bash
yarn install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

ou

```bash
yarn dev
```

#### Acesse a aplicação em http://localhost:3000.

## Funcionalidades

1. Login de Usuário
A página de login está localizada em src/app/(home)/page.tsx. O formulário permite que os usuários façam login com um nome de usuário e senha para acessar a tabela de usuários (não possuí validador apenas retorna no console quem fez o login). *(na url: "http://localhost:3000/")*

2. Registro de Usuário
A página de registro está localizada em src/app/user-registration-page/page.tsx. Nessa página, você pode preencher os detalhes do usuário e enviá-los para o armazenamento no arquivo users.json.*(na url: "(http://localhost:3000/user-registration-page)")*

3. Tabela de Gerenciamento de Usuários
A página de gerenciamento de usuários está localizada em src/app/user-management-table/page.tsx. Ela exibe uma tabela com os dados dos usuários registrados e oferece ações de edição e exclusão. *(na url: "http://localhost:3000/user-management-table")*

4. Edição de Usuário
A página de edição de usuários é uma rota dinâmica localizada em src/app/user-management/[id]/page.tsx. Acessível a partir da tabela de usuários, permite editar as informações do usuário selecionado. *(na url: "http://localhost:3000/user-management/[id]")*

## API Endpoints
Os endpoints da API estão na pasta src/pages/api/ nesses end-poits foi aplicado o RouterHandler. Eles incluem:

**GET /api/getUsers: Retorna a lista completa de usuários.**

**GET /api/getUser: Retorna os dados de um usuário específico com base no ID.**

**POST /api/registerUser: Adiciona um novo usuário ao users.json.**

**PUT /api/updateUser: Atualiza os dados de um usuário específico.**

**DELETE /api/deleteUser: Remove um usuário específico.**

## Componentes Reutilizáveis
Na pasta src/components/, possuí os componentes Button, Input, e Label, que podem ser reutilizados em toda a aplicação.

## Estilo
O projeto utiliza Tailwind CSS para estilização. As configurações estão no arquivo tailwind.config.ts.



