import { User } from 'src/modules/user/domain/user.entity';
import { UserModel } from 'src/modules/user/infra/models/user.model';
import { DocumentModel } from '../../infra/models/document.model';
import { GenerateId } from '../generateId';

export class MedCard {
  id: string;
  documents: DocumentModel[];
  personalInformations: UserModel;
  status: boolean;

  constructor(
    id: string,
    documents: DocumentModel[],
    personalInformations: UserModel,
    status: boolean,
  ) {
    this.id = GenerateId.generate();
    this.documents = documents;
    this.personalInformations = personalInformations;
    this.status = status;
  }
}
