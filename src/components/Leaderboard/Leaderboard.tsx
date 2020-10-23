import React, {useEffect, useState} from 'react';
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
  const [leaderboard, setLeaderboard] = useState([{}]);
  const [userScore, setUserScore] = useState('');


  useEffect(() => {
    getLeaderboard()
  });


  const getLeaderboard = () => {
    fetch('localhost:8080/api/leaderboard', {
      credentials: 'include',
    })
      .then(result => result.json())
      .then(leaderboardVals => {
        leaderboardVals.topTwenty.map((person: any) => {
          let prevState = leaderboard;
          prevState.push({name: person.name, score: person.score});
          setLeaderboard(prevState);
        });
        setUserScore(leaderboardVals.you.score);
      });
  };

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
