const passport = require('koa-passport');
const basicAuth = require('./basicLogin');

passport.use(basicAuth);
// todo 0auth authentication 
module.exports = passport.authenticate(['basic'], {session:false});