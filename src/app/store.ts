import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {authSlice} from './reducers/authSlice';
import {startTimeSlice} from './reducers/startTimeSlice';
import {registeredSlice} from './reducers/registerSlice';

const store = configureStore({
  reducer: {
    authenticator: authSlice.reducer,
    startTimesetter: startTimeSlice.reducer,
    registered: registeredSlice.reducer
  },
});

export type AppDisatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDisatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
