const mysql = require('mysql');
const config = require('../config');
const db = mysql.createConnection({
    host:config.db.host,
    user:config.db.user,
    password:config.db.password,
    database:config.db.database
})

db.connect()

module.exports = db