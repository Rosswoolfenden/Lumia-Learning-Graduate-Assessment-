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
