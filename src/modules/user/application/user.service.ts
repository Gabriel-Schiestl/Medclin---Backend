import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "../domain/user.repository";
import { UserDto } from "./user-dto";
import { User } from "../domain/user.entity";


@Injectable()
export class UserService {
    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository) { }

    async create(user: UserDto) {
        const newUser = new User(user.name, user.email, user.password);
        return await this.userRepository.create(newUser);
    }
}