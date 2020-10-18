import API from './api';

export const getChallenges = () =>
  fetch(API.GET_CHALLENGES, {
    credentials: 'include',
  }).then(response => response.json());
