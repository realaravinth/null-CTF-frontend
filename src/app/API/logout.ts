import API from './api';

export const logout = () =>
  fetch(API.LOGOUT, {
    credentials: 'include',
  }).then(response => response.json());
