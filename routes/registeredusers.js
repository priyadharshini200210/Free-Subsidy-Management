const router = require("express").Router();
const { Registereduser, validate } = require("../models/registereduser");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
		//onst { error } = validate(req.body);
		console.log(req.body);
		const {registrationNumber,firstName,lastName,email,phoneNumber,dob,schoolName,standard, residentialAddress,pincode}=req.body;

		studet = await Registereduser.create({
			registrationNumber: registrationNumber,
			firstName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber:phoneNumber,
			dob:dob,
			schoolName:schoolName,
			standard:standard,
			residentialAddress:residentialAddress,
			pincode:pincode
		});
		const ruserdata = await Registereduser.find();
        console.log(ruserdata);
		res.send(ruserdata);
	/*	if (error)
			return res.status(400).send({ message: error.details[0].message });

	const user = await Registereduser.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	// 	const hashPassword = await bcrypt.hash(req.body.password, salt);

	await new Registereduser({ ...req.body}).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}*/
	
});

module.exports = router;