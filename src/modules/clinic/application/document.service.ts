import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IClinicRepository } from '../domain/clinic.repository';
import { Clinic } from '../domain/models/clinic.entity';
import { Address } from '../domain/models/address.entity';
import { ClinicDto } from './clinic-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialityModel } from '../infra/models/speciality.model';
import { In, Repository } from 'typeorm';
import { Speciality } from '../domain/models/speciality.entity';
import { DocumentDto } from './document-dto';
import { IDocumentRepository } from '../domain/document.repository';
import { Document } from '../domain/models/document.entity';

@Injectable()
export class DocumentService {
  constructor(
    @Inject('IDocumentRepository')
    private readonly documentRepository: IDocumentRepository,
  ) {}

  async create(document: DocumentDto) {
    const newDocument = new Document(
      document.name,
      document.type,
      document.tamanho,
      document.userId,
    );
    return await this.documentRepository.create(newDocument);
  }

  async findForName(name: string) {
    return await this.documentRepository.findForName(name);
  }

  async findAll() {
    return await this.documentRepository.findAll();
  }

  async update(id: string, document: DocumentDto) {
    const clinic = await this.documentRepository.findById(id);

    if (!clinic) {
      throw new NotFoundException('Document not found');
    }

    clinic.name = document.name;
    clinic.type = document.type;
    clinic.tamanho = document.tamanho;
    clinic.userId = document.userId;

    return await this.documentRepository.update(clinic);
  }

  async delete(id: string) {
    return await this.documentRepository.delete(id);
  }

  async findById(id: string) {
    return await this.documentRepository.findById(id);
  }
}
