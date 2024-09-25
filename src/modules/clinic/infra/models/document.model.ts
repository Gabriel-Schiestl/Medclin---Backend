import { UserModel } from 'src/modules/user/infra/models/user.model';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MedCardModel } from './medcard.model';

@Entity()
export class DocumentModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  tamanho: number;

  @ManyToOne(() => UserModel, (user) => user.documents)
  user: UserModel;

  @ManyToOne(() => MedCardModel, (card) => card.documents)
  medCard: MedCardModel;
}
