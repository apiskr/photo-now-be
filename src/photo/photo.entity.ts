import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

// [Todo] QRTiget api 명세 보고 구체화하기
@Entity('PhotoEntity')
export class PhotoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pathOfPhoto: string;

  @Column()
  hashedPassword: string;
}
