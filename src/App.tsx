import React from 'react';


import {useAppDispatch} from './app/store';
import {selectChallenge, thunkedGetChallenges, addChallenge} from './app/reducers/challengeSlice';
import {useSelector} from 'react-redux';
import {
  selectAuth,
  isAuthenticated,
} from './app/reducers/authSlice';

import {getChallenges} from  './app/API/getChallenges';

import API from  './app/API/api';

// Componento:
//
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import BanMobileDevices from './components/Ncurses/BanMobileDecives';
import Routes from './components/Routes';

// Stylesheets:
import './ncurses.css';

const App = () => {
   const dispatch = useAppDispatch();
  const challenges = useSelector(selectChallenge);
   const authVal = useSelector(selectAuth);
  //  if (authVal  !== isAuthenticated.loggedOut && challenges === null){
  if ( challenges === null ){
    fetch("http://localhost:8080/api/get-challenges", {
          credentials: 'include',
      }).then(data => data.json()).then((res) =>
        dispatch(addChallenge(res)));
  //}
  }

  if (window.matchMedia('(max-width: 1000px)').matches) {
    return (
      <div className="App">
        <div className="container">
          <BanMobileDevices />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Heading />
        <div className="container">
          <Routes />
        </div>
        // End of container div
      </div>
    );
  }
};

export default App;
