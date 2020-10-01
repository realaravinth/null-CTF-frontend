import React from 'react';

type MenuTopTextProps  = {
  text: string;
}

const MenuTopText: React.FunctionComponent<MenuTopTextProps> = ({ text })=> (
	<div className="menutoptext">
		{ text }
	</div>

);

export default MenuTopText;

