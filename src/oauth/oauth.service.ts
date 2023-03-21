import { Injectable } from '@nestjs/common';
import { kakao } from 'src/api/kakao';
import { ConfigService } from '@nestjs/config';
import { ResGetAuthCode } from 'src/api/kakao';

@Injectable()
export class OauthService {
  constructor(private readonly configService: ConfigService) {}

  getAuthCodeFromKakao(): ResGetAuthCode {
    const KAKAO_API_KEY = this.configService.get<string>('KAKAO_API_KEY');
    const REDIRECT_URI = this.configService.get<string>('REDIRECT_URI');
    return kakao.getAuthCode(KAKAO_API_KEY, REDIRECT_URI);
  }

  redirectFromKakao(res) {
    console.log(res);
    return null;
  }
}
