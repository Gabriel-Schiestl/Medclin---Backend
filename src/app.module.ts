import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './modules/user/infra/models/user.model';
import { ClinicModule } from './modules/clinic/clinic.module';
import { ClinicModel } from './modules/clinic/infra/models/clinic.model';
import { SpecialityModel } from './modules/clinic/infra/models/speciality.model';
import { DocumentModel } from './modules/clinic/infra/models/document.model';
import { MedCardModel } from './modules/clinic/infra/models/medcard.model';
import { AppDataSource } from 'ormconfig';

@Module({
  imports: [
    UserModule,
    ClinicModule,
    TypeOrmModule.forRoot(AppDataSource.options),
  ],
})
export class AppModule {}
