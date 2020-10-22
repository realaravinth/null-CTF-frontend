import {createSlice,nanoid, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

import {getChallenges} from '../API/getChallenges';

export interface challengeState {
  value: null | challenge[];
}

export type challenge = {
  id: number;
  challengeTitle: string;
  challengeBody: string;
  challengeAnswer: string;
  score: number;
};

const initialState: challengeState = {
  value: null,
};

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    addChallenge: (state, action: PayloadAction<challenge[]>) => {
        state.value = action.payload;
    },
    addAnswer: (state, action: PayloadAction<challenge>) => {
      let prevState = state.value;
      if (prevState !== null) {
        state.value = prevState.map(c => {
          if (c.id === action.payload.id) return action.payload;
          else return c;
        });
      }
    },
  },
});

export const {addChallenge, addAnswer} = challengeSlice.actions;

export const thunkedGetChallenges = () => (dispatch: any) =>
  getChallenges().then((res) => {
    if(res.status === 200 )
      return res.json()}).then((res) =>
      dispatch(addChallenge(res)));


export const fetchChallenges = () => async () => {
  const response = await ( await getChallenges()).json();
  return response;
}

export const selectChallenge = (state: RootState) => state.challenges.value;

export default challengeSlice.reducer;
