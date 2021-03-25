const logging = require('../logging/WinstonLogging');
const bcrypt = require('bcrypt');
const db = require('../database/mariadbconnector');

const log = logging.createLogger('User Model');


/**
 * A Function to call the sql query to add the given user to the databse
 * @param {Object} body An object containing the details for the new user
 */
 exports.registerUser =  async(body) => {     
    if(!body.username || !body.password) {
        return 'Please enter name and password'
    }
    // todo -  add check to see if username already exists.
    const hashpass = bcrypt.hashSync(body.password, 10);
    body.password = hashpass;
    const query = 'INSERT INTO users SET ?';
    const result = await db.sqlquery(query, body);
    
    return result;
 }


 
 /**
 * A Function to to find user by username
 * @param {String} username String containing the inputted username
 */
  exports.findUser =  async(username) => {
    const query = 'SELECT * FROM users WHERE username = ?;';
    const result = await db.sqlquery(query, username);
    if(result.length === 1) {
        return result[0]
    } else {
        log.debug(username + ' does not exist in database');
        return false;
    }
 }
