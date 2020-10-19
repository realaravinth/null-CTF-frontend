import API from './api';

const logout = () =>
  fetch(API.LOGOUT, {
    credentials: 'include',
  }).then(response => response.json());

export default logout;
