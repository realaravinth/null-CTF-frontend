import {
  createSlice,
  nanoid,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';

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

export type answerUpdate = {
  id: number;
  challengeAnswer: string;
};

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    addChallenge: (state, action: PayloadAction<challenge[]>) => {
      state.value = action.payload;
    },
    addAnswer: (state, action: PayloadAction<answerUpdate>) => {
      let prevState = state.value;
      if (prevState !== null) {
        prevState[action.payload.id -1].challengeAnswer  = action.payload.challengeAnswer;
        state.value = prevState;
//        //(c => {
//          if (c.id === action.payload.id) {
//            c.challengeAnswer = action.payload.challengeAnswer;
//            return c;
//          } else return c;
//        });
      }
    },
  },
});

export const {addChallenge, addAnswer} = challengeSlice.actions;

export const thunkedGetChallenges = () => (dispatch: any) =>
  getChallenges()
    .then(res => {
      if (res.status === 200) return res.json();
    })
    .then(res => dispatch(addChallenge(res)));

export const fetchChallenges = () => async () => {
  const response = await (await getChallenges()).json();
  return response;
};

export const selectChallenge = (state: RootState) => state.challenges.value;

export const currentQAnswer = (c: challengeState, id: number) => {
  if (c.value !== null)
    return c.value[id].challengeAnswer;
  else return '';
};

export default challengeSlice.reducer;
