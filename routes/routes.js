
const authController = require('../controller/auth_controllers')
const homeController = require('../controller/home_controller')
const productController = require('../controller/products_controller')
const router = require('express').Router();

//Validation Imports 
const {loginValidation ,registerValidation, verifyOtpValidation } = require('../validation/user_validation');
const { addBannerValidation } = require('../validation/banner_validation'); 
const { productValidation } = require('../validation/product_validation'); 

//Auth --------
router.post('/loginWith' , loginValidation , authController.loginFun)
router.post('/register' , registerValidation , authController.registerFun)
// router.post('/forgotPassword',forgotPassValidation,authController.forgotPassFun)
router.post('/verifyOtp',verifyOtpValidation, authController.verifyOtpFun)
// router.patch('/changePassword',authController.changePasswordFun)


//Banner Screen --------
router.post('/addBanner',addBannerValidation,homeController.addBanner)
router.delete('/deleteBanner/:id',homeController.deleteBanner)
router.get('/banners',homeController.bannersFun)


 


module.exports = router
