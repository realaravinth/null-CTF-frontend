import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

const Root: React.FC = () => {
  const authVal = useSelector(selectAuth);
  switch (authVal) {
    case isAuthenticated.loggedIn:
      return <Redirect to="/register" />;
    case isAuthenticated.registered:
      //TODO this redirect should be replaced with a rules component
      return <Redirect to="/challenges" />;
    case isAuthenticated.challengeReady:
      return <Redirect to="/challenges" />;
    case isAuthenticated.loggedOut:
      return <Redirect to="/login" />;
  }
};
export default Root;
