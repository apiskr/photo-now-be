import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQrcodeDto } from './dto/CreateQrcode.dto';
import { QrcodeEntity } from './entities/Qrcode.entity';

// [Temp] 우선 User가 없는 형태의 qrcode CRUD 방식

@Controller('qrcode')
export class QrcodeController {
  // constructor() [Todo] 서비스 붙이기

  @Get('/:id')
  getQrcode(@Param('id', ParseIntPipe) id: number): Promise<QrcodeEntity> {
    // [Todo] id에 맞는 qrcode를 해당 반환
    return;
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createQrcode(
    @Body() createQrcodeDto: CreateQrcodeDto,
  ): Promise<QrcodeEntity> {
    // [Todo] id에 맞는 qrcode를 생성 후 반환
    return;
  }
}
