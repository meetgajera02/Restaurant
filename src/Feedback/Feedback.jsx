import React, { useState } from "react";
import './Feedback.css';
import '../Header/Header.css';
import ReactStars from "react-rating-stars-component";
import Footer from "../footer/footer";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import { message } from "antd";

const ratingChanged = (newRating) => {
	console.log(newRating);
};

const Feedback = () => {
	const [formData, setFormData] = useState({
        name: '',
        email: '',
        waiterComplain: '',
        serviceRating: 0,
        cleanlinessRating: 0,
        suggestion: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
				message.success("Feedback Successfully")
                // Clear form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    waiterComplain: '',
                    serviceRating: 0,
                    cleanlinessRating: 0,
                    suggestion: ''
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
            <header class="top-navbar">
    		    <nav class="navbar navbar-expand-lg navbar-light bg-light">
	    		    <div class="header__left">
		    		    <a class="navbar-brand img-margin" href="home.php">
			    		    <img src={logo} alt="" height="97px" className="border-radius: 50%" />
				        </a>
				        <div class="header__right " id="navbars-rs-food">
    					    <ul class="navbar-nav header__lists ml-auto">
		    				    <li class="nav-item"><a class="nav-link" href="/Home">Home</a></li>

			    			    <li class="nav-item"><a class="nav-link" href="/Menu">Menu</a></li>

    			    			<li class="nav-item"><a class="nav-link" href="/Reservation">Reservation</a></li>

		        				<li class="nav-item"><a class="nav-link" href="/About">About</a></li>

		    	    			<li class="nav-item"><a class="nav-link" href="/Contact">Contact</a></li>

			    	    		<li class="nav-item active"><a class="nav-link" href="/Feedback">Feedback</a></li>

		    			    	<div class="dropdown">
                                    <li class="nav-item"><a class="nav-link" href="/Profile"><FaUser /></a></li>
				    			    <div class="dropdown-content">
                                        <a class="nav-link" href="/Edit_profile">Edit Profile</a>
						    		    <a href="/">Logout</a>
							        </div>
					    	    </div>
				    	    </ul>
			    	    </div>  
		    	    </div>
	    	    </nav>
    	    </header>

            <div class="all-page-title page-breadcrumb">
		        <div class="container text-center">
			        <div class="row">
			    	    <div class="col-lg-12">
			    	    	<h1>FEEDBACK</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

            <br></br>

            <div class="heading-title text-center">
		        <h2> Give's Your Review</h2>
	        </div>

			<div  class="flex-container">
            	<center>  
					{error && <div className="error">{error}</div>}
                	<form id = "basic-form" action="" method="post" onSubmit={handleSubmit}> 

						<br></br>
	                    <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Name">
							<input class="input100" type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required="required"/>
						</div>

            	        <div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
							<input class="input100" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required="required"/>
						</div>

						<div class="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
							<input class="input100" type="text" placeholder="Any Complain of Waiter" name="waiterComplain" value={formData.waiterComplain} onChange={handleChange} required="required" />
						</div>

						<table>
							<tr>
								<td>
									<h3 class="text-center">SERVICE</h3>
									<div class="star-margin">
										<ReactStars
    										count={5}
    										onChange={ratingChanged}
    										size={24}
    										activeColor="#d65106"
  										/>
									</div>
								</td>

								<td>
									<h3 class="text-center">CLEANNESS</h3>
									<div class="star-margin">
										<ReactStars
    										count={5}
    										onChange={ratingChanged}
    										size={24}
    										activeColor="#d65106"
  										/>
									</div>
										
								</td>
							</tr>
						</table>

						<div class="wrap-input100">
            	            <textarea class="input100" placeholder="Give Any Suggestion" name="suggestion" value={formData.suggestion} onChange={handleChange}/>
                	    </div>

                    	<br></br><br></br>

                    	<div>
                        	<button class="btn2" type="submit" name="save">Send Message</button>
 	                   	</div>
    	                <br></br>
 
        	        </form>  
            	</center>  
        	</div>

            <Footer/>

        </>
    )
}

export default Feedback;