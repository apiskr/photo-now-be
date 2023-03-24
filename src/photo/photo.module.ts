import { Module } from '@nestjs/common';
import { photoProviders } from './photo.provider';
import { PhotoService } from './photo.service';
import { DatabaseModule } from 'src/database/database.module';
import { PhotoController } from './photo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    { provide: 'PhotoService', useClass: PhotoService },
    ...photoProviders,
  ],
  exports: [{ provide: 'PhotoService', useClass: PhotoService }],
  controllers: [PhotoController],
})
export class PhotoModule {}
