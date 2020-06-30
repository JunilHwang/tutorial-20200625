const express = require('express');
const router = express.Router();
const userService = require('./user.service');

router.get('/api/users', async (request, response) => {
  const users = await userService.getUsers();
  response.json(users);
});

router.get('/api/user/:idx', async ({ params: { idx } }, response) => {
  const user = await userService.getUser(idx);
  response.json(user);
});

router.post('/api/user', async ({ body: userInfo }, response) => {
  await userService.addUser(userInfo);
  response.status(204).send();
});

module.exports = router;