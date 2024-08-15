import { Inject, Injectable } from "@nestjs/common";
import { IClinicRepository } from "../domain/clinic.repository";
import { Clinic } from "../domain/entities/clinic.entity";
import { Address } from "../domain/entities/address.entity";
import { ClinicDto } from "./clinic-dto";

@Injectable()
export class ClinicService {
    constructor(@Inject('IClinicRepository') private readonly clinicRepository: IClinicRepository) { }

    async create(clinic: ClinicDto) {
        const address = new Address(clinic.street, clinic.number, clinic.block, clinic.city, clinic.zipCode);
        const newClinic = new Clinic(clinic.name, clinic.telephone, clinic.description, address, clinic.email, clinic.cnpj, clinic.specialities);
        return await this.clinicRepository.create(newClinic);
    }
}