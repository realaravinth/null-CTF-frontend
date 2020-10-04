import React from 'react';


//Componenets:

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, { menuDialogSize } from '../Ncurses/wrapper/WithMenuDialog';


const Leaderboard: React.FC= () => (
	<WithMenuDialog 
		size={menuDialogSize.big}
		menuTitle={"Leaderboard"}
		pageTitle={"Leaderboard"} 
		topText={"Top 10 scores: "}>
		<WithContentContainer>
			<p> Scorecard goes here </p>
		</WithContentContainer>
	</WithMenuDialog>

);

export default Leaderboard;

