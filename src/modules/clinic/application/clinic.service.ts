import { Inject, Injectable } from "@nestjs/common";
import { IClinicRepository } from "../domain/clinic.repository";
import { Clinic } from "../domain/entities/clinic.entity";
import { Address } from "../domain/entities/address.entity";
import { ClinicDto } from "./clinic-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { SpecialityModel } from "../infra/models/speciality.model";
import { In, Repository } from "typeorm";

@Injectable()
export class ClinicService {
    constructor(@Inject('IClinicRepository') private readonly clinicRepository: IClinicRepository,
    @InjectRepository(SpecialityModel) private readonly specialityRepository: Repository<SpecialityModel>
) { }

    async create(clinic: ClinicDto) {
        const address = new Address(clinic.street, clinic.number, clinic.state, clinic.city, clinic.zipCode);

        const specialities = await this.specialityRepository.findBy({ id: In(clinic.specialities) });

        const newClinic = new Clinic(clinic.name, clinic.telephone, clinic.description, address, clinic.email, clinic.cnpj, specialities, clinic.instagram);
        return await this.clinicRepository.create(newClinic);
    }

    async findForSpeciality(speciality: string) {
        return await this.clinicRepository.findForSpeciality(speciality);
    }

    async findForName(name: string) {
        return await this.clinicRepository.findForName(name);
    }

    async findAll() {
        return await this.clinicRepository.findAll();
    }
}