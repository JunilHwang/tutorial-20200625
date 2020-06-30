export default {
  template: `
    <section>
      <h2>{{ user.name }}</h2>
      <ul>
        <li>이메일: {{ user.email }}</li>
        <li>나이: {{ user.age }}</li>
      </ul>
      <router-link to="/">목록으로</router-link>
    </section>
  `,
  data () {
    return {
      user: {
        name: '',
        email: '',
        age: '',
      }
    }
  },
  created() {
    fetch(`/api/user/${this.$route.params.idx}`)
      .then(response => response.json())
      .then(user => {
        this.user = { ...user };
      })
  }
}