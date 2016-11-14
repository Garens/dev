/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_camera', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    C_StreamType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_IsEncode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    C_PtzDriver: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_Manufacture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_StrId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_StoId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_StoPath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    C_IsStore: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    C_StoreDays: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    C_TvIndex: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tb_camera'
  });
};
