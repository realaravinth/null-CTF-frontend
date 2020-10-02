import React from 'react';
import { Switch, Route } from "react-router-dom";

// Components:
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard';
import Register from './components/Register';
import Challenges from './components/Challenges';
// Stylesheets:
import './ncurses.css';

function App() {
  return (
    <div className="App">
		<Navbar />
			<Heading isChallengeStarted={true} /> //replace this with isAuthenticated later

		<div className="container">
			<Switch>
				<Route component={Leaderboard} path="/leaderboard" />
				<Route component={Register} path="/register" />
				<Route component={Challenges} path="/challenges" />
				<Route component={Login} path="/login" />
				<Route component={Login} path="/" />
			</Switch>
		</div> // End of container div
    </div>
  );
}

export default App;
