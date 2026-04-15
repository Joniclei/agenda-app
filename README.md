# Agenda de Contatos

Sistema de agenda com CRUD completo de contatos, desenvolvido como teste técnico fullstack.

## Stack

- **Backend:** C# .NET 7 (API REST)
- **Frontend:** Next.js 14
- **Banco de dados:** PostgreSQL 15
- **Infra:** Docker Compose

---

## Como rodar via Docker (recomendado)

Pré-requisitos: [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando.

```bash
git clone git@github.com:Joniclei/agenda-app.git
cd agenda-app
docker-compose up --build
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Como rodar localmente

### Pré-requisitos

- [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- [Node.js 20+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para o banco)

### 1. Subir o banco de dados

```bash
docker run --name agenda-postgres \
  -e POSTGRES_USER=agenda \
  -e POSTGRES_PASSWORD=agenda123 \
  -e POSTGRES_DB=agendadb \
  -p 5432:5432 -d postgres:15
```

### 2. Rodar o backend

> O `appsettings.json` já está no repositório com as credenciais de desenvolvimento — não é necessário criar nenhum arquivo de configuração.

```bash
cd backend/Agenda.API
dotnet restore
dotnet ef database update
dotnet run
```

API disponível em: `http://localhost:5257`

### 3. Rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend disponível em: `http://localhost:3000`

---

## Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| GET | /api/contatos | Lista todos os contatos |
| GET | /api/contatos/{id} | Busca contato por ID |
| POST | /api/contatos | Cria novo contato |
| PUT | /api/contatos/{id} | Edita contato |
| DELETE | /api/contatos/{id} | Exclui contato |

---

## Decisões técnicas

- **Migrations automáticas no Docker** — o backend aplica `db.Database.Migrate()` ao iniciar, garantindo que as tabelas existam sem intervenção manual
- **Variáveis de ambiente** — a string de conexão é configurável via variável de ambiente, permitindo funcionar tanto localmente quanto no Docker sem alterar o código
- **CORS** — configurado para aceitar qualquer origem para facilitar o desenvolvimento

---

## Possíveis melhorias

- Paginação na listagem de contatos
- Implementação de camada de Service para tratamento das regras de negócio (padrão MVC completo)
- Tratamento de erros centralizado via middleware
- Testes unitários e de integração
- Extração do formulário de contato em um componente reutilizável compartilhado entre as páginas de criar e editar
- Validações no frontend (campos obrigatórios, formato de email, etc.)
- Feedback visual de loading e erros para o usuário
- Deploy na nuvem (Render, Railway ou Vercel)
