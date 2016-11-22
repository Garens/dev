/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_nav', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    newtab: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    hide: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    sort: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    isdefault: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 't_nav'
  });
};
