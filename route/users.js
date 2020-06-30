const express = require('express');
const router = express.Router();
const model = require('../model');

router.get('/api/users', (request, response) => {
  response.json(model.users);
})

router.get('/api/user/:index', (request, response) => {
  response.json(model.users[request.params.index]);
})

router.post('/api/user', (request, response) => {
  model.users.push(request.body)
  response.send({
    success: true,
  })
})

module.exports = router;