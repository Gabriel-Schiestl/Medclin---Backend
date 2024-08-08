import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './modules/user/infra/models/user.model';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'postgres',
      entities: [UserModel],
      synchronize: true,
    },
  )],
})
export class AppModule {}
