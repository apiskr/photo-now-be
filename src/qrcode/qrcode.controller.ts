import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  Res,
  ParseFilePipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoService } from 'src/photo/photo.service';
import { CreateQrcodeDto } from './dto/CreateQrcode.dto';
import { QrcodeEntity } from './entities/Qrcode.entity';
import { QrcodeService } from './qrcode.service';

// [Temp] 우선 User가 없는 형태의 qrcode CRUD 방식
@Controller('qrcode')
export class QrcodeController {
  constructor(
    @Inject('QrcodeService')
    private readonly qrcodeService: QrcodeService,
    @Inject('PhotoService')
    private readonly photoService: PhotoService,
  ) {}

  @Get('/')
  getQrcode(@Param('id', ParseIntPipe) id: number): Promise<QrcodeEntity> {
    // [Todo] id에 맞는 qrcode를 해당 반환
    return;
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('photo'))
  async createQrcode(
    // [Todo] DTO로 빼기
    @UploadedFile(ParseFilePipe) photo: Express.Multer.File,
    @Body('password', ParseIntPipe) password: number,
  ) {
    // [Error] 400에러여도 이미지가 저장되고 있음
    const { id } = await this.photoService.createPhotoEntity(photo, password);
    // [Todo] http response 인터페이스 있는지 확인하기
    return this.qrcodeService.createQrcode(id);
  }
}
