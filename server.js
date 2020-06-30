const express = require('express');
const app = express();
const userRoute = require('./src/modules/user/user.route');

app.use(express.json()); // request post data 파싱을 위함

// view
app.use('/', express.static('public'));

// api 부분
app.use(userRoute); /* /api/user */
                /* /api/users에 대한 라우터 */

app.listen(8080, () => {
  console.log('server start');
  console.log('http://localhost:8080');
})