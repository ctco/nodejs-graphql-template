import 'source-map-support/register';
import env from './env';
process.env = env;

import chalk from 'chalk';
import app from './app';
import { graphiqlPath, voyagerPath, playgroundPath } from './paths';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.GRAPHIQL) {
      console.log(`The GraphiQL App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}/${graphiqlPath}`)}`);
    } else {
      console.log(`The Koa App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}`)}`);
    }
    if (process.env.VOYAGER) {
      if (process.env.GRAPHIQL) {
        console.log();
      }
      console.log(`The GraphQL Voyager App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}/${voyagerPath}`)}`);
    }
    if (process.env.PLAYGROUND) {
      if (process.env.GRAPHIQL || process.env.VOYAGER) {
        console.log();
      }
      console.log(`The GraphQL Plaground App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}/${playgroundPath}`)}`);
    }
  } else {
    console.log(`The Koa App is running`);
  }
});
