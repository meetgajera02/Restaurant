import React, { useState } from "react";
import './Contact.css';
import '../Header/Header.css';
import Footer from "../footer/footer";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import { message } from "antd";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
                message.success("Form Submit Successfully")
                // Clear form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again later');
        }
    };
    return(
        <>
            <header  className="top-navbar">
    		    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
	    		    <div  className="header__left">
		    		    <a  className="navbar-brand img-margin" href="home.php">
			    		    <img src={logo} alt="" height="97px"  classNameName="border-radius: 50%" />
				        </a>
				        <div  className="header__right " id="navbars-rs-food">
    					    <ul  className="navbar-nav header__lists ml-auto">
		    				    <li  className="nav-item"><a  className="nav-link" href="/Home">Home</a></li>

			    			    <li  className="nav-item"><a  className="nav-link" href="/Menu">Menu</a></li>

    			    			<li  className="nav-item"><a  className="nav-link" href="/Reservation">Reservation</a></li>

		        				<li  className="nav-item"><a  className="nav-link" href="/About">About</a></li>

		    	    			<li  className="nav-item active"><a  className="nav-link" href="/Contact">Contact</a></li>

			    	    		<li  className="nav-item"><a  className="nav-link" href="/Feedback">Feedback</a></li>

		    			    	<div  className="dropdown">
                                    <li  className="nav-item"><a  className="nav-link" href="/Profile"><FaUser /></a></li>
				    			    <div  className="dropdown-content">
                                        <a  className="nav-link" href="/Edit_profile">Edit Profile</a>
						    		    <a href="/">Logout</a>
							        </div>
					    	    </div>
				    	    </ul>
			    	    </div>  
		    	    </div>
	    	    </nav>
    	    </header>

            <div  className="all-page-title page-breadcrumb">
		        <div  className="container text-center">
			        <div  className="row">
			    	    <div  className="col-lg-12">
			    	    	<h1>CONTACT US</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

            <div  className="contact mt-125">
                <div  className="container">
                    <div  className="heading-title text-center">
				        <center>
                    	    <i><h2>Get In Touch For Any Query</h2></i>
					    </center>
					    <br></br>
					    <br></br>
                    </div>
                    
                    <table>
                        <tr>
                            <div  className="col-12">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.3518179048015!2d70.9802598836549!3d22.137870981570863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39584f264395b7f9%3A0x630a6882b43f93f8!2sShree%20Swaminarayan%20Mandir%20-%20Sardhardham!5e0!3m2!1sen!2sin!4v1712171783215!5m2!1sen!2sin" height={400} width={500}  className="contact-map" allowfullscreen="" loading="lazy" title="iframe" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <td>
                                {error && <div className="error">{error}</div>}
                                <form id = "basic-form" action="" method="post" onSubmit={handleSubmit}> 
                                    <div  className="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter Name">
						                <input  className="input1000" type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required="required"/>
					                </div>

                                    <div  className="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter Your Email">
						                <input  className="input1000" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required="required"/>
					                </div>

                                    <div  className="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter subject">
						                <input  className="input1000" type="text" placeholder="Your Subject" name="subject" value={formData.subject} onChange={handleChange} required="required"/>
					                </div>

                                    <div  className="wrap-input1000 validate-input m-t-50 m-b-35" data-validate = "Enter message">
						                <textarea  className="input1000" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required="required"/>
					                </div>

                                    <div>
                                        <center><button  className="btn2" type="submit" name="save">Send Message</button></center>
                                    </div>
                                </form>
                            </td>
                        </tr>
                    </table>    
                </div>
            </div>
        
            <Footer/>
        </>
    )
}

export default Contact;