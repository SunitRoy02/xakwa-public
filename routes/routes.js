
const authController = require('../controller/auth_controllers')
const router = require('express').Router();

//Validation Imports 
const {loginWithEmailValidation, loginWithOtp ,registerValidation, verifyOtpValidation } = require('../validation/user_validation');

//Auth --------
router.post('/loginWithOtp' , loginWithOtp , authController.loginWithOtp);
router.post('/loginWithEmail' , loginWithEmailValidation , authController.loginWithEmail);
router.post('/register' , registerValidation , authController.registerFun);
router.post('/verifyOtp',verifyOtpValidation, authController.verifyOtpFun);



 


module.exports = router
