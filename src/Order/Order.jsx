import React from 'react';
import './Order.css';
import '../Header/Header.css';
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import fast2 from '../images/fastfood/fast2.jpg';
import Footer from '../footer/footer';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


const Order = () => {
  return (
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

			    		    <li class="nav-item active"><a class="nav-link" href="/Menu">Menu</a></li>

    		    			<li class="nav-item"><a class="nav-link" href="/Reservation">Reservation</a></li>

	        				<li class="nav-item"><a class="nav-link" href="/About">About</a></li>

		    	    		<li class="nav-item"><a class="nav-link" href="/Contact">Contact</a></li>

			    	    	<li class="nav-item"><a class="nav-link" href="/Feedback">Feedback</a></li>

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
					    <h1>ORDER</h1>
			        </div>
		        </div>
	        </div>
        </div>

        <br></br>

        <div class="heading-title text-center">
		    <h2> Fill The Details</h2>
	    </div>

            <div class="f-row">
                <div>
                    <div>
                        <img src={fast2} alt='' width={500} className="border-radius: 30px;"/>
                    </div>

                    <br></br>

                    <div>
                        <div class="control-group">
              		        <h1 className="font-size:70px; opacity:0.7" name="pname">PIZAA</h1>                 
                        </div>

                        <div class="control-group">
              	            <h3 className="font-size:30px;opacity:0.5"><i>Amezing</i></h3>  
                        </div>

                        <div class="control-group">
              	            <h3 className="font-size:30px;opacity:0.5"><i>₹ 180</i></h3>
                        </div>

                        <div class="control-group">
                            <FaStar color='#d65106'/>
                            <FaStar color='#d65106'/>
                            <FaStar color='#d65106'/>
                            <FaStar color='#d65106'/>
					    	<CiStar color='#d65106'/>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Name:</label>
                            <input type="text" class="form-control2" name="user_name" placeholder="Enter Name"  required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">City:</label>
                            <input type="text" class="form-control2" name="city" placeholder="Enter City"  required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">State:</label>
                            <input type="text" class="form-control2" name="state" placeholder="Enter State"  required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Pincode:</label>
                            <input type="text" class="form-control2" name="pincode" placeholder="Enter Pincode"  required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Address:</label>
                            <textarea type="text" class="form-control2" name="pincode" placeholder="Enter Address"  required/>
                        </div>
                    </div>

                    <br></br>
                    <div class="control-group">
                        <label class="labels">Quantity:</label>
                        <input type="number" class="Quantity" min="1" required="required" name="quantity" />
                    </div>

                    <br></br>
                    <div>
                        <button class="btn2" type="submit" name="order">ORDER</button>
					</div>									
                </div>
                
                <div>

                </div>
            </div>
    
            <br></br>
		<Footer/>
    </>
  );
};

export default Order;