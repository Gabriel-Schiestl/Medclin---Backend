import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IClinicRepository } from '../domain/clinic.repository';
import { Clinic } from '../domain/models/clinic.entity';
import { Address } from '../domain/models/address.entity';
import { ClinicDto } from './clinic-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialityModel } from '../infra/models/speciality.model';
import { In, Repository } from 'typeorm';
import { Speciality } from '../domain/models/speciality.entity';

@Injectable()
export class ClinicService {
  constructor(
    @Inject('IClinicRepository')
    private readonly clinicRepository: IClinicRepository,
    @InjectRepository(SpecialityModel)
    private readonly specialityRepository: Repository<SpecialityModel>,
  ) {}

  async create(clinic: ClinicDto) {
    const address = new Address(
      clinic.street,
      clinic.number,
      clinic.state,
      clinic.city,
      clinic.zipCode,
    );

    const specialitiesDb = await this.specialityRepository.findBy({
      id: In(clinic.specialities),
    });

    const specialities: Speciality[] = specialitiesDb;

    const newClinic = new Clinic(
      clinic.name,
      clinic.telephone,
      clinic.description,
      address,
      clinic.email,
      clinic.cnpj,
      specialities,
      clinic.instagram,
    );
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

  async update(id: string, clinicDto: ClinicDto) {
    const clinic = await this.clinicRepository.findById(id);

    if (!clinic) {
      throw new NotFoundException(`Clinica com ID ${id} não encontrada`);
    }

    const address = new Address(
      clinicDto.street,
      clinicDto.number,
      clinicDto.state,
      clinicDto.city,
      clinicDto.zipCode,
    );
    const specialitiesDb = await this.specialityRepository.findBy({
      id: In(clinicDto.specialities),
    });

    const specialities: Speciality[] = specialitiesDb;

    clinic.name = clinicDto.name;
    clinic.telephone = clinicDto.telephone;
    clinic.description = clinicDto.description;
    clinic.address = address;
    clinic.email = clinicDto.email;
    clinic.cnpj = clinicDto.cnpj;
    clinic.specialities = specialities;
    clinic.instagram = clinicDto.instagram;

    return await this.clinicRepository.update(clinic);
  }

  async delete(id: string) {
    const clinic = await this.clinicRepository.findById(id);

    if (!clinic) {
      throw new NotFoundException(`Clinica com ID ${id} não encontrada`);
    }

    return await this.clinicRepository.delete(id);
  }

  async createSpeciality(name: string) {
    const speciality = new Speciality(name);
    return await this.specialityRepository.save(speciality);
  }
}
