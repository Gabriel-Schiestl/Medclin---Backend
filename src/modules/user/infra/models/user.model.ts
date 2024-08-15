import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserModel {

    @Column()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}