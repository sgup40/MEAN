/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
 
  console.log('this is atest');
  };

exports.submit = function(req, res){
	console.log("sumit");
    console.log(req.body.username);
    console.log(req.body.password);
    res.render('Response', { title: req.body.username });
 
}