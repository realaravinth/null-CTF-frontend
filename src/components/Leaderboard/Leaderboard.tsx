import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

//Componenets:

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';

const Leaderboard: React.FC = () => {
  const authState = useSelector(selectAuth);

  if (authState === isAuthenticated.challengeReady) {
    return (
      <WithMenuDialog
        size={menuDialogSize.big}
        menuTitle={'Leaderboard'}
        pageTitle={'Leaderboard'}
        topText={'Top 10 scores: '}>
        <WithContentContainer>
          <p> Scorecard goes here </p>
        </WithContentContainer>
      </WithMenuDialog>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Leaderboard;
