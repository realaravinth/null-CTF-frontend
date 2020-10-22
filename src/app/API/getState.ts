import API from './api';

export const getState = () =>
   fetch(API.GET_STATE, {
    method: 'get',
    credentials: 'include',
  }).then(response => response.json());
