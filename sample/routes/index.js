/* GET home page. */
/*exports.index = function(req, res){
  res.render('index', { title: 'Express asdfsd' });
};*/

router.post('/login', function (req, res) {
	console.log("sumit");
    console.log(req.body.title);
    console.log(req.body.description);
    res.send('Post page');
});