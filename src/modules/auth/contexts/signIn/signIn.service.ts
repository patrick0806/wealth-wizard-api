import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInResponseDTO } from './dtos/response.dto';
import { UnauthorizedException } from '@shared/exceptions/UnauthorizedException';
import { UserRepository } from '@shared/repositories/user.repository';
import { compare } from 'bcrypt';

@Injectable()
export class SignInService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(email: string, password: string): Promise<SignInResponseDTO> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('email or password invalid');
    }

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('email or password invalid');
    }

    const payload = { name: user.name, email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
