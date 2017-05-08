import * as Koa from 'koa';
import * as cors from 'koa-cors';
import * as convert from 'koa-convert';
import router from './router';

const app = new Koa();

app.use(convert(cors()));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
