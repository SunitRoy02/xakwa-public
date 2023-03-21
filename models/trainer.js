const mongoose = require('mongoose');

const trainerSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    address: String,
    dob: String,
    identityNumber: String,


});

module.exports = mongoose.model('trainerReq', trainerSchema);