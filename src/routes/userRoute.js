const express = require('express'); 
const {registerValidation, loginValidation} = require("../utils/validator")
const {createNewUser, loginUser} = require("../controllers/userController")

const router = express.Router();


router.post('/register', registerValidation, createNewUser)
router.post('/login', loginValidation, loginUser)

module.exports = router;