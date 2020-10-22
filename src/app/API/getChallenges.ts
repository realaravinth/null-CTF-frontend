import API from './api';

export const getChallenges = async () => {
   return fetch(API.GET_CHALLENGES, {
    credentials: 'include',
  }).then(data => data.json());
}
