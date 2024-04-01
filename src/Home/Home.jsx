import React from 'react';
import './Home.css';
import '../Header/Header.css';
import about from '../images/about-img.jpg';
import img01 from '../images/img-01.jpg';
import img02 from '../images/img-02.jpg';
import img03 from '../images/img-03.jpg';
import img04 from '../images/img-04.jpg';
import img05 from '../images/img-05.jpg';
import img06 from '../images/img-06.jpg';
import img07 from '../images/img-07.jpg';
import img08 from '../images/img-08.jpg';
import img09 from '../images/img-09.jpg';
import Footer from '../footer/footer';
import logo from '../Header/images/logo.png';
import { FaUser } from "react-icons/fa";

const Home = () => {
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
		    				    <li class="nav-item active"><a class="nav-link" href="/Home">Home</a></li>

			    			    <li class="nav-item"><a class="nav-link" href="/Menu">Menu</a></li>

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


      	<div class="about-section-box" >
			<br></br><br></br><br></br><br></br>
        	<div class="container">
			    <div class="row">
					<table>
						<tr>
							<td>
							<div class="col-lg-6 col-md-6 col-sm-12 text-center ">
					    		<div class="inner-column">
						    		<h1>Welcome To <span>Live Dinner Restaurant</span></h1>						
						    		<p>A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you. If it can do both of those things at the same time, you're hooked.</p>
						    		<p>n a restaurant one is both observed and unobserved. Joy and sorrow can be displayed and observed "unwittingly," the writer scowling naively and the diners wondering, What the hell is he doing?</p>
						    		<a class="btn btn-lg btn-circle btn-outline-new-white" href='/reservation'>Reservation</a>
					    		</div>
				    		</div>
							</td>
							<td>
								<div class="col-lg-6 col-md-6 col-sm-12">
					    			<img src={about} alt="" width={500} class="img-fluid"/>
				    			</div>
							</td>
						</tr>
					</table>
			    </div>
		    </div>
      	</div>

	  	<div class="qt-box qt-background">
			<div class="container">
				<div class="row">
					<div class="col-md-8 ml-auto mr-auto text-center">
						<p class="lead ">
							" If you're not the one cooking, stay out of the way and compliment the chef. "
						</p>
						<span class="lead">Michael Strahan</span>
					</div>
				</div>
			</div>
		</div>

		<div class="menu-box">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="heading-title text-center">
							<h2>Special Menu</h2>
						</div>
					</div>
				</div>

				<div id="restaurant-menu">
                	<div class="container">
                    	<table>
							<tr>
								<td>
            	                    <div class="menu-section">
                	                    <center>
                    	                    <div class="menu-item">
                        	                    <img src={img01} class="menu-item-product1" width={300} height={200} alt="" />
                            	            </div>
                                	    </center>
                                	</div>  
                            	</td>

                            	<td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img02} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>

							<td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img03} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>
                        </tr>

                        <tr>
							<td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img04} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>

                            <td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img05} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>

							<td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img06} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>
                        </tr>

                        <tr>
							<td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img07} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>

                            <td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img08} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>

							<td>
                                <div class="menu-section">
                                    <center>
                                        <div class="menu-item">
                                            <img src={img09} class="menu-item-product1" width={300} height={200} alt="" />
                                        </div>
                                    </center>
                                </div>  
                            </td>
                        </tr>
                    </table>     
                </div>
            </div>
			</div>
		</div>
		
		<Footer/>
    </>
  );
};

export default Home;