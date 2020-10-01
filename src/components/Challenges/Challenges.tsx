import React from 'react';


//Componenets:
import MenuTitle from '../Ncurses/MenuTitle';
import MenuTopText from '../Ncurses/MenuTopText';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog from '../Ncurses/wrapper/WithMenuDialog';




const Challenges: React.FC= () => (
	<WithMenuDialog isChallenges={false}> 
		<MenuTitle title={"Challenges"} />
		<MenuTopText 
			text={ "Solve these challges to find flags. Flags will be in the form nCTF{secret-goes-in-here}"}
		/>
		<WithContentContainer>
			<p> Challenges go in here </p>
		</WithContentContainer>
	</WithMenuDialog>
);

export default Challenges;

