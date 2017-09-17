
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status TravisCI](https://travis-ci.org/ctco-dev/koa-graphql-template.svg?branch=master)](https://travis-ci.org/ctco-dev/koa-graphql-template)
[![Build Status AppVeyor](https://ci.appveyor.com/api/projects/status/wclytcth7faa5na5?svg=true)](https://ci.appveyor.com/project/trioletas/koa-graphql-template)
[![Greenkeeper badge](https://badges.greenkeeper.io/ctco-dev/koa-graphql-template.svg)](https://greenkeeper.io/)
[![Dependency Status](https://david-dm.org/ctco-dev/koa-graphql-template/master.svg)](https://david-dm.org/ctco-dev/koa-graphql-template/master)
[![devDependency Status](https://david-dm.org/ctco-dev/koa-graphql-template/master/dev-status.svg)](https://david-dm.org/ctco-dev/koa-graphql-template/master#info=devDependencies)
[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]()

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

# koa-graphql-template

Koa, GraphQL and TypeScript template project with batteries included.

## Features

- Docker :whale: configuration for production deployment and development work flow
- Configuration with `.env`
  - CORS toggle
  - GraphiQL toggle
  - GraphQL Voyager toggle
  - Logging levels
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
- [Azure deployment configuration](cloud/azure#deployment)
 (you can use __Deploy to Azure__ button in the top to deploy this repo instantly)  

## Required Software

- node >= 7.6.0 & npm / yarn

or

- Docker

## Install

`$ npm i` or `$ yarn` or `$ docker-compose up`

## Develop

`$ npm start` or `$ yarn start` or `$ docker-compose up`

If you have issues with `src` folder not properly mounting on windows virtual box, see [this](https://github.com/docker/compose/issues/2548#issuecomment-232922650) comment for remedy.

## Test

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

`set CI=true&&npm test`

## Build

`$ npm run build` or `$ yarn build` or `$ docker build .`

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
  - [GraphQL Voyager](https://apis.guru/graphql-voyager/)

- Jest
  - [Documentation](https://facebook.github.io/jest/docs/en/getting-started.html)

- winston
  - [GitHub](https://github.com/winstonjs/winston)
  
- Docker
  - [Home Page](https://www.docker.com)
