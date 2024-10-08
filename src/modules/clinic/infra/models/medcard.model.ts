import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DocumentModel } from "./document.model";
import { UserModel } from "src/modules/user/infra/models/user.model";


@Entity()
export class MedCardModel {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => DocumentModel, document => document.medCard)
    documents: DocumentModel[];

    @OneToOne(() => UserModel, user => user.medcard)
    @JoinColumn({name: 'userId'})
    userId: UserModel;

    @Column()
    status: boolean;
}