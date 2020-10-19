import React from 'react';

// Componento:
//
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import BanMobileDevices from './components/Ncurses/BanMobileDecives';
import Routes from './components/Routes';

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
