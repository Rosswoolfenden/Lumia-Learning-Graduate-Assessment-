const logging = require('../logging/WinstonLogging');
const db = require('../database/mariadbconnector');

const log = logging.createLogger('Movies Model');

/**
 * A Function to add movies to db
 * @param {String} username A string with the username of the call
 * @param {String} movieid  string with the imbd id of the movies being added.
 */
 exports.addFaveMovie =  async(username, movieid) => {

    let favirotes = await this.getOwnMovies(username);
    
    // check to see if any movies have been added.
    if(favirotes.favourite_movies) {
        log.debug("updating favirote movies string");
        console.log(favirotes.favourite_movies);
        favirotes = favirotes.favourite_movies + ',' + movieid;
    } else {
        log.debug("User has not added any favirotes yet");
        favirotes = movieid;
    }

    const result = await updateMovies(favirotes, username);
    return result;

 }

 /**
 * A Function to call the sql query to update movie list -  seperate function to avoid repeating code 
 * @param {String} favirotes A string with the new faviorte movies
 * @param {String} movieid  string with the users username
 */
  async function updateMovies(favirotes, username) {

    const query = 'UPDATE users SET favourite_movies = ? WHERE username = ?';
    const result = await db.sqlquery(query, [favirotes, username]);
    return result;
    
  }

/**
 * A Function to get all faviorute movies for user.
 * @param {String} username A string containin users username
 */
exports.getOwnMovies = async(username) => {
    const query = 'SELECT favourite_movies FROM users WHERE username = ?';
    const result = await db.sqlquery(query, [username]);
   
    return result[0];
}


/**
 * A Function to delete movie from favirotes list
 * @param {String} username A string containin users username
 * @param {String} movieid A string containin movie id the users wants to remove
 */
 exports.deleteMovie = async(username, movieid) => {

    let favirotes = await this.getOwnMovies(username);
    faveArrays = (favirotes.favourite_movies).split(',');
    let newFavirotes = [];

    for(let i =0; i < faveArrays.length; i ++) {
        if(!(faveArrays[i] == movieid)) {
            log.debug("found movie");
            newFavirotes.push(faveArrays[i])
        } 
    }
    newFavirotes = newFavirotes.toString();
    const result = await updateMovies(newFavirotes, username);
 
   
    return result;
}