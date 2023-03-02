
const authController = require('../controller/auth_controllers')
const homeController = require('../controller/home_controller')
const router = require('express').Router();

//Validation Imports 
const {loginValidation ,registerValidation, forgotPassValidation } = require('../validation/user_validation');
const { addBannerValidation } = require('../validation/banner_validation');

//Auth --------
router.post('/login' , loginValidation , authController.loginFun)
router.post('/register' , registerValidation , authController.registerFun)
router.post('/forgotPassword',forgotPassValidation,authController.forgotPassFun)
// router.post('/verifyOtp',authController.verifyOtpFun)
// router.patch('/changePassword',authController.changePasswordFun)


//Home Screen --------
router.post('/addBanner',addBannerValidation,homeController.addBanner)
router.post('/deleteBanner',addBannerValidation,homeController.addBanner)
router.get('/banners',homeController.bannersFun)


 


module.exports = router
