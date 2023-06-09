import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ResGetAuthCode } from 'src/api/kakao';
import { kakao } from 'src/api/kakao';

@Injectable()
export class KakaoService {
  private KAKAO_API_KEY: string;
  private REDIRECT_URI: string;

  public constructor(private readonly configService: ConfigService) {
    this.KAKAO_API_KEY = this.configService.get<string>('KAKAO_API_KEY');
    this.REDIRECT_URI = this.configService.get<string>('REDIRECT_URI');
  }

  public openKakaoSignIn(): ResGetAuthCode {
    return kakao.getAuthCode(this.KAKAO_API_KEY, this.REDIRECT_URI);
  }

  public async getTokenFromKakao(code: string) {
    // 응답을 받아 토큰을 저장한다
    return await this.postKakaoToken(code);
  }

  private async postKakaoToken(code: string) {
    const res = await kakao.postKakaoToken(
      this.KAKAO_API_KEY,
      this.REDIRECT_URI,
      code,
    );
    return res.data;
  }

  // [Todo] error 출력 확인해보기
  public failKakaoSignIn(error: string) {
    return { error };
  }
}
