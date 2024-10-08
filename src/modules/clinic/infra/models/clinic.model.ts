import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../../domain/models/address.entity";
import { SpecialityModel } from "./speciality.model";

@Entity()
export class ClinicModel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column({nullable: true})
    description: string;

    @Column({ type: 'json' })
    address: Address;

    @Column()
    email: string;

    @Column()
    cnpj: string;

    @ManyToMany(() => SpecialityModel, speciality => speciality.clinics)
    @JoinTable()
    specialities: SpecialityModel[];

    @Column({ nullable: true })
    instagram: string;
}