
interface IAddress {
    street: string;
    number: number;
    block: string;
    city: string;
    zipCode: string;
}

export class Address implements IAddress {
    street: string;
    number: number;
    block: string;
    city: string;
    zipCode: string;
    
    constructor(street: string, number: number, block: string, city: string, zipCode: string) {
        this.street = street;
        this.number = number;
        this.block = block;
        this.city = city;
        this.zipCode = zipCode;
    }
}