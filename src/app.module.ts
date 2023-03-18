import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { QrcodeModule } from './qrcode/qrcode.module';

@Module({
  imports: [QrcodeModule, ConfigModule.forRoot()],
})
export class AppModule {}
