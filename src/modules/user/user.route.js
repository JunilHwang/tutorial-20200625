const express = require('express');
const router = express.Router();
const userService = require('./user.service');

router.get('/api/users', async (request, response) => {
  const users = await userService.getUsers();
  response.json(users);
});

router.get('/api/user/:index', (request, response) => {
  response.json(model.users[request.params.index]);
});

router.post('/api/user', (request, response) => {
  model.users.push(request.body)
  response.send({
    success: true,
  })
});

module.exports = router;