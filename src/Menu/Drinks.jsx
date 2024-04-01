import React from "react";
import './Menu.css';
import '../Header/Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import Drink1 from '../images/drinks/soft-drink.webp';
import Drink2 from '../images/drinks/cola.jpeg';
import Drink3 from '../images/drinks/pepsi.jpeg';
import Footer from "../footer/footer";

const Drinks = () => {
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
                            <h1>COLD-DRINKS</h1>
                        </div>
                    </div>
                </div>
            </div>

            <table>
                <tr>
                    <td>
                        <div class="con">
                            <img src={Drink1} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">Soft Drinks</h3></td>
                                <h3 class="text-right">₹ 70</h3>
                            </tr>       
                            <h4>Yummy 👌👌</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <a href="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="con">
                            <img src={Drink2} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">coca cola</h3></td>
                                <h3 class="text-right">₹ 100</h3>
                            </tr>       
                            <h4>😋😋😋</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <a href="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="con">
                            <img src={Drink3} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">pepsi cold</h3></td>
                                <h3 class="text-right">₹ 120</h3>
                            </tr>       
                            <h4>😜😜😜</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit" onclick="window.location.href = '../AddToCart.php?p_id=<?php echo $row['p_id']; ?>' ">
                                    <FaShoppingCart />
                                </button>             
                                <a href="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

            <Footer />
        </>
    )
}
export default Drinks;