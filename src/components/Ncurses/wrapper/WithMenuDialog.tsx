import React from 'react';

//components
import WithMenuOuter from  './WithMenuOuter';

const WithMenuDialog: React.FC = ({ children })=> (
	<div className="menudialog">
		<WithMenuOuter>
				{ children }
		</WithMenuOuter>
	</div>
	);

export default WithMenuDialog;

