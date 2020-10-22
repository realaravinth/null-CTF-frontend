type apiEndpoints = {
  GET_CHALLENGES: string;
  LOGIN: string;
  REGISTER: string;
  LOGOUT: string;
  CHECK_RESPONSE: string;
  LEADERBOARD: string;
  GET_STATE: string;
};

const API: apiEndpoints = {
  GET_CHALLENGES: 'http://localhost:8080/api/get-challenges',
  LOGIN: 'http://localhost:8080/api/login',
  REGISTER: '/api/register',
  LOGOUT: '/api/logout',
  CHECK_RESPONSE: '/api/check-response',
  LEADERBOARD: '/api/leaderboard',
  GET_STATE: 'http://localhost:8080/api/get-state',
};

export default API;
