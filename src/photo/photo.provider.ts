import { DataSource } from 'typeorm';
import { PhotoEntity } from './photo.entity';

export const photoProviders = [
  {
    provide: 'PhotoRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PhotoEntity),
    inject: ['DATA_SOURCE'],
  },
];
