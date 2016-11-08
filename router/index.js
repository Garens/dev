var express = require('express'),
    router = express.Router();


router.get('/', function(req, res) {
  res.render('desktop',{
    title:'test',
    copyright:'网站 v1.0  © 2016 守护者 昆ICP证88888888号'
  });
});

module.exports = router;
