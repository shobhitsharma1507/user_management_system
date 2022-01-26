const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    gender: String,
    status: String
})

const UserDB = mongoose.model('USER_MANAGEMENT_SYSTEM', schema);

module.exports = UserDB;