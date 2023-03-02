const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please send name "],
        trim: true,
    },
    email: String,
    mobile: String,
    password: String,
    fcmToken: String

});

module.exports = mongoose.model('users', userSchema);