import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class users extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
    });

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrupt.hash(user.password, 8);
      }
    });

    return this;
  }
  
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default users;