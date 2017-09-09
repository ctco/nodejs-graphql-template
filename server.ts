import 'source-map-support/register';
import env from './env';

process.env = env;
import * as chalk from 'chalk';
import app from './src/app';
import {graphQlPath, mountPath, voyagerPath} from './src/paths';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.GRAPHIQL) {
      console.log(`The GraphiQL App is running at:`);
      console.log();
      console.log(`  ${chalk.cyan(`http://localhost:${port}${mountPath}/${graphQlPath}`)}`);
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
      console.log(`  ${chalk.cyan(`http://localhost:${port}${mountPath}/${voyagerPath}`)}`);
    }
  } else {
    console.log(`The Koa App is running mounted at ${mountPath}`);
  }
});
