import React from 'react';

import ProgressBar from './ProgressBar';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';

const Loading: React.FC = () => (
  <WithMenuDialog
    size={menuDialogSize.loading}
    menuTitle={'Loading'}
    topText={''}
    pageTitle={'Loading'}>
    <ProgressBar completed={100} />
  </WithMenuDialog>
);

export default Loading;
