import { Clinic } from './models/clinic.entity';

export interface IClinicRepository {
  create(clinic: Clinic): Promise<Clinic>;
  findAll(): Promise<Clinic[]>;
  findById(id: string): Promise<Clinic>;
  update(clinic: Clinic): Promise<Clinic>;
  delete(id: string): Promise<void>;
  findForSpeciality(speciality: string): Promise<Clinic[]>;
  findForName(name: string): Promise<Clinic[]>;
}
