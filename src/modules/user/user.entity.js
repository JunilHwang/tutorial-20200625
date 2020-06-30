class User {

  // 필드 선언. '#'이 붙은건 private field
  #idx; #name; #email; #age;

  constructor({ idx, name, email, age }) {
    this.#idx = idx;
    this.#name = name;
    this.#email = email;
    this.#age = age;
  }

  static of (params) {
    return new User(params)
  }

  static init (userInfo) {
    return User.of({ idx: null, ...userInfo });
  }

  getProperties() {
    return {
      idx: this.#idx,
      name: this.#name,
      email: this.#email,
      age: this.#age,
    }
  }
}

module.exports = User;