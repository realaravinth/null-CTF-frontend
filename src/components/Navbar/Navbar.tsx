import React from 'react';

import {useSelector} from 'react-redux';

import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

import NavChallenges from './NavChallenges';
import NavLeaderboard from './NavLeaderboard';
import NavLogout from './NavLogout';
import NavLogin from './NavLogin';

const Navbar: React.FC = () => {
  const authState = useSelector(selectAuth);

  if (authState === isAuthenticated.challengeReady) {
    return (
      <ul className="navbar">
        <NavChallenges />
        <NavLeaderboard />
        <NavLogout />
      </ul>
    );
  } else {
    return (
      <ul className="navbar">
        <NavLogin />
      </ul>
    );
  }
};

export default Navbar;
