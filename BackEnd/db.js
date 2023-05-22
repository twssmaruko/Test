const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgresgrp12",
    password: "grp1212345687",
    host: "postgresgrp12.ck89hy6mxnuv.us-east-1.rds.amazonaws.com",
    database: "postgresgrp12",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
    
});

module.exports = pool;