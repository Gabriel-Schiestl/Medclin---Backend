import { DocumentModel } from "src/modules/clinic/infra/models/document.model";
import { MedCardModel } from "src/modules/clinic/infra/models/medcard.model";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @Column()
  birth: Date;

  @Column()
  telephone: string;

    @Column({nullable: true})
    photo: string;

    @OneToMany(() => DocumentModel, document => document.user)
    documents: DocumentModel[];

    @OneToOne(() => MedCardModel, medcard => medcard.userId)
    medcard: MedCardModel
}
