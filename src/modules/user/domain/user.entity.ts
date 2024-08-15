import { GenerateId } from "./generateId";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.id = GenerateId.generate();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}