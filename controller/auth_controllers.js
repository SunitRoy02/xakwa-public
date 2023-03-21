const { validationResult } = require('express-validator');
const users = require('../models/users');
const user = require('../models/users')



module.exports = {
    loginFun: async (req, res) => {
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array()[0] });
            }

            const find = await user.find({ email: req.body.email , password : req.body.password})

            if (find.length === 0 ) {
                const msfIferror = "User Not Found";
                res.status(400).send({ success: false, msg: msfIferror, });
            } else {
                const msfIfSuccess = "Login Successfully";
                res.status(200).send({ success: true, msg: msfIfSuccess, data: find[0] });
            }

        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });

        }
    },

    registerFun: async (req, res) => {
        

        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array() });
            }

            const find = await user.find({ email: req.body.email })
            console.log("Find IN Register >>> ", find);
            if (find.length === 0) {

                let data = new users(req.body);
                let result = await data.save();
                console.log(result);

                const msfIfSuccess = "Register Successfully";
                res.status(200).send({ success: true, msg: msfIfSuccess, data: result });
               
            } else {
                const msfIferror = "User Already Exixts";
                res.status(200).send({ success: false, msg: msfIferror });
            }
        } catch (error) {
            console.log("Error : ", error);
            res.status(200).send({ success: false, msg: error.message });

        }


    },


    forgotPassFun: async (req, res) => {

        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array()[0] });
            }

            const find = await user.find({ email: req.body.email })
            console.log("Find IN forgotPassFun >>> ", find);
            if (find.length === 0) {

                const msfIferror = "User not found";
                res.status(400).send({ success: false, msg: msfIferror });

            } else {
                //send otp work here 
                const message = "Otp send successfully";
                res.status(200).send({ success: true, msg: message });

            }
        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });

        }



    },


    verifyOtpFun: async (req, res) => {
       
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array()[0] });
            }

            // if (req.body.otp != '123456') {
            //     const msfIferror = "Inavalid Otp";
            //     res.status(200).send({ success: false, msg: msfIferror });

            // } else {
            //     //send otp work here 
            //     const message = "Otp send successfully";
            //     res.status(200).send({ success: true, msg: message });

            // }
        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });

        }

    },

    changePasswordFun: async (req, res) => {
       

        
    },
}


