const express = require('express');
const app = express();
const model = {
  users: [
    {
      name: '최우연',
      age: 25,
    },
    {
      name: '황준일',
      age: 27,
    }
  ]
}

app.use('/', express.static('public'));

app.get('/api/users', (request, response) => {
  response.json(model.users);
})

app.get('/api/user/:index', (request, response) => {
  response.json(model.users[request.params.index]);
})

app.listen(8080, () => {
  console.log('server start');
})