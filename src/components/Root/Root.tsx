import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

const Root: React.FC = () => {
  const authVal = useSelector(selectAuth);
  switch (authVal) {
    case isAuthenticated.loggedIn:
      return <div /> //TODO show rules//<Redirect to="/register" />;
      //TODO this redirect should be replaced with a rules component
    case isAuthenticated.challengeReady:
      return <Redirect to="/challenges" />;
    case isAuthenticated.loggedOut:
      return <Redirect to="/login" />;
    default: return <div />
  }
};
export default Root;
