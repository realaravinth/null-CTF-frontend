import {createSlice} from '@reduxjs/toolkit';
import State from '../state';

export interface authState {
  value: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false,
  },
  reducers: {
    log_in: state => {
      state.value = true;
    },
    log_out: state => {
      state.value = false;
    },
  },
});

export const {log_in, log_out} = authSlice.actions;

export const selectAuth = (state: State) => state.auth.value;

export default authSlice.reducer;
