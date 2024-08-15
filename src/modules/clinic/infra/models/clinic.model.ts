import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../../domain/entities/address.entity";
import { Speciality } from "../../domain/entities/speciality.entity";
import { SpecialityModel } from "./speciality.model";

@Entity()
export class ClinicModel {

    @Column()
    id: string;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column()
    description: string;

    @Column()
    address: Address;

    @Column()
    email: string;

    @Column()
    cnpj: string;

    @ManyToMany(() => SpecialityModel, speciality => speciality.clinics)
    @JoinTable()
    specialities: Speciality[];

    @Column({ nullable: true })
    instagram: string;
}