import { Module } from "@nestjs/common";
import { ClinicService } from "./application/clinic.service";
import { TypeOrmClinicRepository } from "./infra/repository/clinicRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClinicModel } from "./infra/models/clinic.model";
import { ClinicController } from "./clinic.controller";
import { SpecialityModel } from "./infra/models/speciality.model";
import { DocumentModel } from "./infra/models/document.model";
import { MedCardModel } from "./infra/models/medcard.model";

@Module({
    imports: [TypeOrmModule.forFeature([ClinicModel, SpecialityModel, DocumentModel, MedCardModel])],
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