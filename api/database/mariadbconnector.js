const config = require('../config');
const logger = require('../logging/WinstonLogging');
const db = require('promise-mysql'); 
const log = logger.createLogger('SQL connector');

/**
 * A function to query the database with given query and paramaters
 * @param {String} query String containing the sql query 
 * @param {Array} params Array contianing all the needed peramters
 */
exports.sqlquery = async (query, params) => {
    let connection;
    try{
        const connection = await db.createConnection(config.mariadb);
        const res = await connection.query(query, params);
        return res;
    } catch(e) {

        log.error(e);

    } finally {
        if(connection) {
            log.debug('mariadb connection has ended');
            connection.end();
        }
    }
}


