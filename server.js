const express = require('express');
const app = express();
const users = require('./src/module/user/users');

app.use(express.json()); // request post data 파싱을 위함

// view
app.use('/', express.static('public'));

// api 부분
app.use(users); /* /api/user */
                /* /api/users에 대한 라우터 */

app.listen(8080, () => {
  console.log('server start');
})