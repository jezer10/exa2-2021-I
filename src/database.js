const p = require('pg');

const pool = new p.Pool({
    host: 'sysevadb.clvmpof1mwut.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'SGAUxzSH7yZzls8jmHBS',
    database: 'upeu',
    port: 5432,
})

module.exports = pool;