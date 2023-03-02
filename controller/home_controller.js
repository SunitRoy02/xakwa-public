const { validationResult } = require('express-validator');
const banners = require('../models/banner');

module.exports = {

    bannersFun: async (req, res) => {
        // const axios = require('axios');

        // axios.get('https://picsum.photos/v2/list?page=1&limit=5')
        //     .then((response) => {
        //         // Do something with the response data
        //         console.log(response.data);
        //         res.status(200).send({ success: true, data: response.data});
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         res.status(400).send({ success: false, msg: error });
        //     });


        const bannrsData = await banners.find({});
        res.status(200).send({ success: true, data: bannrsData });



    },

    addBanner: async (req, res) => {

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array()[0] });
            }

            let data = new banners(req.body);
            let result = await data.save();
            console.log(result);

            const msfIfSuccess = "Banner Added Successfully";
            res.status(200).send({ success: true, msg: msfIfSuccess, data: result });

        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });
        }


    },

}