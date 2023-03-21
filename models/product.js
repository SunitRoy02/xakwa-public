const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name : String ,
    category : String ,
    image : String ,
    price : String ,
    discription : String ,
    rating : String ,


});

module.exports = mongoose.model('products', productSchema);