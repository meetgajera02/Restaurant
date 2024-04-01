import React from "react";
import './About.css';
import '../Header/Header.css';
import { FaUser } from "react-icons/fa";
import logo from '../Header/images/logo.png';
import Footer from "../footer/footer";
import meet from '../images/meet1.jpg';
import ritu from '../images/ritu.jpg';
import vivek from '../images/vivek.jpg';


const About = () => {
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

		        				<li class="nav-item active"><a class="nav-link" href="/About">About</a></li>

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
			    	    	<h1>ABOUT US</h1>
			    	    </div>
			        </div>
		        </div>
	        </div>

            <div class="container">
                <br></br>
                <div class="heading-title text-center">
				    <h2>OUR ORGANIZATION</h2>
			    </div>

                <p>
					PKD Restaurents is one of the world’s largest quick service restaurant 
					companies with approximately $32 billion in annual system-wide sales and 27,000 restaurants in more 
					than 100 countries and U.S. territories. PKD owns three of the world’s most prominent and iconic quick 
					service restaurant brands – TIM HORTONS®, BURGER KING®, and POPEYES®. These independently operated brands 
					have been serving their respective guests, franchisees and communities for over 45 years.<br></br>
				</p>

				<p>
					<b><h3>Our Values</h3></b>
					Core to our vision of building the most loved restaurant brands in the world are the values that guide our work, 
					our actions and our interactions each and every day as a company. At PKD, we believe:
					<ul>
						<li><b>Dream Big: </b> is too short for small dreams</li>
						<li><b>Ownership:</b> You value things more when you own them</li>
						<li><b>Meritocracy:</b> Your growth is based entirely on what you do and how you do it</li>
						<li><b>Diversity: </b> wide range of voices and perspectives make us stronger</li>
						<li><b>Creativity & Innovation:</b> ways to do things differently to make them better</li>
						<li><b>Authenticity:</b> Be a hard-working, good person</li>
					</ul>
				</p>

                <p>	
					<b><h3>Our Employee Value Proposition</h3></b>
					<ul>
						<li><b>Big Dream:</b> are driven by a big dream, working 
							together to build the most loved restaurant brands in the world.</li>
						<li><b>Big Responsibility: </b> believe in quick service without compromises. That means quality, real ingredients, 
							social purpose and accountability for what we put into the world.</li>
						<li><b>Growth:</b> We have over 27,000 locations in 100+ countries with plans to reach more than 40,000 locations in the coming years. 
							This growth, coupled with our culture of meritocracy, creates opportunities for all of us.</li>
						<li><b>Hard Working Good People: </b> attract diverse and driven talent, who are the owners of our vision. 
							We are hard working people – and fundamentally good at our core.</li>	
						<li><b>Hospitality Culture:</b> We get excited to welcome hundreds of millions of people to our restaurants every 
							year – in all of the languages, countries and communities that we serve around the planet.</li>
						<li><b>Real Ownership:</b> We help our teams become actual owners of our business, with compensation that allows us 
							to acquire substantial share ownership as our responsibilities and contributions grow. We are trusted to own and deliver on our area of the business as partners – not just as employees.</li>					
					</ul>
				</p>
            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div class="container">
                <div data-aos="fade-up">
                    <div class="heading-title text-center">
				        <div class="section-title">
					        <h2>OWNER</h2>
				        </div>
			        </div>

                    <table>
                        <tr>
                            <td>
                                <img src={meet} alt="" width={400} height={400}/>
                                <h3 class="text-center">Meet Gajera</h3>
                            </td>
                            <td>
                                <img src={ritu} alt="" width={400} height={400}/>
                                <h3 class="text-center">Ritu Hapani</h3>
                            </td>
                            <td>
                                <img src={vivek} alt="" width={400} height={400}/>
                                <h3 class="text-center">Vivek Vadoliya</h3>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        
			<Footer/>
        </>
    )
};

export default About;