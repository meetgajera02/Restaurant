import React, { useEffect, useState } from "react";
import './Order.css';
import '../Header/Header.css';
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import Footer from '../footer/footer';
import { message } from "antd";
import { useParams } from 'react-router-dom';

const Di = () => {
    const { id } = useParams();
    console.log(id);
    const [dishe, setDishe] = useState(null);
    console.log(dishe);
    useEffect(() => {
        async function fetchDishe() {
          try {
            const response = await fetch(`http://localhost:5000/api/dishe/${id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setDishe(data.dishe);
          } catch (error) {
            console.error('Error fetching dishe:', error);
          }
        }
        fetchDishe();
      }, [id]);

    const [formData, setFormData] = useState({
        name: "",
        city: "",
        state: "",
        pincode: "",
        address: "",
        quantity: 1
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-order', {
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
                    name: "",
                    city: "",
                    state: "",
                    pincode: "",
                    address: "",
                    quantity: 1
                });
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred, please try again later');
        }
    };
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
                        <img src={dishe?.image} alt='' width={500} className="border-radius: 30px;"/>
                    </div>

                    <br></br>

                    <div>

                        <tr>
                                <td><h3 class="text-left">{dishe?.name}</h3></td>
                                <h3 class="text-right">₹ {dishe?.price}</h3>
                        </tr>    
                        <br></br>   
                        <h4>{dishe?.tag}</h4>
                        
                    </div>
                </div>

                <div>
                    {error && <div className="error">{error}</div>}
                    <form onSubmit={handleSubmit}>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Name:</label>
                            <input type="text" class="form-control2" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">City:</label>
                            <input type="text" class="form-control2" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">State:</label>
                            <input type="text" class="form-control2" name="state" placeholder="Enter State" value={formData.state} onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Pincode:</label>
                            <input type="text" class="form-control2" name="pincode" placeholder="Enter Pincode" value={formData.pincode} onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Address:</label>
                            <textarea type="text" class="form-control2" name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange} required/>
                        </div>
                    </div>

                    <br></br>
                    <div class="control-group">
                        <label class="labels">Quantity:</label>
                        <input type="number" class="Quantity" min="1" required="required" onChange={handleChange} value={formData.quantity} name="quantity" />
                    </div>

                    <br></br>
                    <div>
                        <button class="btn2" type="submit" name="order">ORDER</button>
					</div>	
                    </form>								
                </div>
                
                <div>

                </div>
            </div>
    
            <br></br>
		<Footer/>
    </>
  );
};

export default Di;