import { Clinic } from './models/clinic.entity';
import { Document } from './models/document.entity';

export interface IDocumentRepository {
  create(document: Document): Promise<Document>;
  findAll(): Promise<Document[]>;
  findById(id: string): Promise<Document>;
  update(document: Document): Promise<Document>;
  delete(id: string): Promise<void>;
  findForName(name: string): Promise<Document[]>;
}
