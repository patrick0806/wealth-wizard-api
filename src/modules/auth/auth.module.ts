import { Module } from '@nestjs/common';
import { SignInService } from './contexts/signIn/signIn.service';
import { JwtModule } from '@nestjs/jwt';
import { SignInController } from './contexts/signIn/signIn.controller';
import { SignUpService } from './contexts/signUp/signUp.service';
import { SignUpController } from './contexts/signUp/signUp.controller';
import { UserRepository } from '@shared/repositories/user.repository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [SignInController, SignUpController],
  providers: [SignInService, SignUpService, UserRepository],
  exports: [],
})
export class AuthModule {}
