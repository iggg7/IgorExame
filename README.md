
# Exame Igor - Projeto de Desenvolvimento Web Responsivo

Este é o repositório do projeto desenvolvido para o exame de Desenvolvimento Web Responsivo. O objetivo principal deste projeto é a criação de uma aplicação de gerenciamento de usuários, utilizando Next.js 14.2.13 com TypeScript e Tailwind CSS.




## Estrutura

```
└── 📁igorexame
    └── 📁data
        └── users.json           # Arquivo de dados dos usuários
    └── 📁public
        └── favicon.ico          # Ícone da aplicação
    └── 📁src
        └── 📁app
            └── 📁(home)            
                └── 📁_components
                    └── UserLoginForm.tsx   # Formulário de login de usuário
                └── page.tsx                # Página inicial (Login)
            └── 📁user-management
                └── 📁[id]                 # Página para edição de um usuário específico
                └── page.tsx               # Página de gerenciamento de usuários
            └── 📁user-registration-page
                └── 📁_components
                    └── UserRegistrationForm.tsx   # Formulário de cadastro de usuário
                └── page.tsx                      # Página de cadastro de usuários
            └── globals.css                   # Estilos globais
            └── layout.tsx                    # Layout da aplicação
        └── 📁components
            └── Button.tsx                     # Componente de botão
            └── Input.tsx                      # Componente de input
            └── Label.tsx                      # Componente de label
        └── 📁pages
            └── 📁api
                └── deleteUser.ts              # API para deletar usuário
                └── getUser.ts                 # API para pegar um único usuário
                └── getUsers.ts                # API para pegar todos os usuários
                └── registerUser.ts           # API para registrar um novo usuário
                └── updateUser.ts             # API para atualizar usuário
    └── .eslintrc.json                        # Configurações do ESLint
    └── .gitignore                            # Ignora node_modules e arquivos desnecessários
    └── .prettierrc                           # Configurações do Prettier
    └── next-env.d.ts                         # Tipos do Next.js
    └── next.config.mjs                       # Configuração do Next.js
    └── package-lock.json                     # Lock de dependências
    └── package.json                          # Dependências e scripts
    └── postcss.config.mjs                    # Configuração do PostCSS
    └── README.md                             # Documentação do projeto
    └── tailwind.config.ts                    # Configuração do Tailwind CSS
    └── tsconfig.json                         # Configuração do TypeScript

```



## Configuração e Versão do Next.js

Este projeto utiliza Next.js versão 14.2.13, como especificado. A configuração inicial foi feita com o comando:

```bash
  npx create-next-app@14.2.13
```
    
## Instalação

Clone o repositório:

```
git clone https://github.com/iggg7/IgorExame.git
```

Instale as dependências:

```
npm install
# ou, caso use yarn:
yarn install

```

Rodar o projeto localmente:

```
npm run dev
# ou
yarn dev
```


## Rotas e Consumo de API
Rotas
O projeto implementa rotas estáticas e dinâmicas conforme a necessidade. A estrutura de rotas está organizada no diretório src/app, onde as páginas e componentes são definidos:

- Página Inicial (/): Formulário de Login de Usuário.
- Página de Cadastro (/user-registration-page): Formulário para registro de novos usuários.
- Página de Gerenciamento de Usuários (/user-management-table): Exibe todos os usuários com opções para editar e excluir.
- Página de Edição de Usuário (/user-management/[id]): Permite editar um usuário específico. (rota dinâmica)



## Consumo de API

O projeto consome uma API local baseada em um arquivo JSON chamado users.json, que armazena os dados dos usuários. Nessas rotas são utilizados os ROuter Handlers, As principais operações de API são:

- **GET /api/getUsers:** Obtém a lista de todos os usuários.
- **GET /api/getUser?id={id}:** Obtém os dados de um usuário específico.
- **POST /api/registerUser:** Registra um novo usuário.
- **PUT /api/updateUser:** Atualiza os dados de um usuário.
- **DELETE /api/deleteUser:** Deleta um usuário.

## Tecnologias utilizadas

- Next.js 14.2.13: Framework React para construção de aplicações fullstack.
- TypeScript: Superset do JavaScript que adiciona tipagem estática.
- Tailwind CSS: Framework CSS utilitário para estilização rápida e personalizada.
- Lucide Icons: Biblioteca de ícones utilizados no projeto.

## Componentes Reutilizáveis
Na pasta src/components/, possuí os componentes Button, Input, e Label, que podem ser reutilizados em toda a aplicação, deixando os códigos dos formulários mais limpos.

### DESENVOLVIDO POR:

Igor Ribeiro Bezerra - rm550989

