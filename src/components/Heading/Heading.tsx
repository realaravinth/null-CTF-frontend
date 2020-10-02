import React from 'react';

//components
import CountDown from './CountDown';
import AsciiArt from './../AsciiArt';

type HeadingProps = {
	isChallengeStarted: boolean
}

const Heading: React.FC<HeadingProps>= ({isChallengeStarted}) => (
	<div className="mainheader">
		<AsciiArt />
		<div className="filler" />
		<div className="timer">
			<CountDown />
		</div>
	</div> 
);

export default Heading;

