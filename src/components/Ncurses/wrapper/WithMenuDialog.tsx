import React from 'react';

//components
import WithMenuOuter from './WithMenuOuter';
import PageTitle from '../PageTitle';

import MenuTitle from '../MenuTitle';
import MenuTopText from '../MenuTopText';

export enum menuDialogSize {
  big,
  small,
  mobile,
}

type WithMenuDialogProps = {
  size: menuDialogSize;
  topText: string;
  pageTitle: string;
  menuTitle: string;
};

const WithMenuDialog: React.FC<WithMenuDialogProps> = ({
  menuTitle,
  pageTitle,
  topText,
  size,
  children,
}) => {
  let classes = 'menudialog';

  if (size === menuDialogSize.big) {
    classes += ' menudialogbig';
  }
  if (size === menuDialogSize.mobile) {
    classes += ' menudialogmobile';
  }
  return (
    <div className={classes}>
      <WithMenuOuter>
        <MenuTitle title={menuTitle} />
        <MenuTopText text={topText} />
        <PageTitle location={pageTitle} />
        {children}
      </WithMenuOuter>
    </div>
  );
};

export default WithMenuDialog;
