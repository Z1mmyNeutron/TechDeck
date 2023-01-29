var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log("test", req.body);
  const username = req.body.username;
  const password = req.body.password;
  res.json({username : username.toUpperCase(), password : password.toUpperCase()})
  
});
module.exports = router;
