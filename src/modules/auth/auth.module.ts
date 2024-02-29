import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { SignInService } from './contexts/signIn/signIn.service';
import { JwtModule } from '@nestjs/jwt';
import { SignInController } from './contexts/signIn/signIn.controller';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  controllers: [SignInController],
  providers: [SignInService],
  exports: [],
})
export class AuthModule {}
