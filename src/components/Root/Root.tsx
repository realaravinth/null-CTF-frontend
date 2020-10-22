import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {selectAuth, thunkedGetState, isAuthenticated} from '../../app/reducers/authSlice';
import {selectChallenge, fetchChallenges} from '../../app/reducers/challengeSlice';
import {store, useAppDispatch} from '../../app/store';

const Root: React.FC = () => {
  const authVal = useSelector(selectAuth);
  
  switch (authVal) {
    case isAuthenticated.loggedIn:
      return <Redirect to="/loading" /> //TODO show rules//<Redirect to="/register" />;
      //TODO this redirect should be replaced with a rules component
    case isAuthenticated.challengeReady:
      return <Redirect to="/challenges" />;
    case isAuthenticated.loggedOut:
      return <Redirect to="/login" />;
    case isAuthenticated.timerOver:
      return <Redirect to="/logout" />;
    case isAuthenticated.tooEarly:
      return <Redirect to="/logout" />;
  }
};
export default Root;
