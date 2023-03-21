const products = require('../models/product');
const { validationResult } = require('express-validator');

module.exports = {

    addProduct: async (req, res) => {

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({ success: false, errors: errors.array()[0] });
            }

            let data = new products(req.body);
            let result = await data.save();
            console.log(result);

            const msfIfSuccess = "Product Added Successfully";
            res.status(200).send({ success: true, msg: msfIfSuccess, data: result });

        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });
        }

    },

    updateProduct: async (req, res) => {


    },

    getSingleProduct: async (req, res) => {

        try {
            var id = req.params.id;
            const query = { _id: id };
            const result = await products.find(query);

            if (result.length > 0) {
                const msg = "Product Found Successfully";
                res.status(200).send({ success: true, msg: msg, data: result[0] });
            } else {
                const msg = "No matched product found ";
                res.status(201).send({ success: true, msg: msg, });
            }
        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });
        }

    },

    getProducts: async (req, res) => {
        try {
            const productsData = await products.find({});
            res.status(200).send({ success: true, data: productsData });
        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });
        }

    },

    deleteProduct: async (req, res) => {

        try {
            var id = req.params.id;
            const query = { _id: id };
            const result = await products.deleteOne(query);
            if (result.deletedCount === 1) {
                const msg = "Product Deleted Successfully";
                res.status(200).send({ success: true, msg: msg, });
            } else {
                const msg = "No matched product found ";
                res.status(201).send({ success: true, msg: msg, });
            }
        } catch (error) {
            console.log("Error : ", error);
            res.status(400).send({ success: false, msg: error.message });
        }

    },

}