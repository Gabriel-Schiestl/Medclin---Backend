import { Module } from "@nestjs/common";
import { UserService } from "./domain/user.service";
import { TypeOrmUserRepository } from "./infra/repository/userRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "./infra/models/user.model";

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [],
    providers: [
        UserService,
        {
            provide: 'IUserRepository',
            useClass: TypeOrmUserRepository
        }
    ],
})
export class UserModule{}