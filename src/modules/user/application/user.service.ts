import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../domain/user.repository';
import { UserDto } from './user-dto';
import { User } from '../domain/user.entity';
import { MedCardModel } from 'src/modules/clinic/infra/models/medcard.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async create(user: UserDto) {
    const newUser = new User(
      user.name,
      user.email,
      user.password,
      user.cpf,
      user.birth,
      user.telephone,
    );

    await MedCardModel.create({ user: newUser, status: false });

    return await this.userRepository.create(newUser);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }

  async findById(id: string) {
    return await this.userRepository.findById(id);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async delete(id: string) {
    return await this.userRepository.delete(id);
  }

  async update(id: string, user: UserDto) {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error('Usuário não encontrado');
    }

    userExists.name = user.name;
    userExists.email = user.email;
    userExists.password = user.password;
    userExists.cpf = user.cpf;
    userExists.birth = user.birth;
    userExists.telephone = user.telephone;

    return await this.userRepository.update(userExists);
  }
}
