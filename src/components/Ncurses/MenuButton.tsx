import React from 'react';

//components
import MenuTopBorder from './Border/MenuTopBorder';

const MenuButton: React.FunctionComponent = ({ children })=> (
	<div className="menubuttons">
		<MenuTopBorder />
		{children}
	</div>

);

export default MenuButton;

