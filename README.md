# Project Client App - Nuxt 3

# Document

Nuxt 3 : `https://nuxt.com/`

Scss: `https://sass-lang.com/documentation/`

Prettier: `https://prettier.io/docs/en/`

Tailwindcss: `https://tailwindcss.com/docs/installation`

Docker: `https://docs.docker.com/get-started/`

# Docker

Docker build (create images)

```bash
docker build -t container_name .
```

Docker run (create container by images)

```bash
docker run -dp 3001:3000 imagesKey/container_name
```

3001: port on windows / system, 3000: port project on docker

Goto `http://localhosst:3001` see the result

## Require

Node JS 16+

## Setup

Follow on the steps:

Step 1: (setup all package(node_modules) by file package.json)

```bash
npm install
```

Step 2: (dev run project)

```bash
npm run dev
```
## Format code and test

Format code

```bash
npm run format
```

Test code

```bash
npm run test
```

## Active dev tools

Open file "nuxt.config.ts" => find the comment "active dev toos" =>   devtools: { enabled: false } ->   devtools: { enabled: true }

## build for production

```bash
npm run build
```
