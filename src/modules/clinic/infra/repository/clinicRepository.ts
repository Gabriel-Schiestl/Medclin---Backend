import { InjectRepository } from "@nestjs/typeorm";
import { Clinic } from "../../domain/entities/clinic.entity";
import { IClinicRepository } from "../../domain/clinic.repository";
import { ClinicModel } from "../models/clinic.model";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TypeOrmClinicRepository implements IClinicRepository {

    constructor(
        @InjectRepository(ClinicModel) private readonly clinicRepository: Repository<ClinicModel>,
) { }

    async create(clinic: Clinic): Promise<Clinic> {
        return await this.clinicRepository.save(clinic);
    }
    
    async findAll(): Promise<Clinic[]> {
        return await this.clinicRepository.find();
    }

    async findById(id: string): Promise<Clinic> {
        return await this.clinicRepository.findOneBy({id});
    }

    async update(id: string, clinic: Clinic): Promise<Clinic> {
        const clinicFound = await this.findById(id);
        Object.assign(clinicFound, clinic);
        return await this.clinicRepository.save(clinicFound);
    }

    async delete(id: string): Promise<void> {
        this.clinicRepository.delete(id);
    }

}