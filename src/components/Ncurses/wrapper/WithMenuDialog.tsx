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
  loading,
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
  if (size === menuDialogSize.loading) {
    classes += ' menudialogloading';
  }

  return (
    <div className={classes}>
      <WithMenuOuter size={size}>
        <MenuTitle title={menuTitle} />
        <MenuTopText text={topText} />
        <PageTitle location={pageTitle} />
        {children}
      </WithMenuOuter>
    </div>
  );
};

export default WithMenuDialog;
