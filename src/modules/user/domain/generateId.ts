import { v4 } from "uuid";


export class GenerateId {
    static generate(): string {
        return v4();
    }
}