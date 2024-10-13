import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentModel } from '../models/document.model';
import { Repository } from 'typeorm';
import { Document } from '../../domain/models/document.entity';
import { IDocumentRepository } from '../../domain/document.repository';

@Injectable()
export class DocumentRepository implements IDocumentRepository {
  constructor(
    @InjectRepository(DocumentModel)
    private readonly documentRepository: Repository<DocumentModel>,
  ) {}

  async create(document: Document) {
    return await this.documentRepository.save(document);
  }

  async findAll() {
    return await this.documentRepository.find();
  }

  async findForName(name: string): Promise<DocumentModel[]> {
    return await this.documentRepository.find({
      where: { name },
    });
  }

  async findById(id: string) {
    return await this.documentRepository.findOneBy({ id });
  }

  async update(document: Document) {
    return await this.documentRepository.save(document);
  }

  async delete(id: string) {
    await this.documentRepository.delete(id);
  }
}
