const { check } = require('express-validator');

exports.registerValidation = [
    check('firstname', 'Your first name is required').not().isEmpty(),
    check('lastname', 'Your last name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
] 

exports.loginvalidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

