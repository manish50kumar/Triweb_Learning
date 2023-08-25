const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    database: "curd_mysql",
    user: "root",
    password: ""
});

module.exports = pool.promise() ;