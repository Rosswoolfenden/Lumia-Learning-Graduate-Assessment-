const Koa = require('koa');
const config = require('./config');
const logging = require('./logging/WinstonLogging');
const cors = require('@koa/cors');
const userroute = require('./routes/users');
const app =  new Koa();
const port = config.info.port;

const log =  logging.createLogger('Server');
app.use(cors());
app.use(userroute.routes());

app.listen(port, () => log.info(`Public libary Api is now running on port ${port}`));