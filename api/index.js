const Koa = require('koa');
const config = require('./config');
const logging = require('./logging/WinstonLogging');
const cors = require('@koa/cors');
const app =  new Koa();
const port = config.info.port;

const log =  logging.createLogger('Server');
app.use(cors());

app.listen(port, () => log.info(`Public libary Api is now running on port ${port}`));