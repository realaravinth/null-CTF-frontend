import React from 'react';


const WithMenuOuter: React.FunctionComponent= ({children})=> (
	<div className="menuouter">
		{ children }
	</div>
);

export default WithMenuOuter;

