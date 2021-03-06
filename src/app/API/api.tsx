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
  GET_CHALLENGES: '/api/get-challenges',
  LOGIN: '/api/login',
  REGISTER: '/api/register',
  LOGOUT: '/api/logout',
  CHECK_RESPONSE: '/api/check-response',
  LEADERBOARD: '/api/leaderboard',
  GET_STATE: '/api/get-state',
};

export default API;
