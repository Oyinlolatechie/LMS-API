var express = require('express');
const { signUp, signIn } = require('../controller/userController');
var router = express.Router();

/* GET users listing. */

// create user 
router.post('/', signUp);

//login 
router.post('/:id', signIn)

module.exports = router;
