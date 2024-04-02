import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './Login.css';
import './util1.css';
import logo from './images/logo.png';
import { message } from "antd";

const Login = () => {
	const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                message.success("User Logged In Successfully");
                // Redirect to Home page or perform any other action on successful login
				navigate("/Home")
                console.log(data.message);
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again later');
        }
    };

    return (
        <div className="b">
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-85 p-b-20">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-37">
                                Sign In
                            </span>

                            <span className="login100-form-avatar">
                                <img src={logo} alt=""/>
                            </span>

                            <div className="wrap-input100 validate-input m-t-50 m-b-35" data-validate="Enter Email">
                                <input className="input100 input1" type="text" name="email" placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <span className="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                <input className="input100 input1" type="password" name="pass" placeholder=" password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <span className="focus-input100" data-placeholder="Password"></span>
                            </div>

                            {error && <div className="error">{error}</div>}

                            <div className="container-login100-form-btn5">
                                <button className="login100-form-btn5 input1" type="submit" onClick={handleLogin}>LOGIN</button>
                            </div>
                            <br></br>

                            <ul className="login-more p-t-190">
                                <li>
                                    <span className="txt1">
                                        Don’t have an account? 
                                    </span>
                                    <a href="/Registration" rel="" className="txt2">
                                        Sign up
                                    </a>
                                </li>
                            </ul>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
