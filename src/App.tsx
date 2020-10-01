import React from 'react';

// Components:
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Login from './components/Login/Login';
import WithMenuDialog from './components/Ncurses/wrapper/WithMenuDialog';

// Stylesheets:
import './ncurses.css';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Heading />
		<WithMenuDialog isChallenges={false}> 
			<Login />
		</WithMenuDialog>

    </div>
  );
}

export default App;
