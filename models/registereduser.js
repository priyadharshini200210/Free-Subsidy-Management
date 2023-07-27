const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { application } = require("express");
const express = require('express');
const app = express();
const userSchema = new mongoose.Schema({
    registrationNumber: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    dob: { type: String, required: true },
    schoolName: { type: String, required: true },
    standard: { type: Number, required: true },
    residentialAddress: { type: String, required: true },
    pincode: { type: Number, required: true },
});


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const Registereduser = mongoose.model("registereduser", userSchema);

app.get('/api', (req, res) => {
    Registereduser.find({}, function (err, rusers) {
        res.render('index', {
            ruserList: rusers
        })
    })
})
const validate = (data) => {
    const schema = Joi.object({
        registrationNumber: Joi.number().required().label("Registration Number"),
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        phoneNumber: Joi.number().required().label("Phone Number"),
        dob: Joi.string().required().label("Date of birth"),
        schoolName: Joi.string().required().label("School Name"),
        standard: Joi.number().required().label("Standard"),
        residentialAddress: Joi.string().required().label("Residential Address"),
        pincode: Joi.number().required().label("Pincode"),

    });
    return schema.validate(data);
};
// console.log(data);

module.exports = { Registereduser, validate };