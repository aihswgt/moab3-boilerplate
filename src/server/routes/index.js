var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  if(req.params.id !== undefined) next('route')
  else next()
}, function test(req, res, next) {
  console.log('This is the next function');
  res.render('index', {title: 'Express without ID'});
});

// GET home page without parameters
router.get('/', function(req, res, next) {
  console.log('ID found!')
  res.render('index', {title: 'Express with ID: ' + req.params.id})
})



module.exports = router;
