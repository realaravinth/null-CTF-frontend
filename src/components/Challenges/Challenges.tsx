import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

//Componenets:
import WithContentColumned from '../Ncurses/wrapper/WithContentColumned';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';
import WithContentSidebar from '../Ncurses/wrapper/WithContentSidebar';
import WithContentSidebarBody from '../Ncurses/wrapper/WithContentSidebarBody';

const Challenges: React.FC = () => {
  const authState = useSelector(selectAuth);

  if (authState === isAuthenticated.challengeReady) {
    return (
      <WithMenuDialog
        size={menuDialogSize.big}
        menuTitle={'Challenges'}
        topText={
          'Solve these challges to find flags. Flags will be in the form nCTF{secret-goes-in-here}'
        }
        pageTitle={'Challenges'}>
        <WithContentColumned>
          <WithContentSidebar>
            <p> List of Challenges go in here </p>
          </WithContentSidebar>
          <WithContentSidebarBody>
            <p> Challenges go in here </p>
          </WithContentSidebarBody>
        </WithContentColumned>
      </WithMenuDialog>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Challenges;
