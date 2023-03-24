import { Module } from '@nestjs/common';
import { PhotoModule } from 'src/photo/photo.module';
import { QrcodeController } from './qrcode.controller';
import { QrcodeService } from './qrcode.service';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptionsFactory } from 'src/configuration/multer.config.factory';

@Module({
  imports: [
    PhotoModule,
    MulterModule.registerAsync({
      useFactory: multerOptionsFactory,
    }),
  ],
  controllers: [QrcodeController],
  providers: [{ provide: 'QrcodeService', useClass: QrcodeService }],
})
export class QrcodeModule {}
