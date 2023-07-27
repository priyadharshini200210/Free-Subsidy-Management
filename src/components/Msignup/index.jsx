// // import React from 'react'
// import ReactDOM from 'react-dom'
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import styles from "./styles.module.css";
// import styles from "./styles.module.css";
// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import logo from '../../assets/Logo.png'
// import book from '../../assets/book1st.jpg'
// import shoe from '../../assets/shoe.jpg'
// import note from '../../assets/note.jpg'
// import uniform from '../../assets/uniform.jpg'
// import laptop from '../../assets/laptop.jpeg'
// import booktw from '../../assets/booktw.jpg'
// const Msignup = () => {
//     const [data, setData] = useState({
//         schoolName: "",
//         villageName: "",
//         blockName: "",
//         districtName: "",
//         code: "",
//         total: "",
//         password: "",
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/api/manageusers";
//             const { data: res } = await axios.post(url, data);
//             navigate("/managementlogin");
//             console.log(res.message);
//         }
//         catch (error) {
//             if (
//                 error.response &&
//                 error.response.status >= 400 &&
//                 error.response.status <= 500
//             ) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <>
//             <img src={logo} alt='tnlogo' width="125" heigth="125" className='logo' />
//             <center><h1>FREE SUBSIDIES MANAGEMENT</h1></center>
//             <center><b><p>Government of TamilNadu</p></b></center>
//             <nav className='main-nav'>
//                 <div className='navbar'>
//                     <Link to='/' className='nav-item nav-btn'>Home</Link>
//                     {/* <label><Link to='' className='nav-item nav-btn'>Feedback
//                     <select>
//                         <option value="student"><Link to='/sfeedback'>Student</Link></option>
//                         <option value="school">School Management</option>
//                     </select>
//                 </Link>
//                 </label> */}
//                     <NavLink exact to="/sfeedback" className="nav-item nav-btn">Student Feedback</NavLink>
//                     <NavLink exact to="/mfeedback" className="nav-item nav-btn">Management Feedback</NavLink>
//                     {/* <NavLink exact to="/login" className="nav-item nav-btn">Student Login</NavLink> */}
//                     <NavLink exact to="/Mlogin" className="nav-item nav-btn">Management Login </NavLink>
//                     <NavLink exact to="/Alogin" className="nav-item nav-btn">Admin Login </NavLink>
//                 </div>
//             </nav>
//             <div className={styles.signup_container}>
//                 <div className={styles.signup_form_container}>
//                     <div className={styles.left}>
//                         <h4>Already have an account?</h4>
//                         <Link to="/Mlogin">
//                             <button type="button" className={styles.white_btn}>
//                                 Sign in
//                             </button>
//                         </Link>
//                     </div>
//                     <div className={styles.right}>
//                         <form className={styles.form_container} onSubmit={handleSubmit}>
//                             <h1>Management Signup</h1>
//                             <input
//                                 type="text"
//                                 placeholder="School Name"
//                                 name="schoolName"
//                                 onChange={handleChange}
//                                 value={data.schoolName}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Village/Town name"
//                                 name="villageName"
//                                 onChange={handleChange}
//                                 value={data.villageName}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Block Namess"
//                                 name="blockName"
//                                 onChange={handleChange}
//                                 value={data.blockName}
//                                 required
//                                 className={styles.input}
//                             />

//                             <input
//                                 type="text"
//                                 placeholder="District Name"
//                                 name="districtName"
//                                 onChange={handleChange}
//                                 value={data.districtName}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type="number"
//                                 placeholder="UDISE CODE"
//                                 name="code"
//                                 onChange={handleChange}
//                                 value={data.code}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type="number"
//                                 placeholder="Total No of students"
//                                 name="total"
//                                 onChange={handleChange}
//                                 value={data.total}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type=" password"
//                                 placeholder="SetUp Password"
//                                 name="password"
//                                 onChange={handleChange}
//                                 value={data.password}
//                                 required
//                                 className={styles.input}
//                             />
//                             {error && <div className={styles.error_msg}>{error}</div>}
//                             <button type="submit" className={styles.green_btn} onSubmit={handleSubmit}>
//                                 Sign Up
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Msignup;

// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";
// // import styles from "./styles.module.css";
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import logo from '../../assets/Logo.png'
// import book from '../../assets/book1st.jpg'
// import shoe from '../../assets/shoe.jpg'
// import note from '../../assets/note.jpg'
// import uniform from '../../assets/uniform.jpg'
// import laptop from '../../assets/laptop.jpeg'
// import booktw from '../../assets/booktw.jpg'

