import 'source-map-support/register';
import env from './env';
process.env = env;

import chalk from 'chalk';
import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.GRAPHIQL) {
      console.log(`The GraphiQL App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}/${process.env.GRAPHIQL_PATH }`)}`);
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
      console.log(`  ${chalk.cyan(`http://localhost:${port}/${process.env.VOYAGER_PATH}`)}`);
    }
    if (process.env.PLAYGROUND) {
      if (process.env.GRAPHIQL || process.env.VOYAGER) {
        console.log();
      }
      console.log(`The GraphQL Plaground App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}/${process.env.PLAYGROUND_PATH}`)}`);
    }
  } else {
    console.log(`The Koa App is running`);
  }
});
