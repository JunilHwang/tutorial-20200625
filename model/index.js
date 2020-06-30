const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'junil',
  database: 'junil321#@!'
});

const promisePool = () => connection.promise();

const query = sql => promisePool().query(sql);
const execute = (...params) => promisePool().execute(...params);

module.exports = { connection, query, execute };