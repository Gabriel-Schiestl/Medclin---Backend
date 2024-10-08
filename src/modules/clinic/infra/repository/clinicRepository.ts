import { InjectRepository } from '@nestjs/typeorm';
import { Clinic } from '../../domain/models/clinic.entity';
import { IClinicRepository } from '../../domain/clinic.repository';
import { ClinicModel } from '../models/clinic.model';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SpecialityModel } from '../models/speciality.model';

@Injectable()
export class TypeOrmClinicRepository implements IClinicRepository {
  constructor(
    @InjectRepository(ClinicModel)
    private readonly clinicRepository: Repository<ClinicModel>,
    @InjectRepository(SpecialityModel)
    private readonly specialityModel: Repository<SpecialityModel>,
  ) {}

  async create(clinic: Clinic): Promise<Clinic> {
    return await this.clinicRepository.save(clinic);
  }

  async findAll(): Promise<ClinicModel[]> {
    return await this.clinicRepository.find({ relations: ['specialities'] });
  }

  async findById(id: string): Promise<Clinic> {
    return await this.clinicRepository.findOneBy({ id });
  }

  async update(clinic: Clinic): Promise<Clinic> {
    return await this.clinicRepository.save(clinic);
  }

  async delete(id: string): Promise<void> {
    this.clinicRepository.delete(id);
  }

  async findForSpeciality(speciality: string): Promise<ClinicModel[]> {
    const specialityFound = await this.specialityModel.findOne({
      where: { name: speciality },
    });

    return await this.clinicRepository.find({
      relations: ['specialities'],
      where: {
        specialities: {
          id: specialityFound.id,
        },
      },
    });
  }

  async findForName(name: string): Promise<ClinicModel[]> {
    return await this.clinicRepository.find({
      where: { name },
      relations: ['specialities'],
    });
  }
}
