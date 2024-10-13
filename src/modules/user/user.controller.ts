import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserDto } from './application/user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/email/:email')
  async findByEmail(@Param() email: string) {
    return await this.userService.findByEmail(email);
  }

  @Get('/:id')
  async findById(@Param() id: string) {
    return await this.userService.findById(id);
  }

  @Delete('/delete/:id')
  async delete(@Param() id: string) {
    return await this.userService.delete(id);
  }

  @Put('/update/:id')
  async update(@Param() id: string, @Body() user: UserDto) {
    return await this.userService.update(id, user);
  }
}
