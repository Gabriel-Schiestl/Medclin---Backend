import { Module } from "@nestjs/common";
import { UserService } from "./application/user.service";
import { TypeOrmUserRepository } from "./infra/repository/userRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "./infra/models/user.model";
import { UserController } from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [
        UserService,
        {
            provide: 'IUserRepository',
            useClass: TypeOrmUserRepository
        }
    ],
})
export class UserModule{}