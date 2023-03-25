const { validationResult } = require('express-validator');
const user = require('../models/users')
const trainerReq = require('../models/trainer')



module.exports = {
    loginFun: async (req, res) => {
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array()[0] });
            }

            const find = await user.find({ email: req.body.email, password: req.body.password })

            if (find.length === 0) {
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

    loginWithOtp: async (req, res) => {


        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array() });
            }

            const msfIfSuccess = "Otp Sent Successfully";
            res.status(200).send({ success: true, msg: msfIfSuccess, });


        } catch (error) {
            console.log("Error : ", error);
            res.status(200).send({ success: false, msg: error.message });

        }

    },

    loginWithEmail: async (req, res) => {


        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array() });
            }

            const find = await user.find({ email: req.body.email })
            console.log("Find IN Register >>> ", find);
            if (find.length === 0) {
                const msfIferror = "User Not Exixts";
                res.status(200).send({ success: false, msg: msfIferror });

            } else {
                const msfIfSuccess = "Login Successfully";
                res.status(200).send({ success: true, msg: msfIfSuccess, data: find[0] });
            }
        } catch (error) {
            console.log("Error : ", error);
            res.status(200).send({ success: false, msg: error.message });

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

                let data = new user(req.body);
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

    verifyOtpFun: async (req, res) => {

        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array() });
            }

            var obj = req.body;

            if (obj.otp != '123456') {
                const msfIferror = "Inavalid Otp";
                res.status(200).send({ success: false, msg: msfIferror });

            }
            else if (obj.tag === 'login') {
                const find = await user.find({ mobile: req.body.mobile })
                console.log("Find IN Register >>> ", find);
                if (find.length === 0) {
                    const msfIferror = "User Not Exixts";
                    res.status(200).send({ success: false, msg: msfIferror });

                } else {
                    const msfIfSuccess = "Login Successfully";
                    res.status(200).send({ success: true, msg: msfIfSuccess, data: find[0] });
                }
            }else {
                 const msfIfSuccess = "Otp Verified Successfully";
                    res.status(200).send({ success: true, msg: msfIfSuccess, data: find[0] });
            }
            
        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });

        }

    },

    verifyTrainer : async (req,res) => {


        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array() });
            }
 
            const find = await trainerReq.find({ identityNumber: req.body.identityNumber })
            console.log("Find IN Register >>> ", find);
            if (find.length === 0) {

                let data = new trainerReq(req.body);
                let result = await data.save();
                console.log(result);

                const msfIfSuccess = "Request Submited Successfully";
                res.status(200).send({ success: true, msg: msfIfSuccess, data: result });

            } else {
                const msfIferror = "Request Already Exixts";
                res.status(200).send({ success: false, msg: msfIferror });
            }
        } catch (error) {
            console.log("Error : ", error);
            res.status(200).send({ success: false, msg: error.message });

        }

    }


}


