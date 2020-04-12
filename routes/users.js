var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/buena_onda', function(req, res) {
  res.render('alumnos',{numero:'todos menos el oscar'});
});



module.exports = router;
