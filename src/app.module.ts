import { Module } from '@nestjs/common';
import { QrcodeModule } from './qrcode/qrcode.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [QrcodeModule, ConfigurationModule, DatabaseModule],
})
export class AppModule {}
