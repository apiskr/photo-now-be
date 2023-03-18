import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

// [Todo] QRTiget api 명세 보고 구체화하기
@Entity('QrcodeEntity')
export class QrcodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  image: any;
}
