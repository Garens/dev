/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tv_wallmode', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RowNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ColNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DeptId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'tv_wallmode'
  });
};
