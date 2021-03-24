const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logging = require('../logging/WinstonLogging');
const router = Router({prefix: '/api/users'});
const log = logging.createLogger('Users Routes');

router.post('/', welcome);


/**
 * Route to register new users
 * @param {Object} ctx - Th#e koa Request/response object 
 */
 async function welcome(ctx) {
    const body = ctx.request.body;
    try {  
        const res = "Welcome to the users routes API";
        ctx.body = res
    } catch (e) {
        log.error({Error: e.toString()});
        ctx.status = 500;
        ctx.body = {Error: 'Server Error, please try again'};
    }
}


module.exports = router;