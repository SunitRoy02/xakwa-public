const { check } = require('express-validator');


exports.loginWithEmailValidation = [

    check("email").notEmpty().withMessage('Email is required'),
    check("email").isEmail().withMessage("Please enter valid email address"),
    check("password").notEmpty().withMessage('Password is required'),
    check("password").isLength({min:8}).withMessage('Password length must be 8 character long '),
]

exports.loginWithOtp = [
    check("countryCode").notEmpty().withMessage('CountryCode is reqiored'),
    check("mobile").isLength({min:10}).withMessage('Phone number must be 10 digit long'),
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
    check("tag").notEmpty().withMessage('Tag is required'),
    check("otp").isLength({min:6}).withMessage('Otp must be 6 digit long'),
    check("mobile").isLength({min:10}).withMessage('Phone number must be 10 digit long'),

]

exports.trainerVarificationValidation = [

    check("firstName").notEmpty().withMessage('First Name is required'),
    check("lastName").notEmpty().withMessage('Last Name is required'),
    check("address").notEmpty().withMessage('Address is required'),
    check("dob").notEmpty().withMessage('Date of Birth is required'),
    check("identityNumber").notEmpty().withMessage('Identity number is reqiored'),
    check("identityNumber").isLength({min:9}).withMessage('Identity number must be 9 digit long'),
]
