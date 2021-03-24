const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logging = require('../logging/WinstonLogging');
const model = require('../models/movies');
const auth = require('../controllers/auth');
const log = logging.createLogger('Movie Routes');
const router = Router({prefix: '/api/movies'});


router.post('/addmovie', bodyParser(), auth, addmovie);
router.del('/delmovie', bodyParser(), auth, removeMovies);
// router.get('/mymovies', auth, getMovies);



/**
 * Route to fir users to add movie to their favirotes
 * @param {Object} ctx - The koa Request/response object 
 */
 async function addmovie(ctx) {
    const username = ctx.state.user.username;
    const movie = ctx.request.body.movie;
    // let movie = '123'
    try {  
        const succsess = await model.addFaveMovie(username, movie);
        let res;
        if(succsess.affectedRows) {
            log.info("Succsefully added movie to favirotes");
            ctx.status = 201;
            res = {Sucsess: true, message: `succsefully added book ${succsess.insertId}`};
        } else {
            log.error("Failed to add new user");
            ctx.status = 409;
            res = {Sucsess: false, message: 'Failed to add to favirotes'};   
        }
        ctx.body= res;
    } catch (e) {
        log.error(e.toString());
        ctx.status = 500;
        ctx.body = {Error: 'Server Error, please try again'};
    }
}

/**
 * Route to delete users book
 * @param {Object} ctx - The koa Request/response object 
 */
 async function removeMovies(ctx) {
    const username = ctx.state.user.username;
    const movie = ctx.request.body.movie;
    try {  
        // const res = await model.getOwnMovies(username);
        const succsess = await model.deleteMovie(username, movie);
        let res;
        if(succsess.affectedRows) {
            log.debug("Succsefully delted movie from favirotes");
            ctx.status = 201;
            res = {Sucsess: true, message: `succsefully deleted book`};
        } else {
            log.error("Failed to add new user");
            ctx.status = 409;
            res = {Sucsess: false, message: 'Failed to add to favirotes'};   
        }
        ctx.body= res;
    } catch (e) {
        log.error(e.toString());
        ctx.status = 500;
        ctx.body = {Error: 'Server Error, please try again'};
    }
}

module.exports = router;