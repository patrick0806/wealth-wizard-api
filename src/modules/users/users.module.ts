import { Module } from '@nestjs/common';
import { UserRepository } from '@shared/repositories/user.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [UserRepository],
  exports: [],
})
export class UsersModule {}
