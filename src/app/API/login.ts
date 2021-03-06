import API from './api';

export type loginRequestPayload = {
  userID: string;
};

export type loginResponsePayload = {
  startTime: string;
};

export const login = async (payload: loginRequestPayload) =>
  fetch(API.LOGIN, {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(payload),
  });
