const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: String,
    email: String,
    mobile: String,
    countryCode: String,
    password: String,
    userName: String

});

module.exports = mongoose.model('users', userSchema);