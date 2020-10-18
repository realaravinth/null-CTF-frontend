import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//import State from '../state';

export interface startTimeState {
  value: Time;
}

enum Time {
  null,
  number,
}

export const startTimeSlice = createSlice({
  name: 'startTime',
  initialState: {
    value: Time.null,
  },
  reducers: {
    set_start_time: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {set_start_time} = startTimeSlice.actions;

//export const selectstartTime = (state: State) => state.startTime.value;

export default startTimeSlice.reducer;
