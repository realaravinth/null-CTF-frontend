import React from 'react';
import { Link } from "react-router-dom";

//	<Link to="/questions">/questions</Link>
const Navbar: React.FC= () => (
			<ul className="navbar">
				<li>
					/questions
				</li>
				<li>
					<Link to="/leaderboard">/leaderboard</Link>
				</li>
				<li>/logout</li>
			</ul>

);

export default Navbar;

