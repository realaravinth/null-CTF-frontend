import API from './api';

export const getState = () =>
   fetch(API.GET_STATE, {
    method: 'get',
  }).then(response => response.json());
