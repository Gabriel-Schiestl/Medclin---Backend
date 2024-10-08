import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClinicModel } from './clinic.model';

@Entity()
export class SpecialityModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ClinicModel, (clinic) => clinic.specialities)
  clinics: ClinicModel[];
}
