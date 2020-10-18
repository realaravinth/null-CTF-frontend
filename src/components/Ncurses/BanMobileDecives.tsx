import React from 'react';

//Componenets:

import WithContentContainer from './wrapper/WithContentContainer';
import WithMenuDialog, {menuDialogSize} from './wrapper/WithMenuDialog';

const BanMobileDevices: React.FunctionComponent = () => (
  <WithMenuDialog
    size={menuDialogSize.mobile}
    menuTitle={'Error'}
    topText={
      'Mobile devices are not supported. We regret the inconvenience caused.'
    }
    pageTitle={'Error'}>
    <WithContentContainer>
      <p>
        This CTF relies heavily on the functionality provided by browsers on
        desktop computers so please visit us from a desktop computer
      </p>
    </WithContentContainer>
  </WithMenuDialog>
);

export default BanMobileDevices;
