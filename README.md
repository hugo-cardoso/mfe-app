# Micro Frontend Application (Runtime Integration JS)

Essa é uma simples aplicação que demonstra como utilizar a arquitetura de micro frontends e a abordagem de tempo de execução com Javascript.

## Tecnologias

### Main Application

- Vue
- Vue Router
- Vite
- Typescript

### [Header](https://github.com/hugo-cardoso/mfe-app-header)

- React
- Vite
- Typescript

### [Home Page](https://github.com/hugo-cardoso/mfe-app-home)

- Svelte
- Vite
- Typescript

### [About Page](https://github.com/hugo-cardoso/mfe-app-about)

- Vue
- Vite
- Typescript

Todas as micro aplicações são "buildadas" e enviadas para um bucket s3 utilizando o Github Action. A aplicação principal é "deployada" na Vercel.

---

Referêcias:

- https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaJavascript
