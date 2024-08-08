import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository";
import { UserDto } from "../application/user-dto";
import { User } from "./user.entity";


@Injectable()
export class UserService {
    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository) { }

    async findAll() {
        return this.userRepository.findAll();
    }

    async create(user: UserDto) {
        const newUser = new User(user.name, user.email, user.password);
        return await this.userRepository.create(user);
    }

    async findById(id: number) {
        return this.userRepository.findById(id);
    }
}