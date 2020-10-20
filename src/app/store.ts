import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {authSlice} from './reducers/authSlice';
import {startTimeSlice} from './reducers/startTimeSlice';
import {loadState} from './utils/persistState';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    authenticator: authSlice.reducer,
    startTimesetter: startTimeSlice.reducer,
  },
  preloadedState: persistedState,
});

type AppDisatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDisatch>();
export type RootState = ReturnType<typeof store.getState>;
