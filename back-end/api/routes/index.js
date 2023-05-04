//Christina Zimmer
var express = require('express');
var router = express.Router();
var users = [];

function attempToAddUser(newUser){
  console.log( newUser, "user - ", users)
  for(let user of users){
    if(user.username === newUser.username){
      return false;
    }
  }
  users.push(newUser);

}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
router.post('/login', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  for(let user of users) {
    if(user.username === username && user.password === password) {
      res.json({data: user, error: undefined})
      return;
    }
  }

  res.status(500) //set status 
  res.json({data : undefined, error : "username not found"})
  
});


router.post('/createUser', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age;
  const name = req.body.name;
  const user = {name : name, age : age, username : username, password : password}
  if(attempToAddUser(user)=== false){
    res.status(500) //set status 
    res.json({data : undefined, error : "username taken"})
  }else{
    res.json({data : user, error : undefined})
  }
});

module.exports = router;
