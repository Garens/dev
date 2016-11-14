var Sequelize = require('sequelize');
var sequelize = new Sequelize('db_tunnel', 'root', 'root',
      {host : '127.0.0.1', port : '3306', dialect : 'mysql',
      define: {
        timestamps: false
      }});

module.exports = sequelize;
