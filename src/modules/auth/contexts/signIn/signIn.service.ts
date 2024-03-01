import { Injectable } from '@nestjs/common';
import { FindUserByEmailService } from '@modules/users/contexts/findUserByEmail/findUserByEmail.service';
import { JwtService } from '@nestjs/jwt';
import { SignInResponseDTO } from './dtos/response.dto';
import { UnauthorizedException } from '@shared/exceptions/UnauthorizedException';

@Injectable()
export class SignInService {
  constructor(
    private findUserByEmail: FindUserByEmailService,
    private jwtService: JwtService,
  ) {}

  async execute(email: string, password: string): Promise<SignInResponseDTO> {
    const user = await this.findUserByEmail.excecute(email);
    if (!user) {
      throw new UnauthorizedException('email or password invalid');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('email or password invalid');
    }

    const payload = { name: user.name, email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
