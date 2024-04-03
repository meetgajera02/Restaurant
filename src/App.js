// App.js
// import React from 'react';
// import Header from './Header/Header';
// import Menu from './Menu/Menu';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Menu />
//     </div>
//   );
// };

// export default App;

// Filename - App.js

import "./App.css";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import Login from "./Login/Login";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import Fastfood from "./Menu/fastfood";
import Pizza from "./Menu/Pizza";
import Burger from "./Menu/Burger";
import Dishes from "./Menu/All_dishes";
import Juice from "./Menu/Juice";
import Drinks from "./Menu/Drinks";
import About from "./About/About";
import Reservation from "./Reservation/Reservation";
import Feedback from "./Feedback/Feedback";
import Order from "./Order/Order";
import Burgers from "./Order/Burder_order";
import Di from "./Order/Dishe_order";
import Profile from "./Profile/Profile";
import Edit from "./Profile/edit_profile";
import Registration from "./Login/Registration";
import Jui from "./Order/Juice_order";
import Fast from "./Order/fastfood_order";
import Dri from "./Order/Drink_order";

function App() {
	return (
		<>
			<Router>
				<Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />

					<Route path="/Home" element={<Home />} />
					<Route path="/About" element={<About />}/>
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Menu/Pizaa" element={<Pizza />} />
          <Route path="/Menu/fastfood" element={<Fastfood />} />
          <Route path="/Menu/Burger" element={<Burger />} />
          <Route path="/Menu/All_dishes" element={<Dishes />} />
          <Route path="/Menu/Juice" element={<Juice />} />
          <Route path="/Menu/Drinks" element={<Drinks />} />
          <Route path="/Reservation" element={<Reservation/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Pizza_Orders/:id" element={<Order/>} />
          <Route path="/Burger_Orders/:id" element={<Burgers/>} />
          <Route path="/Dishe_Orders/:id" element={<Di/>} />
          <Route path="/Juice_Orders/:id" element={<Jui/>} />
          <Route path="/fastfood_Orders/:id" element={<Fast/>} />
          <Route path="/Drink_Orders/:id" element={<Dri/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Edit_profile" element={<Edit/>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
