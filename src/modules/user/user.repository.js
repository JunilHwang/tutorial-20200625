const { query } = require('../../model');

class UserRepository {
  constructor() { }

  async findAll () {
    const [ rows ] = await query('SELECT * FROM `user`');
    return rows;
  }

  async findByIdx (idx) {
    const [ rows ] = await query('SELECT * FROM `user` WHERE idx = ?', [ idx ])
    return rows.length ? rows[0] : null;
  }

  async insert (userInfo) {
    try {
      return await query('INSERT INTO `user` SET ?', userInfo);
    } catch (e) {
      return null;
    }
  }

  async save (user) {
    const { idx, name, email } = user.getProperties();
    try {
      if (idx === null) {
        const [results] = await query('INSERT INTO `user` SET ?', {name, email});
        return User.of({name, email, idx: results.insertId});
      } else {
        await query('UPDATE `user` SET `name` = ?, `email` = ? where idx = ?', [name, email, idx]);
        return User.of({name, email, idx});
      }
    } catch (e) {
      return null;
    }
  }
}

module.exports = new UserRepository();