const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'junil',
  password: 'junil321#@!',
  database: '20200630'
});

const promisePool = () => connection.promise();

const query = (...params) => promisePool().query(...params);

module.exports = { connection, query };