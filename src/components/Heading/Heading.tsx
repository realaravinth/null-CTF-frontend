import React from 'react';

//components
import CountDown from './CountDown';

type HeadingProps = {
	isChallengeStarted: boolean
}

const Heading: React.FC<HeadingProps>= ({isChallengeStarted}) => (
	<div className="mainheader">
		<div 
			dangerouslySetInnerHTML={{__html:'<p class="ascii-art">███╗&nbsp&nbsp&nbsp██╗██╗&nbsp&nbsp&nbsp██╗██╗&nbsp&nbsp&nbsp&nbsp&nbsp██╗&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██████╗████████╗███████╗<br /> ████╗&nbsp&nbsp██║██║&nbsp&nbsp&nbsp██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██╔════╝╚══██╔══╝██╔════╝<br /> ██╔██╗&nbsp██║██║&nbsp&nbsp&nbsp██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp█████╗&nbsp&nbsp<br /> ██║╚██╗██║██║&nbsp&nbsp&nbsp██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp██╔══╝&nbsp&nbsp<br /> ██║&nbsp╚████║╚██████╔╝███████╗███████╗&nbsp&nbsp&nbsp&nbsp╚██████╗&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp<br /> ╚═╝&nbsp&nbsp╚═══╝&nbsp╚═════╝&nbsp╚══════╝╚══════╝&nbsp&nbsp&nbsp&nbsp&nbsp╚═════╝&nbsp&nbsp&nbsp╚═╝&nbsp&nbsp&nbsp╚═╝&nbsp&nbsp&nbsp&nbsp&nbsp<br />'}}> 
		</div>
		<div className="filler" />
		<div className="timer">
			<CountDown />
		</div>
	</div> 
);

export default Heading;

