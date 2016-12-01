
var gmodel = require('../model');

exports.getMenuList = function(data,callback) {
  gmodel.Nav.findAll({
    where:{
      hide:'n'
    },
    order:['sort']
  }).then(function (res){
    callback(null,res);
  },function(err){
    callback(err,null);
  });
}

exports.getMenuListPage = function(data,callback) {
  var col = data.order[0].column;
  gmodel.Nav.findAndCountAll({
    where:{
      hide:'n',
      name:{
        $like:'%'+data.search.value+'%'
      }
    },
    order:['name'],
    offset:parseInt(data.start),
    limit:parseInt(data.length)
  }).then(function (res){
    callback(null,res);
  },function(err){
    callback(err,null);
  });
}
