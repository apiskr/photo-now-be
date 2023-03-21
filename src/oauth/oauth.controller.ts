import { Controller, Get, Inject } from '@nestjs/common';
import { Body, Redirect } from '@nestjs/common/decorators';
import { OauthService } from './oauth.service';

const KAKAO = 'kakao';

@Controller('oauth')
export class OauthController {
  constructor(
    @Inject('OauthService')
    private readonly oauthService: OauthService,
  ) {}

  @Get(`/${KAKAO}`)
  @Redirect()
  getAuthCodeFromKakao() {
    return this.oauthService.getAuthCodeFromKakao();
  }

  @Get(`/${KAKAO}/redirect`)
  redirectFromKakao(@Body() res) {
    return this.oauthService.redirectFromKakao(res);
  }
}
