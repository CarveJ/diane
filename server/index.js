const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router.js')
const cors = require('@koa/cors')
const db = require('./db')

const app = new Koa()
const port = 3001

app.use(cors())
app.use(bodyparser());
app.use(router.routes())

app.listen(port, () => {
  console.log("Listening on port 3001");
})
