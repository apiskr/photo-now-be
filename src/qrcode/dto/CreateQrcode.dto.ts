import { IsNotEmpty } from 'class-validator';

// [Todo] image 주고 받는 형식 공부하기 -> stream 방식?

export class CreateQrcodeDto {
  @IsNotEmpty()
  infoImage: any;
}
