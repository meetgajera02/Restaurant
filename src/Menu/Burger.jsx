import React, { useState, useEffect } from "react";
import './Menu.css';
import '../Header/Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import Footer from "../footer/footer";

const Burger = () => {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/burgers') // Replace '/api/pizzas' with the actual endpoint of your API
            .then(response => response.json())
            .then(data => setBurgers(data))
            .catch(error => console.error('Error fetching pizza data:', error));
    }, []);
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
                            <h1>BURGGER</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-xxl'>
                <div className='row'>
                    {burgers.map(burgers => (
                        <div key={burgers._id} class="con">

                            <img src={burgers.image} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">{burgers.name}</h3></td>
                                <h3 class="text-right">₹ {burgers.price}</h3>
                            </tr>       
                            <h4>{burgers.tag}</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit">
                                    <FaShoppingCart />
                                </button>             
                                <a href="/Order">            
                                    <button class="btn2" type="submit" name="order">ORDER</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Burger;