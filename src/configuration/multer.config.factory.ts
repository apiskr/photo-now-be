import { Logger } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';

const UPLOAD_PATH = 'uploads';
const MAX_LENGTH_FILE_NAME = 15;

// uploads 폴더가 존재하지 않으면 폴더를 생성하고, 존재하면 생성하지 않습니다.
const mkdir = (directory: string) => {
  const logger = new Logger('Mkdir');

  try {
    fs.readdirSync(path.join(process.cwd(), directory));
  } catch (err) {
    logger.log(
      `지정한 경로에 ${directory}가 존재하지 않아 ${directory}를 생성합니다.`,
    );
    fs.mkdirSync(path.join(process.cwd(), directory));
  }
};

mkdir(UPLOAD_PATH);

export const multerOptionsFactory = (): MulterOptions => {
  return {
    storage: multer.diskStorage({
      destination(req, file, done) {
        // 파일을 저장할 위치를 설정합니다
        done(null, path.join(process.cwd(), UPLOAD_PATH));
      },
      // [Todo] 파일 확장자 필터 적용하기
      filename(req, file, done) {
        // 파일의 이름을 설정합니다.
        const ext = path.extname(file.originalname); // 파일 확장자 추출
        const basename = path
          .basename(file.originalname, ext)
          .slice(0, MAX_LENGTH_FILE_NAME);
        done(null, `${basename}_${Date.now()}${ext}`);
      },
    }),
    // limits: { fileSize: 10 * 1024 * 1024 }, // 10MB로 크기를 제한
  };
};
