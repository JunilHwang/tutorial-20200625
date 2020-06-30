const { query, execute } = require('./index');

class UserRepository {
  constructor() { }

  async findByIdx (idx) {
    const [ rows ] = await execute('SELECT * FROM `user` WHERE idx = ?', idx)
    return rows.length ? rows[0] : null;
  }

  insert () {

  }

  async save (user) {
    const { idx, name, email } = user.getProperties();
    if (idx === null) {
      await execute('INSERT INTO `user` SET ?', { name, email })

    } else {

    }
  }
}

module.exports = new UserRepository();