import API from './api';

export type loginRequestPayload = {
  userID: string;
};

export const login = (payload: loginRequestPayload) =>
  fetch(API.LOGIN, {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(payload),
  }).then(response => response.json());
