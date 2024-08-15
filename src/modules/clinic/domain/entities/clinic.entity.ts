import { Address } from "./address.entity";
import { GenerateId } from "../generateId";
import { Speciality } from "./speciality.entity";

export class Clinic {
    id: string;
    name: string;
    telephone: string;
    description: string;
    address: Address;
    email: string;
    cnpj: string;
    specialities: Speciality[] = [];
    instagram?: string;

    constructor(name: string, 
        telephone: string, 
        description: string, 
        address: Address, 
        email: string, 
        cnpj: string, 
        specialities: Speciality[], 
        instagram?: string) {
        this.id = GenerateId.generate();
        this.name = name;
        this.telephone = telephone;
        this.description = description;
        this.address = address;
        this.email = email;
        this.cnpj = cnpj;
        this.specialities.push(specialities);
        this.instagram = instagram;
    }
}