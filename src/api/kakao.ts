import axios from 'axios';
const BASE_URL = 'https://kauth.kakao.com/';
const ROUTE = 'oauth';

const kakaoInstance = axios.create({
  baseURL: BASE_URL,
});

export type ResGetAuthCode = { url: string };

const getAuthCode = (
  KAKAO_API_KEY: string,
  REDIRECT_URI: string,
): ResGetAuthCode => {
  return {
    url: `${BASE_URL}${ROUTE}/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
  };
};

export const kakao = { getAuthCode };
