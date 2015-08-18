/* GET home page. */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var vm = {
    title: 'Home Page'
  };
  res.render('index', vm);
});

router.get('/login', function(req, res, next) {
	var vm = {
    title: 'Login Page'
  };
  res.render('login', vm);
});

module.exports = router;




/*exports.index = function(req, res){
  res.render('index', { title: 'Express' });
 
  console.log('this is atest');
  };

exports.submit = function(req, res){
	console.log("sumit");
    console.log(req.body.username);
    console.log(req.body.password);
    res.render('Response', { title: req.body.username });
 
}*/