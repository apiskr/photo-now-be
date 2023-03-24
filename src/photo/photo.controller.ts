import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  Inject,
  Res,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Response } from 'express';

@Controller('photo')
export class PhotoController {
  constructor(
    @Inject('PhotoService')
    private readonly photoService: PhotoService,
  ) {}

  @Get('/')
  getPhoto(@Res() res: Response, @Query('id', ParseIntPipe) id: string) {
    res.sendFile(this.photoService.getPhotoPath(id));
  }
}
