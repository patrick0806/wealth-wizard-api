import { Module } from '@nestjs/common';
import { FindUserByEmailService } from './contexts/findUserByEmail/findUserByEmail.service';
import { CreateUserService } from './contexts/createUser/createUser.service';
import { UserRepository } from '@shared/repositories/user.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [CreateUserService, FindUserByEmailService, UserRepository],
  exports: [CreateUserService, FindUserByEmailService],
})
export class UsersModule {}
