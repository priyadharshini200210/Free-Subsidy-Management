import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Studentfeedback = () => {
    const [data, setData] = useState({
        registrationNumber: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        // dob:"",
        schoolName: "",
        standard: "",
        subsidies: "",
        issues: "",
        other: ""

    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/studentfeedback";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
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
                <div className={styles.left}>
                    {/* <h2>"Feedback is the breakfast of champions"</h2> */}
                    {/* <Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link> */}
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Student Feedback Form</h1>
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
                            type="phone number"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={data.phoneNumber}
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
                            placeholder="Have you received free subsidies provided by government?"
                            name="subsidies"
                            onChange={handleChange}
                            value={data.subsidies}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="is there any damage in free subsidies provided by government?"
                            name="issue"
                            onChange={handleChange}
                            value={data.issue}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Do you have any other issues?"
                            name="other"
                            onChange={handleChange}
                            value={data.other}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}

                        <button type="submit" className={styles.green_btn}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Studentfeedback;
