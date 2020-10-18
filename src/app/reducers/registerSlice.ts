import {createSlice} from '@reduxjs/toolkit';

export interface registeredState {
  value: boolean;
}

export const registeredSlice = createSlice({
  name: 'registered',
  initialState: {
    value: false,
  },
  reducers: {
    registered : (state) => {
      state.value = true;
    },
  },
});

export const registered = registeredSlice.actions.registered;

//export const selectregistered = (state: State) => state.registered.value;

export default registeredSlice.reducer;
