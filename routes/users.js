var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env;
const usersHandle = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');


/* GET users listing. */
router.post('/register', usersHandle.register);
router.post('/login', usersHandle.login);
router.put('/', verifyToken, usersHandle.update);
router.get('/', verifyToken, usersHandle.getUser);
router.post('/logout', verifyToken, usersHandle.logout);  

module.exports = router;
