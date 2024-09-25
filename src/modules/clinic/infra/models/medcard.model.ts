import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentModel } from './document.model';
import { UserModel } from 'src/modules/user/infra/models/user.model';

@Entity()
export class MedCardModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => DocumentModel, (document) => document.medCard)
  documents: DocumentModel[];

  @OneToOne(() => UserModel)
  personalInformations: UserModel;

  @Column()
  status: boolean;
}
