import Sequelize, { Model } from 'sequelize';

class students extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.REAL,
      height: Sequelize.REAL,
    },
    {
      sequelize,
      freezeTableName: true,
    });
  }
}

export default students;