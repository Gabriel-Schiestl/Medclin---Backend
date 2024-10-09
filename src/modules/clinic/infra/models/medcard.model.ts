import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentModel } from './document.model';
import { UserModel } from 'src/modules/user/infra/models/user.model';

@Entity({ name: 'medcard' })
export class MedCardModel extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @OneToMany(() => DocumentModel, (document) => document.medCard)
  documents: DocumentModel[];

  @OneToOne(() => UserModel, (user) => user.medcard)
  @JoinColumn({ name: 'userId' })
  userId: UserModel;

  @Column()
  status: boolean;
}
