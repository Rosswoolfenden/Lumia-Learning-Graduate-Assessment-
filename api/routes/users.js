const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logging = require('../logging/WinstonLogging');
const router = Router({prefix: '/api/users'});
const log = logging.createLogger('Users Routes');
const model = require('../models/users');
const auth = require('../controllers/auth');

// router.post('/', welcome);
router.post('/', bodyParser(), auth, login);
router.post('/register', bodyParser(), register);


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


/**
 * Route to register new users
 * @param {Object} ctx - The koa Request/response object  
 */
 async function register(ctx) {
    const body = ctx.request.body.user;
    try {
        const succsess = await model.registerUser(body);
        let res;
        if(succsess.affectedRows) {
            log.info("Added new user");
            res = {Sucsess: true, message: `succsefully registered user ${succsess.insertId}`};
            ctx.status = 201;
        } else {
            log.error("Failed to add new user");
            res = {Sucsess: false, message: 'Failed to register user'};
            ctx.status = 409
        }
        ctx.body = res
    } catch (e) {
        log.error(e.toString());
        ctx.status = 500;
        ctx.body = {Error: 'Server Error, please try again'};
    }
}

/** 
* Route to do basic log in.
* @param {Object} ctx - The koa Request/response object  
*/
async function login(ctx) {
    const user = ctx.state.user;
    log.info(`${user.username} has logged in `);
    ctx.status= 200;
    ctx.body = {Success: true, User: user};
}

module.exports = router;