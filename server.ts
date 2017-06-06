import 'source-map-support/register';
const env = require('./env');
process.env = env;
import * as chalk from 'chalk';
import app from './src/app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.GRAPHIQL) {
      console.log(`The GraphiQL App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}/api/graphql`)}`);
    } else {
      console.log(`The Koa App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}`)}`);
    }
  } else {
    console.log(`The Koa App is running`);
  }
});
