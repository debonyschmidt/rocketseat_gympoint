import Sequelize, { Model } from 'sequelize';

class users extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
    });
  }
}

export default users;