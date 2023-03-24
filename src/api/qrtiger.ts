import axios from 'axios';
const BASE_URL = 'https://qrtiger.com';

const qrtigerInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: BASE_URL,
});

const createStaticQrCode = async (QRCODE_API_KEY: string, id: string) => {
  return await qrtigerInstance.post(
    // [Todo] config를 어디서 관리해주어야 할까
    '/api/qr/static',
    {
      qrCategory: 'url',
      text: `${process.env.ORIGIN_URI}/qrcode?id=${id}`,
      size: 500,
      qrData: 'pattern2',
      eye_outer: 'eyeOuter2',
      eye_inner: 'eyeInner2',
      backgroundColor: 'rgb(255,255,255)',
      transparentBkg: false,
    },
    {
      headers: { Authorization: `Bearer ${QRCODE_API_KEY}` },
    },
  );
};

export const qrtiger = { createStaticQrCode };
