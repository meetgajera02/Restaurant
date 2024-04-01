import React from "react";
import './footer.css';


const Footer = () => {
    return(
        <footer class="footer-area bg-f">
            <div class="container">
                <div class="row">
                    <table>
                        <tr>
                            <td><div class="col-lg-3 col-md-6"><h3>Usefull Links</h3></div></td>
                            <td><div class="col-lg-3 col-md-6"><h3>Subscribe</h3></div></td>
                            <td><div class="col-lg-3 col-md-6"><h3>Contact information</h3></div></td>
                            <td><div class="col-lg-3 col-md-6"><h3>Opening hours</h3></div></td>
                        </tr>                        
                        <tr>
				            <td>
                                <div class="col-lg-3 col-md-6">					    
					                <p class="lead"><a href="/Menu">Menu</a></p>
					                <p class="lead"><a href="/Reservation">Reservation</a></p>
					                <p class="lead"><a href="/About">About</a></p>
					                <p class="lead"><a href="/Contact">Contact</a></p>
					                <p class="lead"><a href="/Feedback">Feedback</a></p>
				                </div>
                            </td>
				            <td>
                                <div class="col-lg-3 col-md-6">
					                <div class="subscribe_form">
						                <form class="subscribe_form">
						    	            <input name="EMAIL" id="subs-email" class="form_input" placeholder="Email Address..." type="email"/> 
						    	            <button type="submit" class="submit">SUBSCRIBE</button>
						    	            <div class="clearfix"></div>
						                </form>
					                </div>
				                </div>
                            </td>
				            <td>
                                <div class="col-lg-3 col-md-6">
				    	            <p class="lead">MRV Restorents, Rajkot, India</p>
				    	            <p class="lead"><a href="/Home">+91 95372 30057</a></p>
									<p class="lead"><a href="/Home">+91 82000 56707</a></p>
				    	            <p class="lead"><a href="/Home">+91 99098 08581</a></p>
				    	            <p><a href="/Home"> MRVRestorants@gmail.com</a></p>
				                </div>
                            </td>
				            <td>
                                <div class="col-lg-3 col-md-6">
				    	            <p><span class="text-color">Sonday: </span>Closed</p>
				    	            <p><span class="text-color">Mon-Tue :</span> 9:Am - 10PM</p>
				    	            <p><span class="text-color">Wed-Thu :</span> 9:Am - 10PM</p>
				    	            <p><span class="text-color">Fri-Sat :</span> 5:PM - 10PM</p>
                                    <br></br><br></br>
				                </div>
                            </td>
                        </tr>
                    </table>
			    </div>
            </div>
            <div class="copyright">
			    <div class="container ">
				    <div class="row">
					    <div class="col-lg-12 ">
					    	<p class="company-name ">All Rights Reserved. &copy; 2023 <a href="meet">Restaurant</a> Design By : 
					    <a href="/Home"> MRV TEAM</a></p>
					    </div>
				    </div>
			    </div>
		    </div>
        </footer>
    )
}
export default Footer;