import React from 'react';


//Componenets:
import MenuTitle from '../Ncurses/MenuTitle';
import MenuTopText from '../Ncurses/MenuTopText';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog from '../Ncurses/wrapper/WithMenuDialog';




const Leaderboard: React.FC= () => (
		<WithMenuDialog isChallenges={false}> 
			<MenuTitle title={"Leaderboard"} />
			<MenuTopText text={"Top 10 scores: "} />
			<WithContentContainer>
				<p> Scorecard goes here </p>
			</WithContentContainer>


		</WithMenuDialog>

);

export default Leaderboard;

