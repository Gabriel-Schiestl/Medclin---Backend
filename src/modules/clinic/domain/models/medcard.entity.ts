import { User } from 'src/modules/user/domain/user.entity';
import { UserModel } from 'src/modules/user/infra/models/user.model';
import { DocumentModel } from '../../infra/models/document.model';
import { GenerateId } from '../generateId';

export class MedCard {
  id: string;
  personalInformations: UserModel;
  status: boolean;

  constructor(id: string, personalInformations: UserModel, status: boolean) {
    this.id = GenerateId.generate();
    this.personalInformations = personalInformations;
    this.status = status;
  }
}
