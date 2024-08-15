import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../domain/user.entity";
import { IUserRepository } from "../../domain/user.repository";
import { UserModel } from "../models/user.model";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TypeOrmUserRepository implements IUserRepository {

    constructor(
        @InjectRepository(UserModel) private readonly userRepository: Repository<UserModel>,
) { }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
}