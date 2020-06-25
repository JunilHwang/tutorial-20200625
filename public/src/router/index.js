import { Home, User } from '../views/index.js';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/user/:idx',
      component: User
    },
    {
      path: '/test',
      component: {
        template: `
          <div>TEST</div>
        `
      }
    }
  ]
})