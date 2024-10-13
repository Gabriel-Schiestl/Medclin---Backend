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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => UserModel, (user) => user.medcard)
  @JoinColumn({ name: 'userId' })
  user: UserModel;

  @Column()
  status: boolean;
}
