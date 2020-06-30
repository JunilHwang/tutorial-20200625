export default {
  template: `
    <section>
      <h2>{{ user.name }}</h2>
      <p> {{ user.email }} </p>
      <p> {{ user.age }} </p>
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