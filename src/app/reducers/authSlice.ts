import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface authState {
  value: isAuthenticated;
}

export enum isAuthenticated {
  loggedOut,
  loggedIn,
  registered,
  challengeReady,
}

const initialState: authState = {
  value: isAuthenticated.loggedOut,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: state => {
      state.value = isAuthenticated.loggedIn;
    },
    setLoggedOut: state => {
      state.value = isAuthenticated.loggedOut;
    },
    setRegistered: state => {
      state.value = isAuthenticated.registered;
    },
    setChallengeReady: state => {
      state.value = isAuthenticated.challengeReady;
    },
  },
});

export const {
  setLoggedIn,
  setLoggedOut,
  setRegistered,
  setChallengeReady,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.authenticator.value;

export default authSlice.reducer;
