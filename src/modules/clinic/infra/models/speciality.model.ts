import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClinicModel } from './clinic.model';

@Entity({ name: 'especialidade' })
export class SpecialityModel extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => ClinicModel, (clinic) => clinic.specialities)
  clinics: ClinicModel[];
}
