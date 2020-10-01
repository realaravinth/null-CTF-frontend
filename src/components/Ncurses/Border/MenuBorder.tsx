import React from 'react';

//Components
import MenuBottomBorder from './MenuBottomBorder';
import MenuTopBorder from './MenuTopBorder';

const MenuBorder: React.FunctionComponent = ()=> (
	<div>
		<MenuTopBorder />
		<MenuBottomBorder />
	</div>
);

export default MenuBorder;

