var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/error', function(req, res) {
  res.render('error');
});

module.exports = router;
