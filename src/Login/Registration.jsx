import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './Login.css';
import './util1.css';
import logo from './images/logo.png';
import { message } from "antd";

const Registration = () => {
    const navigate = useNavigate(); 

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile:"",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = () => {
        const { name, email,mobile, password, reEnterPassword } = user;
        if (name && email && mobile && password && (password === reEnterPassword)) {
            axios.post("http://localhost:5000/register", user)
                .then(res => {
                    console.log(res);
                    message.success("User Created Successfully")
                    // Redirect to '/Home' upon successful registration
                    navigate("/Home");
                })
                .catch(err => {
                    console.error(err);
                    alert("Failed to register user");
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="b">
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-25 ">
                        <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-37">
						        Sign Up
					    	</span>
                            <span className="login100-form-avatar">
    	                        <img src={logo} alt=""/>
						    </span>
                            <div className="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter username">
							    <input className="input100 input1" type="text" name="name" placeholder=" Name" value={user.name} onChange={ handleChange }/>
							    <span className="focus-input100" data-placeholder="Name"></span>
						    </div>
                            <div className="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
							    <input className="input100 input1" type="text" name="email" placeholder=" Email" value={user.email} onChange={ handleChange }/>
							    <span className="focus-input100" data-placeholder="Email"></span>
						    </div>
                            <div className="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Mobile Number">
							    <input className="input100 input1" type="text" name="mobile" placeholder=" Mobile Number" value={user.mobile} onChange={ handleChange }/>
							    <span className="focus-input100" data-placeholder="Mobile Number"></span>
						    </div>

	                        <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
							    <input className="input100 input1" type="password" name="password" placeholder=" Password" value={user.password} onChange={ handleChange }/>
						    	<span className="focus-input100" data-placeholder="Password"></span>
						    </div>
                                    
                	        <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
						    	<input className="input100 input1" type="password" name="reEnterPassword" placeholder=" Re-password" value={user.reEnterPassword}  onChange={ handleChange }/>
					    		<span className="focus-input100" data-placeholder="Conform Password"></span>
					    	</div>
                            <div className="container-login100-form-btn5">
							    <div className="login100-form-btn5 input1" type="submit"onClick={register} value="Login" name="login">Registration</div>
						    </div>
                            <br></br>

                            <ul className="login-more p-t-190">
                                <li>
                                    <span className="txt1">
                                        Don’t have an account? 
                                    </span>
                                    <a href="/" rel="" className="txt2">
                                        Sign in
                                    </a>
                                </li>
                            </ul>   
                            {/* Additional UI elements */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;

