import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export type startTimeState = {
  value: null | number;
};

const initialState: startTimeState = {
  value: null, //Math.floor(Date.now() / 1000)
};

export const startTimeSlice = createSlice({
  name: 'startTime',
  initialState,
  reducers: {
    set_start_time: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {set_start_time} = startTimeSlice.actions;

export const selectstartTime = (state: RootState) =>
  state.startTimesetter.value;

export default startTimeSlice.reducer;
