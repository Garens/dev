
var Sequelize = require('sequelize');
var sequelize = require('./conn');

var t_user = require('./sequelize_models/t_user');
var t_nav = require('./sequelize_models/t_nav');


var t_type = require('./sequelize_models/t_type');
var t_article = require('./sequelize_models/t_article');

var User = t_user(sequelize,Sequelize);
var Nav = t_nav(sequelize,Sequelize);

var Type = t_type(sequelize,Sequelize);
var Article = t_article(sequelize,Sequelize);

exports.User = User;
exports.Nav = Nav;

exports.Type = Type;
exports.Article = Article;
