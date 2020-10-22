import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';

import {getState} from '../API/getState';

export interface authState {
  value: isAuthenticated;
}

export enum isAuthenticated {
  loggedOut,
  loggedIn,
  timerOver,
  tooEarly,
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
    setTimeOver: state => {
      state.value = isAuthenticated.timerOver;
    },
    setTooEarly: state => {
      state.value = isAuthenticated.tooEarly;
    },
    setChallengeReady: state => {
      state.value = isAuthenticated.challengeReady;
    },
  },
});

export const {
  setLoggedIn,
  setLoggedOut,
  setChallengeReady,
  setTooEarly,
  setTimeOver,
} = authSlice.actions;

export const thunkedGetState = () => (
  dispatch: any,
) =>
  getState().then((res: any) => {
    if (res.status === 200) {
      dispatch(setLoggedIn());
    }
  });

export const selectAuth = (state: RootState) => state.authenticator.value;

export default authSlice.reducer;
