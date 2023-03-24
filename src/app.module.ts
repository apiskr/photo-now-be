import { Module } from '@nestjs/common';
import { QrcodeModule } from './qrcode/qrcode.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { OauthModule } from './oauth/oauth.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    QrcodeModule,
    ConfigurationModule,
    DatabaseModule,
    OauthModule,
    PhotoModule,
  ],
})
export class AppModule {}
