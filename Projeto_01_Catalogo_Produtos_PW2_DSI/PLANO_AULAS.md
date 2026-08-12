# Projeto 01 — Catálogo de Produtos

Projeto integrado entre:

- **Programação Web II (PW II):** Front-end com React
- **Desenvolvimento de Sistemas I (DS I):** Back-end com Node.js e Express

## Objetivo

Construir um catálogo simples de produtos para mostrar, na prática, a separação entre front-end e back-end.

O React apresenta os dados e recebe a interação do usuário.  
O Express mantém os dados temporariamente em memória e disponibiliza as operações usadas pelo front-end.

> Nesta primeira etapa não existe banco de dados. O vetor de produtos é apenas um recurso didático e não deve ser tratado como persistência.

## Estrutura

```text
Projeto_01_Catalogo_Produtos_PW2_DSI/
├── frontend/
├── backend/
├── PLANO_AULAS.md
└── README.md
```

## Como executar

### 1. Backend

Abra um terminal:

```bash
cd backend
npm install
npm run dev
```

Servidor:

```text
http://localhost:3000
```

### 2. Frontend

Abra outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

## Integração

O Vite possui um proxy configurado.

Quando o React chama:

```text
/api/produtos
```

a requisição é encaminhada para:

```text
http://localhost:3000/api/produtos
```

Assim o foco da aula permanece em React + Express, sem transformar esta etapa em uma aula sobre CORS.

## Conteúdos trabalhados

### PW II

- renderização no lado cliente;
- componentes;
- renderização de listas;
- reatividade e interação;
- eventos;
- estado.

### DS I

- aplicação back-end com framework;
- Node.js e Express;
- organização inicial do projeto;
- manipulação temporária de dados;
- integração com o front-end.

## Observação pedagógica

O vetor utilizado no backend desaparece quando o servidor é reiniciado.

A persistência real será desenvolvida nos próximos projetos.
