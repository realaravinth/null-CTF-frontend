import React from 'react';

//components
import MenuBorder from './Border/MenuBorder';
type MenuTitleProps  = {
  title: string;
}

const MenuTitle: React.FunctionComponent<MenuTitleProps> = ({ title})=> (
	<div className="menuheader">
		<span>{ title }</span>
		<MenuBorder />
	</div>
);

export default MenuTitle;

