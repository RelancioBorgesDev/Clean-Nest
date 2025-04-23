# 🧠 Forum API - Trilha Node JS Rocketseat

Uma API REST robusta construída com **NestJS**, seguindo os princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**. Esta aplicação simula um fórum com funcionalidades modernas como notificações, anexos, cache em Redis, testes com Vitest e persistência de dados com PostgreSQL via Prisma. Tudo containerizado via Docker.

---

## ⚙️ Tecnologias e Ferramentas

- **NestJS**: framework principal
- **Vitest**: testes unitários e E2E
- **Prisma ORM**: acesso ao banco de dados PostgreSQL
- **Redis**: cache de detalhes da pergunta
- **Cloudinary**: upload e armazenamento de anexos
- **Docker**: containerização
- **Node.js**: até versão 20

---

## 🚀 Funcionalidades

- Criar e listar perguntas com paginação
- Responder perguntas
- Notificações assíncronas
- Upload de anexos (imagem, vídeo, etc.)
- Cache de detalhes das perguntas via Redis
- Testes automatizados (unitários e e2e)
- Banco de dados separado para testes

---

## 📦 Scripts

- "build": "nest build",
- "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
- "start": "nest start",
- "start:dev": "nest start --watch",
- "start:debug": "nest start --debug --watch",
- "start:prod": "node dist/main",
- "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
- "test": "vitest run",
- "test:watch": "vitest",
- "test:cov": "vitest run --coverage",
- "test:debug": "vitest --inspect-brk --inspect --logHeapUsage --threads=false",
- "test:e2e": "vitest run --config ./vitest.config.e2e.ts",
- "test:e2e:watch": "vitest --config ./vitest.config.e2e.ts"