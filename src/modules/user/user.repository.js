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
    const params = user.getProperties();
    try {
      if (params.idx === null) {
        const { idx, ...userInfo } = params;
        const [ results ] = await query('INSERT INTO `user` SET ?', userInfo);
        return User.of({ ...params, idx: results.insertId });
      } else {
        await query('UPDATE `user` SET `name` = :name, `email` = :email, `age` = :age where idx = :idx', params);
        return user;
      }
    } catch (e) {
      return null;
    }
  }
}

module.exports = new UserRepository();