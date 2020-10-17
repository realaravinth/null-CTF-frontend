import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authSlice } from './reducers/authSlice';
import { startTimeSlice } from './reducers/startTimeSlice';

const store =  configureStore({
  reducer: {
	  authenticator: authSlice.reducer,
	  startTimesetter: startTimeSlice.reducer
  },
});

export type AppDisatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDisatch>();
export type RoorState = ReturnType<typeof store.getState>;

export default store;
