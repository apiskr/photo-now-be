import axios from 'axios';
const BASE_URL = 'https://kauth.kakao.com';
const ROUTE = '/oauth';

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

const postKakaoToken = async (
  client_id: string,
  redirect_uri: string,
  code: string,
) => {
  return await kakaoInstance.post(
    `${ROUTE}/token`,
    {
      grant_type: 'authorization_code',
      client_id,
      redirect_uri,
      code,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
};

export const kakao = { getAuthCode, postKakaoToken };
