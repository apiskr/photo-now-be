import axios from 'axios';

const BASE_URL = 'kauth.kakao.com';

export const kakao = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
});
