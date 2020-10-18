import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

// Components:
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard';
import Register from './components/Register';
import Challenges from './components/Challenges';
import BanMobileDevices from './components/Ncurses/BanMobileDecives';

// Stylesheets:
import './ncurses.css';

const App = () => {
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
        <Heading isChallengeStarted={true} /> //replace this with
        isAuthenticated later
        <div className="container">
          <Switch>
            <Route component={Leaderboard} path="/leaderboard" />
            <Route component={Register} path="/register" />
            <Route component={Challenges} path="/challenges" />
            <Route component={Login} path="/login" />
            <Route component={Login} exact path="/" />
          </Switch>
        </div>
        // End of container div
      </div>
    );
  }
};

export default App;
