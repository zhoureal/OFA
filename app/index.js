const Koa = require('koa');
const render = require('./lib/render');
const router = require('./routers/index.js')

const app = new Koa();

app.use(render);

app.use(router.routes());

app.listen(3001, ()=>{
    console.log("app is now listening port 3001")
})