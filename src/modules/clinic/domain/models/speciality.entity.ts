import { GenerateId } from '../generateId';

export class Speciality {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = GenerateId.generate();
    this.name = name;
  }
}
