export default {
  template: `
          <section>
            <h2>유저 목록</h2>
            <ul v-for="(user, index) in users" :key="index">
              <li v-html="user.name" />
              <li v-html="user.age" />
              <li><router-link :to="'/user/' + index">조회</router-link></li>
            </ul>
            <ul>
              <li>유저 정보 추가</li>
              <li><input type="text" v-model="userInfo.name" size="20" /></li>
              <li><input type="text" v-model="userInfo.age" size="20" /></li>
              <li><button type="submit" @click="push">전송</button></li>
            </ul>
          </section>
        `,
  data () {
    return {
      userInfo: {
        name: '',
        age: '',
      },
      users: []
    }
  },
  methods: {
    load() {
      fetch('/api/users')
        .then(response => response.json())
        .then(users => {
          this.users = users;
        })
    },
    push () {
      const option = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.userInfo)
      };
      fetch('/api/user', option)
        .then(response => response.json())
        .then(() => this.load())
    }
  },
  created() {
    this.load();
  }
}