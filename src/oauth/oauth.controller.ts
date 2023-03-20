import { Controller, Get, Inject } from '@nestjs/common';
import { Redirect } from '@nestjs/common/decorators';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(
    @Inject('OauthService')
    private readonly oauthService: OauthService,
  ) {}

  @Get('/')
  @Redirect()
  getAuthCodeFromKakao() {
    return this.oauthService.getAuthCodeFromKakao();
  }
}
