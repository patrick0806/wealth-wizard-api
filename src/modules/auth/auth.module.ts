import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { SignInService } from './contexts/signIn/signIn.service';
import { JwtModule } from '@nestjs/jwt';
import { SignInController } from './contexts/signIn/signIn.controller';
import { SignUpService } from './contexts/signUp/signUp.service';
import { SignUpController } from './contexts/signUp/signUp.controller';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  controllers: [SignInController, SignUpController],
  providers: [SignInService, SignUpService],
  exports: [],
})
export class AuthModule {}
