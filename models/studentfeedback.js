const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    registrationNumber:{ type: Number, required: true },
	firstName: { type: String, required: true },
    lastName: { type: String, required: true },
	email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    // dob:{ type: String, required: true },
    schoolName:{ type: String, required: true },
	standard:{ type: Number, required: true },
    // residentialAddress:{ type: String, required: true },
    // pincode:{ type: Number, required: true },
    subsidies:{ type: String, required: true },
    issues:{ type: String, required: true },
    other:{ type: String, required: true }
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",});
	return token;
};

const Studentfeedbacks= mongoose.model("studentfeedbacks", userSchema);

const validate = (data) => {
	const schema = Joi.object({
        registrationNumber: Joi.number().required().label("Registration Number"),
		firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        phoneNumber: Joi.number().required().label("Phone Number"),
        // dob: Joi.string().required().label("Date of birth"),
        schoolName: Joi.string().required().label("School Name"),
        standard: Joi.number().required().label("Standard"),
        // residentialAddress: Joi.string().required().label("Residential Address"),
        // pincode: Joi.number().required().label("Pincode"),
        subsidies:Joi.string().required().label("Have you received free subsidies provided by government?"),
        issues:Joi.string().required().label("is there any damage in free subsidies provided by government?"),
        other:Joi.string().required().label("Do you have any other issues?"),
	});
	return schema.validate(data);
};

module.exports = {Studentfeedbacks, validate };