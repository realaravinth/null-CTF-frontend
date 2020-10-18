import React, {useState} from 'react';

// Components:
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import BanMobileDevices from './components/Ncurses/BanMobileDecives';
import Routes from './components/Routes';

// Stylesheets:
import './ncurses.css';

enum isAuthenticated {
  loggedOut,
  loggedIn,
  Registered,
  challengeReady,
}

const App = () => {
  const [userAuth, setUserAuth] = useState(isAuthenticated.loggedOut);

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
        <Heading isChallengeStarted={true} /> //replace this with authenticated
        <div className="container">
          <Routes />
        </div>
        // End of container div
      </div>
    );
  }
};

export default App;
