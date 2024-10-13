import { DocumentModel } from 'src/modules/clinic/infra/models/document.model';
import { GenerateId } from './generateId';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  birth: Date;
  telephone: string;

  constructor(
    name: string,
    email: string,
    password: string,
    cpf: string,
    birth: Date,
    telephone: string,
  ) {
    this.id = GenerateId.generate();
    this.name = name;
    this.email = email;
    this.password = password;
    this.cpf = cpf;
    this.birth = birth;
    this.telephone = telephone;
  }
}
