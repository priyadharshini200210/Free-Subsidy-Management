import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import book from '../../assets/book1st.jpg'
import shoe from '../../assets/shoe.jpg'
import note from '../../assets/note.jpg'
import uniform from '../../assets/uniform.jpg'
import laptop from '../../assets/laptop.jpeg'
import booktw from '../../assets/booktw.jpg'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import './styles.module.css'
const AdminMain = () => {

    return (
        <>
            <img src={logo} alt='tnlogo' width="125" heigth="125" className='logo' />
            <center><h1>FREE SUBSIDIES MANAGEMENT</h1></center>
            <center><b><p>Government of TamilNadu</p></b></center>
            <nav className='main-nav'>
                <div className='navbar'>
                    <Link to='/home' className='nav-item nav-btn'>Home</Link>
                    {/* <label><Link to='' className='nav-item nav-btn'>Feedback
                        <select>
                            <option value="student"><Link to='/sfeedback'>Student</Link></option>
                            <option value="school">School Management</option>
                        </select>
                    </Link>
                    </label> */}
                    {/* <NavLink exact to="/home" className="links">Home</NavLink> */}
                    <NavLink exact to="/sfeedback" className="nav-item nav-btn">Student Feedback</NavLink>
                    <NavLink exact to="/mfeedback" className="nav-item nav-btn">Management Feedback</NavLink>
                    <NavLink exact to="/login" className="nav-item nav-btn">Student Login</NavLink>
                    <NavLink exact to="/Mlogin" className="nav-item nav-btn">Management Login </NavLink>
                    <NavLink exact to="/Alogin" className="nav-item nav-btn">Admin Login </NavLink>
                    <NavLink exact to="/details" className="nav-item nav-btn">Student Details</NavLink>
                </div>
            </nav>
            <div></div>
            <div className="stand1">
                <div className="stand"><p className="space">Standard 1-5</p>
                    <marquee width="80%" direction="up" height="300px">
                        <div className="images">
                            <div className="img1"><img src={book} alt='book' width="280 px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={note} alt='book' width="280 px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={uniform} alt='book' width="280 px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={shoe} alt='book' width="280 px" height="200" className="img-dec" /></div>
                        </div>
                    </marquee>
                </div>
                <div className="stand"><p className="space">Standard 6-8</p>
                    <marquee width="80%" direction="up" height="300px">
                        <div className="images">
                            <div className="img1"><img src={book} alt='book' width="280px " height="200" className="img-dec" /></div>
                            <div className="img1"><img src={note} alt='book' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={uniform} alt='book' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={shoe} alt='book' width="280px" height="200" className="img-dec" /></div>
                        </div>
                    </marquee>
                </div>
                <div className="stand"><p className="space">Standard 9-10</p>
                    <marquee width="80%" direction="up" height="300px">
                        <div className="images">
                            <div className="img1"><img src={book} alt='book' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={note} alt='book' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={uniform} alt='book' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={shoe} alt='book' width="280px" height="200" className="img-dec" /></div>
                        </div>
                    </marquee>
                </div>
                <div className="stand" style={{ margin: "0px 0px 0px 0px" }}><p className="space">Standard 11-12</p>
                    <marquee width="80%" direction="up" height="300px">
                        <div className="images">
                            <div className="img1"><img src={booktw} alt='book' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={note} alt='note' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={laptop} alt='uniform' width="280px" height="200" className="img-dec" /></div>
                            <div className="img1"><img src={shoe} alt='shoe' width="280px" height="200" className="img-dec" /></div>
                        </div>
                    </marquee>
                </div>
            </div>
        </>
    )
}

export default AdminMain