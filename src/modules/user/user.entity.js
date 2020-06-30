class User {

  // 필드 선언. '#'이 붙은건 private field
  #idx; #name; #email;

  constructor({ idx, name, email }) {
    this.#idx = idx;
    this.#name = name;
    this.#email = email;
  }

  static of (params) {
    return new User(params)
  }

  static init (params) {
    return User.of({ idx: null, ...params });
  }

  getProperties() {
    return {
      idx: this.#idx,
      name: this.#name,
      email: this.#email
    }
  }
}

