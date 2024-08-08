import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./domain/user.service";
import { UserDto } from "./application/user-dto";

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) { }

@Get()
async findAll() {
  return await this.userService.findAll();
}

@Post()
async create(@Body() user: UserDto) {
  return await this.userService.create(user);
}
}