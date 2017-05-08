import env from './env';
process.env = env;
import app from './src/app';

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Koa application listening on port ${port}`));
