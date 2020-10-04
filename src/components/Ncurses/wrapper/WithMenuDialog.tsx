import React from 'react';

//components
import WithMenuOuter from  './WithMenuOuter';

export enum menuDialogSize {
	big,
	small,
	mobile
}

type WithMenuDialogProps = {
	size: menuDialogSize
}


const WithMenuDialog: React.FC<WithMenuDialogProps> = ({ size, children })=> {

	let classes = "menudialog"

	if(size === menuDialogSize.big) {
		classes += " menudialogbig";
	}
	if(size === menuDialogSize.mobile) {
			classes += " menudialogmobile";
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

