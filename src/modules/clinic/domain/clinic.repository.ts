import { Clinic } from "./entities/clinic.entity";

export interface IClinicRepository {
    create(clinic: Clinic): Promise<Clinic>;
    findAll(): Promise<Clinic[]>;
    findById(id: string): Promise<Clinic>;
    update(id: string, clinic: Clinic): Promise<Clinic>;
    delete(id: string): Promise<void>;
}