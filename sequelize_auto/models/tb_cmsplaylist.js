/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_cmsplaylist', {
    DeviceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InStyle: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Delay: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Speed: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FontColor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FontName: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FontSize: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TextX: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TextY: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BmpNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BmpX: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BmpY: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Sender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SendTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_cmsplaylist'
  });
};
