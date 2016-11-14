
var DataTypes = require('sequelize');
var user = require('./models/user');

var sequelize = require('./config');




user.create({
    name: '手册11',
    age: 18
  });

user.findAll().then(
    function(result){
      console.log(JSON.stringify(result));
    }
  )

//user.save()
// var test = user.create({
//   name: 'janedoe',
//   age: 16
// });
//
// console.log(test);


// sequelize.sync().then(function() {                                  //保存数据
//   return user.create({
//     name: '手册11',
//     age: 16
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });
