import { UserDto } from "../application/user-dto";
import { User } from "./user.entity";


export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(user: UserDto): Promise<User>;
}