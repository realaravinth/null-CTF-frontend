import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => (
  <ul className="navbar">
    <NavChallenges />
    <NavLeaderboard />
    <NavLogout />
  </ul>
);

const NavChallenges: React.FC = () => {
  return (
    <li>
      <NavLink to="/challenges">/challenges</NavLink>
    </li>
  );
};

const NavLeaderboard: React.FC = () => {
  return (
    <li>
      <NavLink to="/leaderboard">/leaderboard</NavLink>
    </li>
  );
};

const NavLogout: React.FC = () => {
  return (
    <li>
      <NavLink to="/logout">/logout</NavLink>
    </li>
  );
};

export default Navbar;
