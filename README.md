[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status TravisCI](https://travis-ci.org/ctco/nodejs-graphql-template.svg?branch=master)](https://travis-ci.org/ctco/nodejs-graphql-template)
[![Build Status AppVeyor](https://ci.appveyor.com/api/projects/status/wclytcth7faa5na5?svg=true)](https://ci.appveyor.com/project/trioletas/nodejs-graphql-template)
[![Greenkeeper badge](https://badges.greenkeeper.io/ctco/nodejs-graphql-template.svg)](https://greenkeeper.io/)
[![Dependency Status](https://david-dm.org/ctco/koa-graphql-template/master.svg)](https://david-dm.org/ctco/nodejs-graphql-template/master)
[![devDependency Status](https://david-dm.org/ctco/koa-graphql-template/master/dev-status.svg)](https://david-dm.org/ctco/nodejs-graphql-template/master#info=devDependencies)
[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]()

# nodejs-graphql-template

Node.js, Koa, GraphQL and TypeScript template project with batteries included.

## Features

- Docker :whale: configuration for production deployment, development and testing
- GraphQL tools:
  - _GraphiQL_
  - _GraphQL Voyager_
  - _GraphQL IDL_
- CORS middleware
- 12 Factor Configuration with `.env`
- Configurable logging 
  - powered by `winston`  
- Supercharged Development Mode
  - Incremental TypeScript builds
  - Automatic server restart on changes
  - Linting
- Testing
  - Unit tests
  - Integration tests for GraphQL schema
- Reporting
  - Test result export to JUnit format
  - Coverage result export to Cobertura format

## Required Software

- `node` >= 8.1.4 & `npm` / `yarn`

or

- `Docker` >= 17.05

## Install

- npm: `$ npm i`
- yarn: `$ yarn`
- Docker: `$ docker-compose up`

## Develop

- npm: `$ npm start`
- yarn: `$ yarn start`
- Docker: `$ docker-compose up --build`

Attention windows users: when `Docker for Windows` is not an option, install `yarn` and run `$ yarn && yarn docker-mount` beforehand.
## Test

> single test run

### Run unit tests

- npm: `$ npm run test:unit`
- yarn: `$ yarn test:unit`
- Docker: `$ docker-compose -f docker-compose.test.yml run sut test:unit`

### Run integration tests

- npm: `$ npm run test:integration`
- yarn: `$ yarn test:integration`
- Docker: `$ docker-compose -f docker-compose.test.yml run sut test:integration`

### Run all tests

- npm: `$ npm test`
- yarn: `$ yarn test`
- Docker: `$ docker-compose -f docker-compose.test.yml run sut`

### Generate coverage reports

Set environment variable `CI` to true to generate coverage reports.

In *nix:

`CI=true npm test`

In Windows:

`set CI=true&&npm test`

In Docker:

`docker-compose -f docker-compose.test.yml run -e CI=true sut`

## Build

`$ npm run build` or `$ yarn build` or `$ docker build .`

## Tech Stack

- TypeScript
  - [Home Page](https://www.typescriptlang.org/)

- Koa
  - [GitHub](https://github.com/koajs/koa)

- GraphQL
  - [graphql-tools](https://github.com/apollographql/graphql-tools)
  - [apollo-server](https://github.com/apollographql/apollo-server)
  - [graphql-voyager](https://apis.guru/graphql-voyager/)

- Jest
  - [Documentation](https://facebook.github.io/jest/docs/en/getting-started.html)

- winston
  - [GitHub](https://github.com/winstonjs/winston)
  
- Docker
  - [Home Page](https://www.docker.com)
