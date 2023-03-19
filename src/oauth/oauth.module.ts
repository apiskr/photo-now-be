import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';

@Module({
  controllers: [OauthController],
  providers: [{ provide: 'OauthService', useClass: OauthService }],
})
export class OauthModule {}
