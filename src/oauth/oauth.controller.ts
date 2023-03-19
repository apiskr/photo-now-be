import { Controller, Get, Inject } from '@nestjs/common';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(
    @Inject('OauthService')
    private readonly oauthService: OauthService,
  ) {}

  @Get('/')
  getAuthCodeFromKakao() {
    return this.oauthService.getAuthCodeFromKakao();
  }
}
