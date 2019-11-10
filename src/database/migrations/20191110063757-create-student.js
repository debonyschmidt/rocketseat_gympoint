module.exports = {
      up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('student', { 
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          name:{
            type: Sequelize.STRING,
            allowNull: false,
          },
          age:{
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          weight: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          height: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        });
      },
    
      down: queryInterface => {
        return queryInterface.dropTable('student');
      }
    };  