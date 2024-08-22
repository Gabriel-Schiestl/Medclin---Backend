import { Speciality } from "../domain/entities/speciality.entity";

export class ClinicDto {
    name: string;
    telephone: string;
    description: string;
    street: string;
    number: number;
    city: string;
    state:string;
    zipCode: string;
    email: string;
    cnpj: string;
    specialities: number[];
    instagram?: string;
}