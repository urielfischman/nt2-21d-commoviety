'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type : Sequelize.DataTypes.STRING(300),

        allowNull: false
      },

      description: {
        type : Sequelize.DataTypes.STRING(1000),

        allowNull: false
      },

      image: {
        type : Sequelize.DataTypes.STRING(300),
        allowNull: false
      },
      
      createdAt: {
        type: Sequelize.DataTypes.DATE,

        defaultValue: Sequelize.DataTypes.NOW
      },

      updatedAt: {
        type: Sequelize.DataTypes.DATE,

        defaultValue: Sequelize.DataTypes.NOW
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};