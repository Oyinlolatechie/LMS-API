var express = require('express');
const { homeController } = require('../controller/indexController');
var router = express.Router();


/* GET home page. */
router.get('/', homeController)

module.exports = router;
