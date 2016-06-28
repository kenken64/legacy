'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    employeeCode: String,
    department: String,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        postalCode: String
    },
    phone: String,
    nationality: String,
    age: Number,
    dateCreated: {type: Number, default: +new Date()},
    lastUpdated: {type: Number, default: +new Date()},
    active: Boolean
});

module.exports = mongoose.model('User', UserSchema);