// const Msignup = () => {
//     const [data, setData] = useState({
//         email: "",
//         code: "",
//         typeofschl:"",
//         District:"",
//         password: ""
        
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/api/manageusers";
//             const { data: res } = await axios.post(url, data);
//             navigate("/Mlogin");
//             console.log(res.message);
//         } catch (error) {
//             if (
//                 error.response &&
//                 error.response.status >= 400 &&
//                 error.response.status <= 500
//             ) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <>
//         <img src={logo} alt='tnlogo' width="125" heigth="125" className='logo' />
//         <center><h1>FREE SUBSIDIES MANAGEMENT</h1></center>
//         <center><b><p>Government of TamilNadu</p></b></center>
//         <nav className='main-nav'>
//             <div className='navbar'>
//                 <Link to='/' className='nav-item nav-btn'>Home</Link>
//                 {/* <label><Link to='' className='nav-item nav-btn'>Feedback
//                     <select>
//                         <option value="student"><Link to='/sfeedback'>Student</Link></option>
//                         <option value="school">School Management</option>
//                     </select>
//                 </Link>
//                 </label> */}
//                 <NavLink exact to="/sfeedback" className="nav-item nav-btn">Student Feedback</NavLink>
//                 <NavLink exact to="/mfeedback" className="nav-item nav-btn">Management Feedback</NavLink>
//                 {/* <NavLink exact to="/login" className="nav-item nav-btn">Student Login</NavLink> */}
//                 <NavLink exact to="/Mlogin" className="nav-item nav-btn">Management Login </NavLink>
//                 <NavLink exact to="/Alogin" className="nav-item nav-btn">Admin Login </NavLink>
//             </div>
//         </nav>
//             <div className={styles.signup_container}>
//                 <div className={styles.signup_form_container}>
//                     <div className={styles.left}>
//                         <h3>Already have an account?</h3>
//                         <Link to="/Mlogin">
//                             <button type="button" className={styles.white_btn}>
//                                 Sign in
//                             </button>
//                         </Link>
//                     </div>
//                     <div className={styles.right}>
//                         <form className={styles.form_container} onSubmit={handleSubmit}>
//                             <h1>Management Signup</h1>
//                             {/* <input
//                                 type="text"
//                                 placeholder=" Name"
//                                 name="Name"
//                                 onChange={handleChange}
//                                 value={data.Name}
//                                 required
//                                 className={styles.input}
//                             /> */}
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 name="email"
//                                 onChange={handleChange}
//                                 value={data.email}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type="number"
//                                 placeholder="UDISE CODE"
//                                 name="code"
//                                 onChange={handleChange}
//                                 value={data.code}
//                                 required
//                                 className={styles.input}
//                             />
//                              <input
//                                 type="text"
//                                 placeholder="Government/Government-aided"
//                                 name="typeofschl"
//                                 onChange={handleChange}
//                                 value={data.typeofschl}
//                                 required
//                                 className={styles.input}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="District"
//                                 name="District"
//                                 onChange={handleChange}
//                                 value={data.District}
//                                 required
//                                 className={styles.input}
//                             />
//                               <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 onChange={handleChange}
//                                 value={data.password}
//                                 required
//                                 className={styles.input}
//                             />
//                             {error && <div className={styles.error_msg}>{error}</div>}
//                             {/* <Link to="/Alogin"> */}
//                                 <button type="submit" className={styles.green_btn} onSubmit={handleSubmit}>
//                                 Sign Up
//                             </button>
//                             {/* </Link> */}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Msignup;
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
// import styles from "./styles.module.css";
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import book from '../../assets/book1st.jpg'
import shoe from '../../assets/shoe.jpg'
import note from '../../assets/note.jpg'
import uniform from '../../assets/uniform.jpg'
import laptop from '../../assets/laptop.jpeg'
import booktw from '../../assets/booktw.jpg'

const Msignup = () => {
    const [data, setData] = useState({
        Name: "",
        email: "",
        password: "",
        District: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/manageusers";
            const { data: res } = await axios.post(url, data);
            navigate("/Mlogin");
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
        <>
        <img src={logo} alt='tnlogo' width="125" heigth="125" className='logo' />
        <center><h1>FREE SUBSIDIES MANAGEMENT</h1></center>
        <center><b><p>Government of TamilNadu</p></b></center>
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-btn'>Home</Link>
                {/* <label><Link to='' className='nav-item nav-btn'>Feedback
                    <select>
                        <option value="student"><Link to='/sfeedback'>Student</Link></option>
                        <option value="school">School Management</option>
                    </select>
                </Link>
                </label> */}
                <NavLink exact to="/sfeedback" className="nav-item nav-btn">Student Feedback</NavLink>
                <NavLink exact to="/mfeedback" className="nav-item nav-btn">Management Feedback</NavLink>
                {/* <NavLink exact to="/login" className="nav-item nav-btn">Student Login</NavLink> */}
                <NavLink exact to="/Mlogin" className="nav-item nav-btn">Management Login </NavLink>
                <NavLink exact to="/Alogin" className="nav-item nav-btn">Admin Login </NavLink>
            </div>
        </nav>
            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                        <h3>Already have an account?</h3>
                        <Link to="/Mlogin">
                            <button type="button" className={styles.white_btn}>
                                Sign in
                            </button>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={handleSubmit}>
                            <h1>Management Signup</h1>
                            <input
                                type="text"
                                placeholder=" Name"
                                name="Name"
                                onChange={handleChange}
                                value={data.Name}
                                required
                                className={styles.input}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="District"
                                name="District"
                                onChange={handleChange}
                                value={data.District}
                                required
                                className={styles.input}
                            />
                            {error && <div className={styles.error_msg}>{error}</div>}
                            {/* <Link to="/Alogin"> */}
                                <button type="submit" className={styles.green_btn} onSubmit={handleSubmit}>
                                Sign In
                            </button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Msignup;