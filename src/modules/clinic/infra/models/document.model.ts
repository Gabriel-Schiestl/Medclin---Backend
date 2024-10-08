import { UserModel } from 'src/modules/user/infra/models/user.model';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MedCardModel } from './medcard.model';

@Entity({ name: 'documento' })
export class DocumentModel extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
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
  @JoinColumn({ name: 'medCardId' })
  medCard: MedCardModel;
}
