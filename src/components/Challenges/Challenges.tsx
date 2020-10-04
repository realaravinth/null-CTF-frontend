import React from 'react';


//Componenets:
import WithContentColumned from '../Ncurses/wrapper/WithContentColumned';
import WithMenuDialog, { menuDialogSize } from '../Ncurses/wrapper/WithMenuDialog';
import WithContentSidebar from '../Ncurses/wrapper/WithContentSidebar';
import WithContentSidebarBody from '../Ncurses/wrapper/WithContentSidebarBody';



const Challenges: React.FC= () => (
	<WithMenuDialog 
		size={menuDialogSize.big} 
		menuTitle={"Challenges"}
		topText={ "Solve these challges to find flags. Flags will be in the form nCTF{secret-goes-in-here}"}
		pageTitle={"Challenges"}>
		<WithContentColumned>
			<WithContentSidebar>
				<p> List of Challenges go in here </p>
			</WithContentSidebar>
			<WithContentSidebarBody>
				<p> Challenges go in here </p>
			</WithContentSidebarBody>
		</WithContentColumned>
	</WithMenuDialog>
);

export default Challenges;

