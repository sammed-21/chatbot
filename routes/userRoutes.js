const express = require('express')
// const User = require('../models/User');
const router = express.Router()
const UserController = require("../controllers/UserController")
// const router = express.Router()
 
router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
  
module.exports = router;