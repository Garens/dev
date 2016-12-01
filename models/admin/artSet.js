
var gmodel = require('../model');

exports.getTypeListPage = function(data,callback) {
  var col = data.order[0].column;
  gmodel.Type.findAndCountAll({
    where:{
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

exports.addArtType = function(data,callback){
  data.id = newGuid();
  console.log(data);
  gmodel.Type.upsert(data).then(function(ret){
    callback(null,ret);
  },function(err){
    callback(err,null);
  })
}

//生成一个唯一标识guid
function newGuid()
{
    var guid = "";
    for (var i = 1; i <= 32; i++){
      var n = Math.floor(Math.random()*16.0).toString(16);
      guid +=   n;
    }
    return guid;
}
