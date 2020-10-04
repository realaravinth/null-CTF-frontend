import React from 'react';

//components
import WithMenuOuter from  './WithMenuOuter';

export enum menuDialogSize {
	big,
	small
}

type WithMenuDialogProps = {
	size: menuDialogSize
}


const WithMenuDialog: React.FC<WithMenuDialogProps> = ({ size, children })=> {

	let classes = "menudialog"

	if(size === menuDialogSize.big) {
		classes += " menudialogbig";
	}

	return(
	<div className={classes}>
		<WithMenuOuter>
				{ children }
		</WithMenuOuter>
	</div>
	);

}

export default WithMenuDialog;

