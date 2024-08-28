
interface IAddress {
    street: string;
    number: number;
    state: string;
    city: string;
    zipCode: string;
}

export class Address implements IAddress {
    street: string;
    number: number;
    state: string;
    city: string;
    zipCode: string;
    
    constructor(street: string, number: number, state: string, city: string, zipCode: string) {
        this.street = street;
        this.number = number;
        this.state = state;
        this.city = city;
        this.zipCode = zipCode;
    }
}