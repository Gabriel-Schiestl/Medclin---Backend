import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../../domain/models/address.entity';
import { SpecialityModel } from './speciality.model';

@Entity({ name: 'clinica' })
export class ClinicModel extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  telephone: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'json' })
  address: Address;

  @Column()
  email: string;

  @Column()
  cnpj: string;

  @ManyToMany(() => SpecialityModel, (speciality) => speciality.clinics)
  @JoinTable({ name: 'clinica_especialidades' })
  specialities: SpecialityModel[];

  @Column({ nullable: true })
  instagram: string;
}
