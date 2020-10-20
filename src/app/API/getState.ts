import API from './api';

export const getChallenges = () =>
  fetch(API.GET_STATE, {
    credentials: 'include',
  }).then(response => response.json());
