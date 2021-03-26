exports.info = {
    port: 8080
}

exports.mariadb = {
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'api',
    password: process.env.DB_PW || '',
    database: process.env.DB_NAME || 'lumiadb',
    connectionLimit: 5
  }
  