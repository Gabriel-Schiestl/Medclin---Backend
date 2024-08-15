import { Speciality } from "../domain/entities/speciality.entity";

export class ClinicDto {
    name: string;
    telephone: string;
    description: string;
    street: string;
    number: number;
    block: string;
    city: string;
    zipCode: string;
    email: string;
    cnpj: string;
    specialities: Speciality[];
    instagram?: string;
}