import React from 'react';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';

const Loading: React.FC = () => (
  <WithMenuDialog
    size={menuDialogSize.mobile}
    menuTitle={'Loading'}
    topText={'Please wait while we set things up'}
    pageTitle={'Loading'}>
    <WithContentContainer>
      <p></p>
    </WithContentContainer>
  </WithMenuDialog>
);

export default Loading;
