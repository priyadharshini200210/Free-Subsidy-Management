const router = require("express").Router();
const {Studentfeedbacks , validate } = require("../models/studentfeedback");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
		//onst { error } = validate(req.body);
		console.log(req.body);
		const {registrationNumber,firstName,lastName,email,phoneNumber,schoolName,standard,subsidies,issues,other}=req.body;

		studet = await Studentfeedbacks.create({
			registrationNumber: registrationNumber,
			firstName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber:phoneNumber,
			schoolName:schoolName,
			standard:standard,
			subsidies:subsidies,
			issues:issues,
			other:other
			
		});
	
});

module.exports = router;