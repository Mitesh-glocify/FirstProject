var express = require('express');
var router = express.Router();
const UserController = require("../service/api/controllers/user/index");
var router = express.Router();
router.post("/users/login", UserController.loginUser);
module.exports = router;
