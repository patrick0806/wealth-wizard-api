import { Module } from '@nestjs/common';
import { FindUserByEmailService } from './contexts/findUserByEmail/findUserByEmail.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FindUserByEmailService],
  exports: [FindUserByEmailService],
})
export class UsersModule {}
