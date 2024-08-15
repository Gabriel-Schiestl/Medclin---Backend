import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./application/user.service";
import { UserDto } from "./application/user-dto";

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) { }

@Post()
async create(@Body() user: UserDto) {
  return await this.userService.create(user);
}
}