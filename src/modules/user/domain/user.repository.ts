import { UserDto } from '../application/user-dto';
import { User } from './user.entity';

export interface IUserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
  update(user: User): Promise<void>;
}
