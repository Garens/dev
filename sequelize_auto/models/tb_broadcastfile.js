/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_broadcastfile', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    FileName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FileIndex: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UploadTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FileDesc: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_broadcastfile'
  });
};
