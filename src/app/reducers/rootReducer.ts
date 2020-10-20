import {combineReducers} from 'redux';

import {authSlice} from './authSlice';
import {startTimeSlice} from './startTimeSlice';

const rootReducer = combineReducers({
  authenticator: authSlice.reducer,
  startTimesetter: startTimeSlice.reducer,
});

export default rootReducer;
