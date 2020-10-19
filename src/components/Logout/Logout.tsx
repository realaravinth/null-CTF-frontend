import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {useAppDispatch} from '../../app/store';
import {
  selectAuth,
  setLoggedOut,
  isAuthenticated,
} from '../../app/reducers/authSlice';

import logout from '../../app/API/logout';

const Logout: React.FC = () => {
  const authState = useSelector(selectAuth);
  const dispatch = useAppDispatch();

  if (authState === isAuthenticated.challengeReady) {
    logout();
    dispatch(setLoggedOut());
  }

  return <Redirect to="/login" />;
};
export default Logout;
