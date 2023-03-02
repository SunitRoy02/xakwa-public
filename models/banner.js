const mongoose = require('mongoose');

const bannersSchema = mongoose.Schema({

    imageUrl: {
        type: String,
        trim: true,
    },

});


module.exports = mongoose.model('banners', bannersSchema);