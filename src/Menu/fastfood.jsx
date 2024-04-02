import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import '../Header/Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import Footer from "../footer/footer";

const Fastfood = () => {
    const [fastfoods, setFastfoods] = useState([]);
    const navigate = useNavigate();
    const handleOrderClick = (fastfood) => {
        // Convert the fastfood object to a JSON string
        const replacer = (key, value) => {
            if (typeof value === 'object' && value !== null) {
                // Check if value is already in the visited set
                if (cache.has(value)) {
                    return '[Circular]';
                }
                // Add value to set
                cache.add(value);
            }
            return value;
        };

        // Cache to track visited objects
        const cache = new WeakSet();

        // Convert the fastfood object to a JSON string
        const fastfoodString = JSON.stringify(fastfood, replacer);
        // Navigate to the order page with the selected fastfood details as URL parameters
        navigate(`/Order`, { state: { fastfood: fastfoodString } });
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/fastfoods') // Replace '/api/pizzas' with the actual endpoint of your API
            .then(response => response.json())
            .then(data => setFastfoods(data))
            .catch(error => console.error('Error fetching fastfood data:', error));
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
                            <h1>FASTFOOD</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-xxl'>
                <div className='row'>
                    {fastfoods.map(fastfoods => (
                        <div key={fastfoods._id} class="con">

                            <img src={fastfoods.image} height="250px" width="100%" alt=""/>
                            <tr>
                                <td><h3 class="text-left">{fastfoods.name}</h3></td>
                                <h3 class="text-right">₹ {fastfoods.price}</h3>
                            </tr>       
                            <h4>{fastfoods.tag}</h4>
                            <div class="gridbtn">
                                <button class="btn1" name="cart" type="submit">
                                    <FaShoppingCart />
                                </button> 
                                    <button class="btn2" onClick={handleOrderClick}  type="submit" name="order">ORDER</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Fastfood;