const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'junil',
  password: 'junil321#@!',
  database: '20200630'
});

const promisePool = () => connection.promise();

const query = sql => promisePool().query(sql);

module.exports = { connection, query };