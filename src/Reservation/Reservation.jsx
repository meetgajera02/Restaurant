import React, { useState } from "react";
import './Reservation.css';
import '../Header/Header.css';
import Footer from "../footer/footer";
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import { message } from "antd";

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        person: '',
        date: '',
        time: '',
        food: '',
        occasion: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/book-table', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
                message.success("Table Booked Successfully")
                // Clear form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    person: '',
                    date: '',
                    time: '',
                    food: '',
                    occasion: ''
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
			    		    <img src={logo} alt="" height="97px" className="border-radius: 50%" />
				        </a>
				        <div  className="header__right " id="navbars-rs-food">
    					    <ul  className="navbar-nav header__lists ml-auto">
		    				    <li  className="nav-item"><a  className="nav-link" href="/Home">Home</a></li>

			    			    <li  className="nav-item"><a  className="nav-link" href="/Menu">Menu</a></li>

    			    			<li  className="nav-item active"><a  className="nav-link" href="/Reservation">Reservation</a></li>

		        				<li  className="nav-item"><a  className="nav-link" href="/About">About</a></li>

		    	    			<li  className="nav-item"><a  className="nav-link" href="/Contact">Contact</a></li>

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
			    	    	<h1>RESERVATION</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

			<div   className="flex-container">
            	<div  className="heading-title text-center">
                	<h2>BOOKING TABLE</h2>
            	</div>

            	<center>  
                    {error && <div className="error">{error}</div>}
                <form id = "basic-form" action="" method="post" onSubmit={handleSubmit}> 
                    
                    <div  className="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Name">
						<input  className="input100" type="text" placeholder=" Name" name="name" value={formData.name} onChange={handleChange} required="required" />
					</div>

                    <div  className="wrap-input100 validate-input m-t-50 m-b-35" data-validate = "Enter Email">
						<input  className="input100" type="text" placeholder=" Email" name="email" value={formData.email} onChange={handleChange} required="required" />
					</div>

                    <tabel>
                        <tr>
                            <td>
                                <div  className="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter mobile">
						            <input  className="input10" type="text" placeholder=" Mobile" name="mobile" value={formData.mobile}  onChange={handleChange} required="required"/>
					            </div>
                            </td>
                            <td>
                                <div  className="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter person">
						            <input  className="input10" type="number" placeholder=" How Many Person" name="person" min="1" value={formData.person} onChange={handleChange} required="required"/>
					            </div>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>
                                <div  className="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Date">
						            <input  className="input10" type="date" id="date" placeholder=" Date" name="date" value={formData.date} onChange={handleChange} required="required" />
					            </div>
                            </td>
                            <td>
                                <div  className="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Time">
						            <input  className="input10" type="time" placeholder=" Time" name="time" value={formData.time} onChange={handleChange} required="required" />
					            </div>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>
                                <div  className="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Date">
                                    <select  className="input10" name="food" required value={formData.food} onChange={handleChange} >
                                            <option>FOOD</option>
                                            <option>PIZAA</option>
                                            <option>FAST FOOD</option>
                                            <option>BURGGER</option>
                                            <option>JUICE</option>
                                        </select>
					            </div>
                            </td>
                            <td>
                                <div  className="wrap-input10 validate-input m-t-50 m-b-35" data-validate = "Enter Time">
                                    <select  className="input10" name="occasion" value={formData.occasion} onChange={handleChange} >
                                        <option >Occasion</option>
                                        <option >Birthday Party</option>
                                        <option >Anniversary</option>
                                        <option >Day Salebration</option>
                                        <option >Datting</option>
                                        <option >Wadding</option>
                                        <option >Other</option>
                                    </select>
					            </div>
                            </td>
                        </tr>
                    </tabel>

                    <br></br><br></br>

                    <div>
                        <center><button  className="btn2" type="submit" name="save">Book Table</button></center>
                    </div>
                    <br></br>
 
                </form>  
            </center>  
        </div>
        <Footer/>
        
        </>
    )
}

export default Reservation;