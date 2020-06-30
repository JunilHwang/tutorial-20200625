const userRepository = require('./user.repository');
const User = require('./user.entity');

class UserService {

  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async getUsers () {
    const users = await this.#userRepository.findAll();
    return users.map(user => user.getProperties());
  }

  async getUser (idx) {
    const user = await this.#userRepository.findByIdx(idx);
    return user.getProperties();
  }

  addUser (userInfo) {
    const user = User.init(userInfo);
    return this.#userRepository.save(user);
  }
}

module.exports = new UserService(userRepository);