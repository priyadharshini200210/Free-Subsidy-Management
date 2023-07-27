import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Registration = () => {
	const [data, setData] = useState({
        registrationNumber:"",
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
        dob:"",
        schoolName:"",
        standard:"",
        residentialAddress:"",
        pincode:""

	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/registeredusers";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Registration Form</h1>
                        <input
							type="text"
							placeholder="Registration Number"
							name="registrationNumber"
							onChange={handleChange}
							value={data.registrationNumber}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							className={styles.input}
						/>
                        <input
							type="number"
							placeholder="Phone Number"
							name="phoneNumber"
							onChange={handleChange}
							value={data.phoneNumber}
							required
							className={styles.input}
						/>
                        <input
							type="Date"
							placeholder="Date of birth"
							name="dob"
							onChange={handleChange}
							value={data.dob}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="School Name"
							name="schoolName"
							onChange={handleChange}
							value={data.schoolName}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Standard"
							name="standard"
							onChange={handleChange}
							value={data.standard}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Residential Address"
							name="residentialAddress"
							onChange={handleChange}
							value={data.residentialAddress}
							required
							className={styles.input}
						/>
                        <input
							type="pincode"
							placeholder="Pincode"
							name="pincode"
							onChange={handleChange}
							value={data.pincode}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{/* <Link to='/'> */}
						<button type="submit" className={styles.green_btn}>
							Register
						</button>
						{/* </Link> */}
						
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;
