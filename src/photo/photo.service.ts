import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { join as pathJoin } from 'path';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PhotoService {
  public constructor(
    @Inject('PhotoRepository')
    private readonly photoRepository: Repository<PhotoEntity>,
  ) {}

  public getPhotoPath(id: string) {
    return pathJoin(process.cwd(), 'uploads', id);
  }

  public async createPhotoEntity(
    photo: Express.Multer.File,
    password: number,
  ): Promise<PhotoEntity> {
    const hashedPassword = await bcrypt.hash(String(password), 10);
    const pathOfPhoto = pathJoin(process.cwd(), 'uploads', photo.filename);
    const photoEntity = this.photoRepository.create({
      pathOfPhoto,
      hashedPassword,
    });
    await this.photoRepository.save(photoEntity);
    return photoEntity;
  }
}
