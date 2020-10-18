import API from './api';

const getLeaderboard = () =>
  fetch(API.GET_CHALLENGES, {
    credentials: 'include',
  }).then(response => response.json());
