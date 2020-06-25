import router from './router/index.js';

new Vue({
  el: '#app',
  router,
  template: `
    <section>
      <h1>회원 정보 시스템</h1>
      <p>
        <router-link to="/">HOME</router-link>
        <router-link to="/test">TEST</router-link>
      </p>
      <router-view></router-view>
    </section>
  `
})