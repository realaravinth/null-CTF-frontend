import React from 'react';

type MenuTitleProps  = {
  title: string;
}

const MenuTitle: React.FunctionComponent<MenuTitleProps> = ({ title})=> (
	<div className="menuheader">
		<span>{ title }</span>
	</div>
);

export default MenuTitle;

