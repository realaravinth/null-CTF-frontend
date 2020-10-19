import React from 'react';
import {Link} from 'react-router-dom';

//components
import CountDown from './CountDown';
import AsciiArt from './../AsciiArt';

const Heading: React.FC = () => (
  <div className="mainheader">
    <Link to="/">
      <AsciiArt />
    </Link>
    <div className="filler" />
    <div className="timer">
      <CountDown />
    </div>
  </div>
);

export default Heading;
