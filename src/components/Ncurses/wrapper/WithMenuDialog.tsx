import React from 'react';

//components
import WithMenuOuter from  './WithMenuOuter';

type MenuLayoutProps  = {
  isChallenges: boolean;
}

const WithMenuDialog: React.FunctionComponent<MenuLayoutProps> = ({ isChallenges, children })=> (
	<div className="menudialog">
		<WithMenuOuter>
				{ children }
		</WithMenuOuter>
	</div>

);

export default WithMenuDialog;

