/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_eventstate', {
    E_Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ProcessUser: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ConfirmState: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProcessState: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FeedbackState: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ResultState: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_eventstate'
  });
};
