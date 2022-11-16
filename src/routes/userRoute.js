const express = require('express'); 
const {registerValidation} = require("../utils/validator")
const {createNewUser} = require("../controllers/userController")

const router = express.Router();


router.post('/register', registerValidation, createNewUser)

module.exports = router;