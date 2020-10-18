type apiEndpoints = {
  GET_CHALLENGES: string;
  LOGIN: string;
  LOGOUT: string;
  CHECK_RESPONSE: string;
  LEADERBOARD: string;
};

const API: apiEndpoints = {
  GET_CHALLENGES: '/api/get-challenges',
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  CHECK_RESPONSE: '/api/check-response',
  LEADERBOARD: '/api/leaderboard',
};

export default API;
