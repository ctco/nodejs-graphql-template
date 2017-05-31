 # koa-graphql-ts-template
 
Koa, GraphQL and TypeScript template project with batteries included.

## Features

- Configuration with `.env`:
  - CORS toggle
  - GraphiQL toggle
  - Logging levels
- Development mode:
  - Incremental builds 
  - Automatic server restart
  - Linting
- Testing
  - Unit tests
  - Integration tests for GraphQL schema
- Reporting
  - Test result export to JUnit format
  - Coverage result export to Cobertura format

## Required Software

- node >= 7.6.0

## Installation

`$ npm i` or `$ yarn`

## Development Mode

`$ npm start` or `$ yarn start`

## Run tests

> single test run

### Run unit tests

`$ npm run test:unit`

### Run integration tests

`$ npm run test:integration`

### Run all tests

`$ npm test`

### Generate coverage reports

Set environment variable `CI` to true to generate coverage reports.

In *nix:

`CI=true npm test`

In Windows:

`set CI=true && npm test`

## Build (for production deployment)

`$ npm run build` or `$ yarn build`

## Tech Stack

- TypeScript
  - [Home Page](https://www.typescriptlang.org/)
  
- Koa
  - [GitHub](https://github.com/koajs/koa)
    
- GraphQL
  - [Documentation](http://graphql.org/learn/)
  - [ctco-dev/awesome-javascript materials](https://github.com/ctco-dev/awesome-javascript#graphql)
  - [GraphQL.js](http://graphql.org/graphql-js/)
  - [Koa GraphQL.js middleware](https://github.com/chentsulin/koa-graphql)
  
- Jest
  - [Documentation](https://facebook.github.io/jest/docs/en/getting-started.html)

- winston
  - [GitHub](https://github.com/winstonjs/winston)
  
## Cloud Deployment 
  - [Azure App Service](https://github.com/ctco-dev/koa-graphql-ts-template/tree/azure)
