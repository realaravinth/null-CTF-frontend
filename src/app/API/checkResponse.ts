import API from './api';

export const checkResponse = (payload: string) =>
  fetch(API.CHECK_RESPONSE, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: payload,
  }).then(response => response.json());
