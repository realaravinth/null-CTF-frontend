import React from 'react';
import {NavLink} from 'react-router-dom';

//	<NavLink to="/questions">/questions</NavLink>
const Navbar: React.FC = () => (
  <ul className="navbar">
    <li>
      <NavLink to="/challenges">/challenges</NavLink>
    </li>
    <li>
      <NavLink to="/leaderboard">/leaderboard</NavLink>
    </li>
    <li>/logout</li>
  </ul>
);

export default Navbar;
