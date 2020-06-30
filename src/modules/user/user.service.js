const userRepository = require('./user.repository');

class UserService {

  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  getUsers () {
    return this.#userRepository.findAll();
  }

  getUser (idx) {
    return this.#userRepository.findByIdx(idx);
  }

  addUser (userInfo) {
    const user = User.init(userInfo);
    return this.#userRepository.save(user);
  }
}

module.exports = new UserService(userRepository);