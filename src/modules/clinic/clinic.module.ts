import { Module } from "@nestjs/common";
import { ClinicService } from "./application/clinic.service";
import { TypeOrmClinicRepository } from "./infra/repository/clinicRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClinicModel } from "./infra/models/clinic.model";
import { ClinicController } from "./clinic.controller";
import { SpecialityModel } from "./infra/models/speciality.model";

@Module({
    imports: [TypeOrmModule.forFeature([ClinicModel, SpecialityModel])],
    controllers: [ClinicController],
    providers: [
        ClinicService,
        {
            provide: 'IClinicRepository',
            useClass: TypeOrmClinicRepository
        }
    ],
})
export class ClinicModule{}