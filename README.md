# FinControl

Sistema bancário desenvolvido em JavaScript para praticar lógica de programação, modularização, estrutura de dados e fundamentos de Engenharia de Software.

O projeto evolui de forma incremental por meio de Sprints, simulando o desenvolvimento gradual de um sistema bancário.

---

# 🇧🇷 Português

## 🚀 Funcionalidades atuais

### ✅ Sprint 1 — Sistema Bancário Básico

- Criação de contas
- Depósito
- Saque
- Transferência entre contas
- Histórico de transações
- Consulta das informações da conta

### ✅ Sprint 2 — Modularização e Interface de Terminal

- Separação do projeto em módulos
- Geração automática do número da conta
- Cadastro automático das contas
- Busca de contas pelo número
- Login utilizando o número da conta
- Menu principal interativo
- Menu da conta autenticada
- Depósito pelo menu
- Saque pelo menu
- Transferência pelo menu
- Consulta das informações da conta
- Consulta do histórico de transações
- Validação de conta inexistente
- Validação de saldo insuficiente
- Logout
- Encerramento do sistema
- Padronização do código em inglês

---

## ▶️ Como executar

### Pré-requisito

Tenha o [Node.js](https://nodejs.org/) instalado.

### Clone o repositório

```bash
git clone https://github.com/VanessaPortugal/FinControl.git
```

### Entre na pasta do projeto

```bash
cd FinControl
```

### Execute o sistema

```bash
node index.js
```

---

## 📂 Estrutura do projeto

```text
FinControl/
│
├── account.js
├── assets.js
├── data.js
├── index.js
├── interface.js
├── .gitignore
├── LICENSE
└── README.md
```

### Responsabilidade dos principais arquivos

- `index.js`: controla o fluxo do programa e os menus.
- `data.js`: armazena e localiza as contas.
- `account.js`: contém as operações bancárias.
- `interface.js`: exibe as informações e o histórico.
- `assets.js`: arquivo reservado para futuros recursos auxiliares do sistema.

---

## ⚠️ Limitação atual

As contas e transações são armazenadas apenas na memória durante a execução.

Ao encerrar o programa, os dados são apagados. A persistência em arquivo JSON será implementada em uma Sprint futura.

---

## 🗺️ Roadmap

### ✅ Sprint 1 — Sistema Bancário Básico

- Operações bancárias fundamentais
- Criação e consulta de contas
- Histórico de transações

### ✅ Sprint 2 — Modularização e Navegação

- Arquitetura modular
- Interface interativa no terminal
- Login por número da conta
- Integração das operações com o menu
- Logout e encerramento do sistema

### 🔮 Sprint 3 — Novas Operações Bancárias

- Pix
- Pagamento de contas
- Extrato bancário
- Estorno de transações
- Listagem de contas
- Novas validações de entrada

### 🔮 Sprint 4 — Persistência de Dados

- Salvamento das contas em JSON
- Carregamento automático dos dados
- Preservação das transações após o encerramento

### 🔮 Sprint 5 — Banco de Dados

- Integração com SQLite, MySQL ou PostgreSQL

### 🔮 Sprint 6 — Autenticação

- Senha de acesso
- Validação de CPF
- Bloqueio após tentativas incorretas
- Armazenamento seguro de senha

### 🔮 Sprint 7 — API REST

- API com Node.js
- Operações CRUD
- Autenticação da API

### 🔮 Sprint 8 — Interface Web

- Interface responsiva
- Integração com a API
- Painel da conta

---

## 🛠️ Tecnologias

- JavaScript
- ES Modules
- Node.js
- Git
- GitHub

---

## 🎯 Objetivo

Este projeto faz parte da minha jornada para me tornar Desenvolvedora Full Stack.

A proposta é evoluir o sistema Sprint após Sprint enquanto pratico lógica de programação, organização de código, arquitetura de software, testes e boas práticas de desenvolvimento.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

# 🇺🇸 English

## 🚀 Current Features

### ✅ Sprint 1 — Basic Banking System

- Account creation
- Deposit
- Withdrawal
- Money transfer
- Transaction history
- Account information lookup

### ✅ Sprint 2 — Modularization and Terminal Interface

- Project separation into modules
- Automatic account number generation
- Automatic account registration
- Account lookup by account number
- Login using the account number
- Interactive main menu
- Authenticated account menu
- Deposit through the menu
- Withdrawal through the menu
- Transfer through the menu
- Account information lookup
- Transaction history lookup
- Nonexistent account validation
- Insufficient balance validation
- Logout
- System shutdown
- Code standardized in English

---

## ▶️ How to Run

### Requirement

Make sure [Node.js](https://nodejs.org/) is installed.

### Clone the repository

```bash
git clone https://github.com/VanessaPortugal/FinControl.git
```

### Enter the project directory

```bash
cd FinControl
```

### Run the application

```bash
node index.js
```

---

## 📂 Project Structure

```text
FinControl/
│
├── account.js
├── assets.js
├── data.js
├── index.js
├── interface.js
├── .gitignore
├── LICENSE
└── README.md
```

### Main file responsibilities

- `index.js`: controls the application flow and menus.
- `data.js`: stores and searches for accounts.
- `account.js`: contains the banking operations.
- `interface.js`: displays account information and transaction history.
- `assets.js`: File reserved for future system auxiliary resources.

---

## ⚠️ Current Limitation

Accounts and transactions are currently stored only in memory while the application is running.

When the application is closed, all data is lost. JSON data persistence will be implemented in a future Sprint.

---

## 🗺️ Roadmap

### ✅ Sprint 1 — Basic Banking System

- Basic banking operations
- Account creation and lookup
- Transaction history

### ✅ Sprint 2 — Modularization and Navigation

- Modular architecture
- Interactive terminal interface
- Login using the account number
- Banking operations integrated with the menu
- Logout and system shutdown

### 🔮 Sprint 3 — New Banking Operations

- Pix
- Bill payment
- Bank statement
- Transaction reversal
- Account listing
- Additional input validations

### 🔮 Sprint 4 — Data Persistence

- Save accounts into JSON
- Automatically load saved data
- Preserve transactions after closing the application

### 🔮 Sprint 5 — Database

- SQLite, MySQL or PostgreSQL integration

### 🔮 Sprint 6 — Authentication

- Account password
- CPF validation
- Account locking after failed attempts
- Secure password storage

### 🔮 Sprint 7 — REST API

- Node.js REST API
- CRUD operations
- API authentication

### 🔮 Sprint 8 — Web Interface

- Responsive interface
- API integration
- Account dashboard

---

## 🛠️ Technologies

- JavaScript
- ES Modules
- Node.js
- Git
- GitHub

---

## 🎯 Goal

This project is part of my journey to become a Full Stack Developer.

The goal is to improve the system Sprint by Sprint while practicing programming logic, code organization, software architecture, testing and development best practices.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more information.