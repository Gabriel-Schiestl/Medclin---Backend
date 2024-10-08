import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClinicModel } from 'src/modules/clinic/infra/models/clinic.model';
import { DocumentModel } from 'src/modules/clinic/infra/models/document.model';
import { MedCardModel } from 'src/modules/clinic/infra/models/medcard.model';
import { SpecialityModel } from 'src/modules/clinic/infra/models/speciality.model';
import { UserModel } from 'src/modules/user/infra/models/user.model';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

export const OrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'medclin',
  synchronize: false,
  logging: false,
  migrations: ['dist/src/migrations/**/*.{ts,js}'],
  entities: [
    path.join(__dirname, 'src/modules/**/infra/models/*.model.{js,ts}'),
  ],
};

export const AppDataSource = new DataSource({
  ...OrmConfig,
});
