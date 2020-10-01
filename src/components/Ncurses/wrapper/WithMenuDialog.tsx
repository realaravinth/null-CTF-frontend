import React from 'react';

type MenuLayoutProps  = {
  isChallenges: boolean;
}

const WithMenuDialog: React.FunctionComponent<MenuLayoutProps> = ({ isChallenges, children })=> (
	<div className="menudialog">
		{ children }
	</div>

);

export default WithMenuDialog;

