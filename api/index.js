const Koa = require('koa');
const config = require('./config');
const cors = require('@koa/cors');
const app =  new Koa();
const port = config.info.port;
app.use(cors());

app.listen(port, () => console.log(`Public libary Api is now running on port ${port}`));