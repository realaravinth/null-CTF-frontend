import API from './api';

export type registerationRequestPayload = {
  nickname: string;
  email: string;
};


export type registerationResponsePayload = {
  error: string[];
};


export const register = (payload: registerationRequestPayload) =>
  fetch(API.REGISTER, {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(payload),
  }).then(response => response.json());
