import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DocumentModel } from "./document.model";
import { UserModel } from "src/modules/user/infra/models/user.model";


@Entity()
export class MedCardModel {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => DocumentModel, document => document.medCard)
    documents: DocumentModel[];

    @Column({type: 'jsonb'})
    personalInformations: UserModel;

    @Column()
    status: boolean;
}