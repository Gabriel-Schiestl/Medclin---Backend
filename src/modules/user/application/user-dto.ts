import { DocumentModel } from 'src/modules/clinic/infra/models/document.model';

export class UserDto {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birth: Date;
  telephone: string;
  photo: string;
}
