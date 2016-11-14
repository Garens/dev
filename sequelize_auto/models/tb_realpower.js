/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_realpower', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RealTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ua: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Ub: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Uc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Uab: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Uac: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Ubc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Ia: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Ib: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Ic: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HZ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    S: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    P: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Q: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    YGDD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WGDD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Cos: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_realpower'
  });
};
