import { Injectable } from '@nestjs/common';
import { kakao } from 'src/api/core/kakao';
import { ConfigService } from '@nestjs/config';

const ROUTE = '/oauth';

@Injectable()
export class OauthService {
  // [Todo] 의존성 주입을 어덯게 하지
  constructor(private readonly configService: ConfigService) {}

  async getAuthCodeFromKakao() {
    const KAKAO_API_KEY = this.configService.get<string>('KAKAO_API_KEY');
    const REDIRECT_URI = this.configService.get<string>('REDIRECT_URI');

    return await kakao.get(
      `${ROUTE}/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
    );
  }
}
