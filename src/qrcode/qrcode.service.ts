import { Injectable, Inject, ForbiddenException } from '@nestjs/common';
import { CreateQrcodeDto } from './dto/CreateQrcode.dto';
import { QrcodeEntity } from './entities/Qrcode.entity';
import { qrtiger } from 'src/api/qrtiger';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QrcodeService {
  public constructor(private readonly configService: ConfigService) {}

  public async createQrcode(id: string) {
    const QRCODE_API_KEY = this.configService.get<string>('QRCODE_API_KEY');
    const res = await qrtiger.createStaticQrCode(QRCODE_API_KEY, id);
    if (res.data.status === 403)
      throw new ForbiddenException('접근 권한이 없습니다.');
    return res.data?.url; // qrcode를 저장해놓고 뿌리기? 아니면 바로 요청?
  }
}
