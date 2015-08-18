/* GET users specific pages. */
var express = require('express');
var router = express.Router();

/* GET home page. */
//showing the user,create a acccount form
router.get('/create', function(req, res, next) {
	var vm = {
    title: 'Create an account'
  };
  res.render('users/createAcc', vm);
});

//To create a user account on submit of create acc form
router.post('/create', function(req, res, next) {
	var vm = {
    	input:req.body
  };
  if (accSuccesfullycreate){
  	//successfully acc creted redirect to new page
  res.redirect('/storeSearch', vm);
}
else {
	//redirect back to same page
	res.render('users/createAcc', vm);
}
});

router.get('/reset', function(req, res, next) {
	var vm = {};
	  res.render('users/resetPwd', vm);
});

module.exports = router;