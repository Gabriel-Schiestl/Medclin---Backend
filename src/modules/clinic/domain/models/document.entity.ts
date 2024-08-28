import { GenerateId } from "../generateId";


export class Document {
    id: string;
    name: string;
    type: string;
    tamanho: number;

    constructor(name: string, type: string, tamanho: number) {
        this.id = GenerateId.generate();
        this.name = name;
        this.type = type;
        this.tamanho = tamanho;
    }
}