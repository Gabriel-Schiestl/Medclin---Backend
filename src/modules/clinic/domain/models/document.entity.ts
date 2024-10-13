import { GenerateId } from '../generateId';

export class Document {
  id: string;
  name: string;
  type: string;
  tamanho: number;
  userId: string;

  constructor(name: string, type: string, tamanho: number, userId: string) {
    this.id = GenerateId.generate();
    this.name = name;
    this.type = type;
    this.tamanho = tamanho;
    this.userId = userId;
  }
}
