/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require("../api/user/user.model");
var mode = "UPDATE";
var bootstrap = function () {
    if (mode = "CREATE") {
        dropDatabase();
    }
    checkAndAddUsers();
};

var checkAndAddUsers = function () {
    User.count(function (err, count) {
        if (err) {
            return console.log(err);
        }
        if (!count) {
            console.log("Adding Users");
            addUsers();
        } else {
            console.log("Users already bootstraped.");
        }
    });
};

var addUsers = function () {
    User.create({
        firstName: "Nikhil",
        lastName: "Bhandari",
        employeeCode: "SU00001",
        phone: "9953242114",
        department: "IT",
        address: {
            line1: "C - 74",
            line2: "Sector 20",
            city: "Noida",
            state: "UP",
            postalCode: "201301"
        },
        nationality: "Indian",
        age: 26,
        active: true
    });
};

var dropDatabase = function () {
    console.log("Dropping Database.")
};

bootstrap();