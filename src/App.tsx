import React from 'react';

// Components:
import Heading from './components/Heading';
import Navbar from './components/Navbar';


// Stylesheets:
import './ncurses.css';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Heading />

    </div>
  );
}

export default App;
