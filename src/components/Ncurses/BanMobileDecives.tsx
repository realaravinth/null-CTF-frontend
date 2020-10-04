import React from 'react';

//Componenets:
import Title from '../Title';

import MenuTitle from './MenuTitle';
import MenuTopText from './MenuTopText';

import WithContentContainer from './wrapper/WithContentContainer';
import WithMenuDialog, { menuDialogSize } from './wrapper/WithMenuDialog';


const BanMobileDevices: React.FunctionComponent = () => (
	<WithMenuDialog size={menuDialogSize.mobile} >
		<MenuTitle title={"Error"} />
		<MenuTopText text={"Mobile devices are not supported. We regret the inconvenience caused."} />
		<WithContentContainer>
			 <p> This CTF relies heavily on the functionality provided by
			 desktop computers so please visit us from a desktop computer </p>
		</WithContentContainer>
		<Title location={"Error"} />
	</WithMenuDialog>
);


export default BanMobileDevices;

