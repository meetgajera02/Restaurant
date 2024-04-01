import React from "react";
import './Profile.css';
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import person from '../images/meet.jpeg';


const Edit = () => {
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
		    				    <li class="nav-item"><Link class="nav-link" to="/Home">Home</Link></li>

			    			    <li class="nav-item"><Link class="nav-link" to="/Menu">Menu</Link></li>

    			    			<li class="nav-item"><Link class="nav-link" to="/Reservation">Reservation</Link></li>

		        				<li class="nav-item"><Link class="nav-link" to="/About">About</Link></li>

		    	    			<li class="nav-item"><Link class="nav-link" to="/Contact">Contact</Link></li>

			    	    		<li class="nav-item"><Link class="nav-link" to="/Feedback">Feedback</Link></li>

		    			    	<div class="dropdown">
                                    <li class="nav-item active"><Link class="nav-link" to="/Profile"><FaUser /></Link></li>
				    			    <div class="dropdown-content">
                                        <Link class="nav-link" to="/Edit_profile">Edit Profile</Link>
						    		    <a href="/">Logout</a>
							        </div>
					    	    </div>
				    	    </ul>
			    	    </div>  
		    	    </div>
	    	    </nav>
    	    </header>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <section id="doctors" class="doctors section-bg">
                <form name="f1" method="post">
                    <div class="containerrr rounded bg-white mt-5 mb-5" data-aos="fade-up">
                        <table>
                            <div class="row">
                                <tr>  
                                    <div class="col-md-3 border-right">
                                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                                            <img  class="rounded-circle mt-5" width="150px" alt="" src={person}/><br></br>
                                            <span class="font-weight-bold">MEET GAJERA</span>
                                            <div>
                                                <button type="submit" class="btn10">Change</button>
                                                <button type="submit" class="btn10">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <td>
                                        <div class="col-md-8 border-right">
                                            <div class="p-3 py-5">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <h4 class="text-left">Profile Settings</h4>
                                                </div>

                                                <div class="row mt-3">
                                                    <div class="col-md-12">
                                                        <label class="labels">Name</label>
                                                        <input type="text" class="form-control1"name="name" placeholder="Name"  required/>
                                                    </div>
                                                </div>

                                                <div class="row mt-3">
                                                    <div class="col-md-12">
                                                        <label class="labels">Email ID</label>
                                                        <input type="text" class="form-control1" name="email" placeholder="enter email id" required />
                                                    </div>
                                                </div>

                                                <div class="row mt-3">
                                                    <div class="col-md-12">
                                                        <label class="labels">Mobile Number</label>
                                                        <input type="text" class="form-control1" name="mobile" placeholder="enter phone number" required/>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="row mt-3">
                                                            <tr><td>
                                                            <div class="col-md-6">
                                                                <label class="labels">City</label>
                                                                <input type="text" class="form-control1" name="city" placeholder="enter your City"  required/>
                                                            </div></td>
                                                            <td>
                                                            <div class="col-md-6">
                                                                <label class="labels">Distric</label>
                                                                <input type="text" class="form-control1" name="distric" placeholder="enter your  Distric"  required/>
                                                            </div></td></tr>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row mt-3">
                                                    <div class="col-md-12">
                                                        <label class="labels">ZipCode</label>
                                                        <input type="text" class="form-control1" name="zipcode" placeholder="enter Zipcode"  required />
                                                    </div>
                                                </div>

                                                <div class="row mt-3">
                                                    <div class="col-md-12">
                                                        <label class="labels">Address</label>
                                                        <textarea class="form-control1" name="address" placeholder="enter address " readonly></textarea>
                                                    </div>
                                                </div>

                                                <div class="mt-5 text-center">
                                                    <button class="btn2" type="submit" name="Update">Save Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </div>
                        </table>
                    </div>
                </form>
            </section>

            <Footer/>
        </>
    )
}

export default Edit;