## Description

This repository contains a basic setup for [Tailwind](https://tailwindcss.com/), [Vue 3](https://v3.vuejs.org/) using [Vite](https://github.com/vitejs/vite) for bundling and also a basic structure for GraphQL support using [Vue Apollo](https://v4.apollo.vuejs.org/)

## Technologies

* [Tailwind](https://tailwindcss.com/)
* [Vue 3](https://v3.vuejs.org/)
* [Vite](https://github.com/vitejs/vite)
* [Vue Router](https://next.router.vuejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Vue Apollo](https://v4.apollo.vuejs.org/)
* [Apollo](https://www.apollographql.com/docs/)
* [GraphQL Codegen](https://graphql-code-generator.com/)
* [Yarn](https://yarnpkg.com/)
* [Testing Library](https://testing-library.com/docs/vue-testing-library/intro)

## Quality Controls

* [Prettier](https://prettier.io/)
* [Commitlint](http://commitlint.js.org/)
* [Husky](https://typicode.github.io/husky) & [Lintstaged](https://github.com/okonet/lint-staged) (to help keep the quality workflow seamless)

## Scripts

* `test`: runs tests defined in *__tests__* folder in the project.
* `test:coverage`: runs tests with coverage report.

## Folder Structure

### src/css

Applications stylesheets should be placed here.

### src/components

Reusable components used throughout the application should be situated here.

### src/hooks

You should place your application hooks in this folder with the advent of [Composition API](https://v3.vuejs.org/api/composition-api.html#composition-api) in Vue 3.

### src/pages

This folder contains your application pages.

### src/graphql

This folder contains everything regarding the graphql setup, queries, mutations and also files generated by [GraphQL Codegen](https://graphql-code-generator.com/) when you run `yarn codegen`

**src/graphql/queries**

Queries for each GraphQL types should be placed in here. Example, your GraphQL API has a **User** type and you need to write queries for that type, you should create a corresponding file **user.ts** and write your queries in the file/module.

**src/graphql/mutations**

The same convention that exists for GraphQL queries should be used for mutations also.

| :information_source: **Information** |
|:-------------------------------------|
| You should read up on [Vite](https://github.com/vitejs/vite) to give you an overview of how this folders (**/public/,/src/assets**) are used. |


## TODO

- [ ] GraphQL testing support
- [ ] E2E using Cypress (Gherkins & Cucumber)
