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

  @Column()
  userId: string;

  @ManyToOne(() => UserModel, (user) => user.documents)
  @JoinColumn({ name: 'userId' })
  user: UserModel;
}
