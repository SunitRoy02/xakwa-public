const { check } = require('express-validator');


exports.loginValidation = [

    check("email").notEmpty().withMessage('Email is required'),
    check("email").isEmail().withMessage("Please enter valid email address"),
    check("password").notEmpty().withMessage('Password is required'),
    check("password").isLength({min:6}).withMessage('Password length must be 6 character long '),
]


exports.registerValidation = [

    check("name").notEmpty().withMessage('Name is required'),
    check("userName").notEmpty().withMessage('Username is required'),
    check("email").notEmpty().withMessage('Email is required'),
    check("email").isEmail().withMessage("Please enter valid email address"),
    check("password").notEmpty().withMessage('Password is required'),
    check("password").isLength({min:8}).withMessage('Password length must be 6 character long '),
    check("countryCode").notEmpty().withMessage('CountryCode is reqiored'),
    check("mobile").isLength({min:10}).withMessage('Phone number must be 10 digit long'),
]

exports.forgotPassValidation = [

    check("email").notEmpty().withMessage('Email is required'),
    check("email").isEmail().withMessage("Please enter valid email address"),

]

exports.verifyOtpValidation  = [

    check("otp").notEmpty().withMessage('Otp is required'),
    check("otp").isLength({min:6}).withMessage('Otp must be 6 digit long'),

]


